const SimpleObjectSimilarityCalculator = require("../SimpleObjectSimilarityCalculator");
const stringSimilarity = require("string-similarity");

module.exports = class DiceStringSimilarityCalculator extends SimpleObjectSimilarityCalculator {
  constructor() {
    super();
  }

  /**it receives 2 strings and returns a similarity value between 0 and 1
   * helped by an external library that uses Dice's coefficient.
   */
  async getSimilarity(aString, anotherString) {
    // if (!(aString || anotherString)) return 0;
    // return stringSimilarity.compareTwoStrings(aString, anotherString);
    if (((aString&&anotherString)!== undefined)){
      //do stuff if query is defined and not null
      return stringSimilarity.compareTwoStrings(aString, anotherString);
    } else {
      return 0
    }
  }
};
