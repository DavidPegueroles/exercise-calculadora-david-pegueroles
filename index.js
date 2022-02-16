require("dotenv").config();
const debug = require("debug")("calculator:index");
const exitProcessMessage = require("./exitProcessMessage");
const operations = require("./operations");
const { aNumber, bNumber } = require("./parseNumbersReceived");

if (!isNaN(aNumber) && !isNaN(bNumber)) {
  operations(aNumber, bNumber);
} else {
  debug(exitProcessMessage);
  process.exit(0);
}
