const ComposedObjectSimilarityCalculator = require("../ComposedObjectSimilarityCalculator");

module.exports = class AverageSimilarityCalculator extends ComposedObjectSimilarityCalculator {
  constructor(aConfiguration) {
    super(aConfiguration);
  }

  integrate(aMap) {
    let sumFields = 0;
    let totalFields = 0;
    for (var key in aMap) {
      if (aMap[key] != null){
        sumFields += aMap[key];
        totalFields++;
      }
    }
    console.log('Total: '+sumFields)
    console.log('Number of fields: ' + totalFields)
    console.log('Result: '+ (sumFields/totalFields))
    console.log('-')
    return sumFields / totalFields;
  }
};
