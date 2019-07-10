const ComposedObjectSimilarityCalculator = require("../ComposedObjectSimilarityCalculator");

module.exports = class AverageSimilarityCalculator extends ComposedObjectSimilarityCalculator {
  constructor(aConfiguration) {
    super(aConfiguration);
  }

  integrate(aMap) {
    let total = 0;
    let lenghtMap = 0;
    for (var key in aMap) {
      total += aMap[key];
      lenghtMap++;
    }
    return total / lenghtMap;
  }
};
