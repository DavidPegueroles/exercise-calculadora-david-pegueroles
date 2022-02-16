const prompt = require("prompt");
const operations = require("./operations");

const promptInputs = async () => {
  const numbers = await prompt.get(["a", "b"]);

  operations(parseInt(numbers.a), parseInt(numbers.b));
};

module.exports = promptInputs;
