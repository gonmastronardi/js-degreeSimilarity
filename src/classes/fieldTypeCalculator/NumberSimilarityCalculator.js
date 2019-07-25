const SimpleObjectSimilarityCalculator = require("../SimpleObjectSimilarityCalculator");

module.exports = class NumberSimilarityCalculator extends SimpleObjectSimilarityCalculator {
  constructor() {
    super();
  }

  /** it receives 2 numbers or prices and returns a value of similarity 
   * working with the average distance between them
  */
  async getSimilarity(aNumber, anotherNumber) {
    if (!(aNumber || anotherNumber)) return 0;
    //maximum average distance (allows a percentage of difference between the 2 numbers)
    const maxAverage = 0.05;
    let firstNumber = parseFloat(aNumber.replace("$", ""));
    let secondNumber = parseFloat(anotherNumber.replace("$", ""));
    if (firstNumber === secondNumber) {
      return 1;
    }
    let greater;
    let smaller;
    if (firstNumber > secondNumber) {
      greater = firstNumber;
      smaller = secondNumber;
    } else {
      greater = secondNumber;
      smaller = firstNumber;
    }
    let distance = greater - smaller;
    let average = distance / greater;

    if (average < maxAverage) {
      return 1 - average;
    } else {
      return 0;
    }
  }
};
