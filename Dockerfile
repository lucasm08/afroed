FROM node:10.16.1-alpine as builder

WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --silent --production
RUN cp -R node_modules node_modules_dist
RUN yarn install --silent
COPY . .
RUN yarn build

FROM node:10.16.1-alpine as production

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/app
COPY --from=builder /usr/src/app/node_modules_dist ./node_modules
COPY --from=builder /usr/src/app/lib ./lib
COPY --from=builder /usr/src/app/src ./src
COPY package.json .

ENV NODE_ENV production
CMD ["yarn","serve"]

