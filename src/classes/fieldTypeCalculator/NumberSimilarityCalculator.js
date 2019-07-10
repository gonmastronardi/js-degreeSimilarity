const SimpleObjectSimilarityCalculator = require("../SimpleObjectSimilarityCalculator");

module.exports = class NumberSimilarityCalculator extends SimpleObjectSimilarityCalculator {
  constructor() {
    super();
  }
  
  async getSimilarity(aNumber, anotherNumber) {
    if (!(aNumber || anotherNumber)) return 0;
    const maxAverage = 0.05;
    let firstNumber = parseFloat(aNumber.replace('$',''));
    let secondNumber = parseFloat(anotherNumber.replace('$',''));
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
