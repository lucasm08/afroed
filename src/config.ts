require('dotenv').config();

export const config = {
  isDev: process.env.NODE_ENV !== 'production',
  port: parseInt(process.env.PORT || '3001', 10),
};
