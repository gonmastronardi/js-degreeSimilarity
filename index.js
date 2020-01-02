/**
 * Recibir un objeto y el JSON con todos los objetos, para luego comparar ese objeto contra
 * todos los de la lista. Para cada uno de los objetos obtener un grado de similitud,
 * y si dicho grado supera un limite predefinido, ese objeto sera devuelto.
 */

//necesito obtener configuracion previa, con los nombres de los campos para poder
//asignarle a cada uno su comparador de grado de similitud correspondiente
const fs = require("fs-extra");
const AverageSimilarityCalculator = require("./src/classes/similarityCalculatorMethods/AverageSimilarityCalculator");
const FieldTypeCalculatorFactory = require("./src/classes/fieldTypeCalculator/FieldTypeCalculatorFactory");

var configuration = {
  name: FieldTypeCalculatorFactory.diceStringSimilarityCalculator,
  processor: FieldTypeCalculatorFactory.diceStringSimilarityCalculator,
  // memory: FieldTypeCalculatorFactory.simpleNumberSimilarityCalculator,
  camera: FieldTypeCalculatorFactory.simpleNumberSimilarityCalculator,
  price: FieldTypeCalculatorFactory.numberDistanceSimilarityCalculator
};

const averageSimilarityCalculator = new AverageSimilarityCalculator(
  configuration
);

this.anObject = fs.readJSONSync("./data/object2.json");

this.input = fs.readJSONSync("./data/input2.json");

//code for an object and a JSON list

averageSimilarityCalculator
  .getSimilarityMap(this.anObject, this.input)
  .then(result =>
    fs.writeFileSync("./data/output.json", JSON.stringify([...result]), "utf-8")
  )
  .catch(err => console.error(err));

//code for 2 JSON objects

// averageSimilarityCalculator
//   .getSimilarity(this.anObject, this.anotherObject)
//   .then(result =>
//     fs.writeFileSync("./data/output.json", JSON.stringify(result), "utf-8")
//   )
//   .catch(err => console.error(err));
