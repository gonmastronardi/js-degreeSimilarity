const SimpleObjectSimilarityCalculator = require("../SimpleObjectSimilarityCalculator");
const stringSimilarity = require("string-similarity");

module.exports = class DiceStringSimilarityCalculator extends SimpleObjectSimilarityCalculator {
  constructor() {
    super();
  }

  async getSimilarity(aString, anotherString) {
    if (!(aString || anotherString)) return 0;
    return stringSimilarity.compareTwoStrings(aString, anotherString);
  }
};
