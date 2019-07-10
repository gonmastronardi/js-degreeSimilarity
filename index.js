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
  titulo: FieldTypeCalculatorFactory.diceStringSimilarityCalculator,
  precio: FieldTypeCalculatorFactory.numberSimilarityCalculator,
  marca: FieldTypeCalculatorFactory.diceStringSimilarityCalculator
};

const averageSimilarityCalculator = new AverageSimilarityCalculator(
  configuration
);

this.anObject = fs.readJSONSync("./data/anObject.json");

this.anotherObject = fs.readJSONSync("./data/anotherObject.json");

this.aMapOfObjects = fs.readJsonSync("./data/aMapOfObjects.json");

//code for an object and a JSON list

averageSimilarityCalculator
  .getSimilarityMap(this.anObject, this.aMapOfObjects)
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
