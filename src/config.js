'use strict';

const PREFIX = '/api';
const URL_API_BTC_TO_UAH_RATE =
  'https://api.binance.com/api/v3/ticker/price?symbol=BTCUAH';
const ERR_CODE_NO_SUCH_FILE = 'ENOENT';
const ERRNO_NO_SUCH_FILE = -4058;

module.exports = {
  URL_API_BTC_TO_UAH_RATE,
  PREFIX,
  ERRNO_NO_SUCH_FILE,
  ERR_CODE_NO_SUCH_FILE,
};
