const ObjectSimilarityCalculator = require("./ObjectSimilarityCalculator");

module.exports = class ComposedObjectSimilarityCalculator extends ObjectSimilarityCalculator {
  constructor(aConfiguration) {
    super();
    this.calculator = aConfiguration;
  }

  //it receives 2 JSON obects, and compares its fields receiving a value for each one. 
  async getSimilarity(anObject, anotherObject) {
    //map for values of the objects.
    this.fieldsSimilitudes = new Map();
    for (var key in this.calculator) {
      //it stores a value of similarity for each field
      this.fieldsSimilitudes[key] = await this.calculator[key].getSimilarity(
        anObject[key],
        anotherObject[key]
      );
    }
    //integrates all the values and returns the final result.
    return this.integrate(this.fieldsSimilitudes);
  }

  
  integrate(aMap) {
    throw new TypeError("Must override method in the subclass");
  }
};
