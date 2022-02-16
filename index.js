require("dotenv").config();
const operations = require("./operations");
const { aNumber, bNumber } = require("./parseNumbersReceived");

operations(aNumber, bNumber);
