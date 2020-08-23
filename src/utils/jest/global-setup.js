const dotenv = require('dotenv');
const path = require('path');
const nock = require('nock');

module.exports = async () => {
  require('dotenv').config({
    path: path.resolve(process.cwd(), '.env.test'),
  });
  nock.disableNetConnect();
  nock.enableNetConnect(/(localhost)/);
};
