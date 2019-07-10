module.exports = class ObjectSimilarityCalculator {
  //Indicates it's an Abstract Class
  constructor() {
    if (new.target === ObjectSimilarityCalculator) {
      throw new TypeError(
        "Cannot construct ObjectSimilarityCalculator instances directly"
      );
    }
  }

  async getSimilarity(anObject, anotherObject) {
    throw new TypeError("Must override method in the subclass");
  }

  async getSimilarityMap(anObject, aMapOfObjects) {
    this.result = new Map();
    for (var key in aMapOfObjects) {
      let similarityValue = await this.getSimilarity(anObject, aMapOfObjects[key]);
      if ((similarityValue > 0.5)) {
        this.result.set(aMapOfObjects[key], similarityValue);
      }
    }
    return this.result;
  }
};
