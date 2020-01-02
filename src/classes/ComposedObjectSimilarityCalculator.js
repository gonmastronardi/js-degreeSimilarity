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
      //cheks if both values are complete
      console.log(anObject[key])
      console.log(anotherObject[key])
      if (!anotherObject[key] || !anObject[key]) {
        this.fieldsSimilitudes[key] = null;
      } else {
        //calls method to compare fields
        this.fieldsSimilitudes[key] = await this.calculator[key].getSimilarity(
          anObject[key],
          anotherObject[key]
        );
      }
    }
    console.log(this.fieldsSimilitudes);
    //integrates all the values and returns the final result.
    return this.integrate(this.fieldsSimilitudes);
  }

  integrate(aMap) {
    throw new TypeError("Must override method in the subclass");
  }
};
