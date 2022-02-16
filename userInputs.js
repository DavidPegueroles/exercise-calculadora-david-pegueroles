const { program } = require("commander");

program.option("-a, --aNumber <number>");
program.option("-b, --bNumber <number>");
program.parse();

const receivedNumbersString = program.opts();

module.exports = receivedNumbersString;
