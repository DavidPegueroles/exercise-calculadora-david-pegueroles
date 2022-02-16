const debug = require("debug")("calculator:filter-inputs");
const exitProcessMessage = require("./exitProcessMessage");
const operations = require("./operations");
const { aNumber, bNumber } = require("./parseNumbersReceived");
const promptInputs = require("./promptInputs");
const receivedNumbersString = require("./userInputs");

const filterInputs = () => {
  if (
    typeof receivedNumbersString.aNumber === "undefined" &&
    typeof receivedNumbersString.aNumber === "undefined"
  ) {
    promptInputs();
  } else if (!isNaN(aNumber) && !isNaN(bNumber)) {
    operations(aNumber, bNumber);
  } else {
    debug(exitProcessMessage);
    process.exit(0);
  }
};

module.exports = filterInputs();
