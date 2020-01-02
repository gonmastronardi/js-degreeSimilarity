const SimpleObjectSimilarityCalculator = require("../SimpleObjectSimilarityCalculator");

module.exports = class SimpleNumberSimilarityCalculator extends SimpleObjectSimilarityCalculator {
  constructor() {
    super();
  }

  /**For every value it receives, it only gets the numbers and compares them.
   * e.g: 16 GB takes 16. 8 GB takes 8.
   */
  async getSimilarity(aNumber, anotherNumber) {
    if ((aNumber && anotherNumber) !== undefined) {
      //do stuff if query is defined and not null
      let firstNumber = aNumber.replace(/[^0-9]/g, "");
      let secondNumber = anotherNumber.replace(/[^0-9]/g, "");
      if (firstNumber === secondNumber) {
        return 1;
      } else return 0;
    } else {
      return 0;
    }
  }
};
