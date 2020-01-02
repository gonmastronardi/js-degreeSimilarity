const DiceStringSimilarityCalculator = require("./DiceStringSimilarityCalculator");
const NumberDistanceSimilarityCalculator = require("./NumberDistanceSimilarityCalculator");
const SimpleNumberSimilarityCalculator = require("./SimpleNumberSimilarityCalculator");
module.exports = {
  diceStringSimilarityCalculator: new DiceStringSimilarityCalculator(),
  numberDistanceSimilarityCalculator: new NumberDistanceSimilarityCalculator(),
  simpleNumberSimilarityCalculator: new SimpleNumberSimilarityCalculator()
};
