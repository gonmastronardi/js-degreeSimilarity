const DiceStringSimilarityCalculator = require("./DiceStringSimilarityCalculator");
const NumberSimilarityCalculator = require("./NumberSimilarityCalculator");
module.exports = {
  diceStringSimilarityCalculator: new DiceStringSimilarityCalculator(),
  numberSimilarityCalculator: new NumberSimilarityCalculator()
};
