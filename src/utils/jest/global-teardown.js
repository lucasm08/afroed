const nock = require('nock');

module.exports = async () => {
  nock.enableNetConnect();
};
