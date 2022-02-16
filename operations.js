const chalk = require("chalk");
const debug = require("debug")("calculator:operations");

const operations = (a, b) => {
  debug(
    chalk.bgBlack.blue(
      `${chalk.yellow(a)} + ${chalk.magenta(b)} = ${chalk.green(a + b)}`
    )
  );
  debug(
    chalk.bgBlack.blue(
      `${chalk.yellow(a)} - ${chalk.magenta(b)} = ${chalk.green(a - b)}`
    )
  );
  debug(
    chalk.bgBlack.blue(
      `${chalk.yellow(a)} * ${chalk.magenta(b)} = ${chalk.green(a * b)}`
    )
  );
  debug(
    chalk.bgBlack.blue(
      `${chalk.yellow(a)} / ${chalk.magenta(b)} = ${chalk.green(a / b)}`
    )
  );
};

module.exports = operations;
