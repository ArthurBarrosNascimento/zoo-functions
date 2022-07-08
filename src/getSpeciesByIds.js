const { species } = require('../data/zoo_data');

function getSpeciesByIds(...idsArray) {
  const result = [];

  idsArray.forEach((id) => {
    const animal = species.find((specie) => specie.id === id);
    result.push(animal);
  });

  return result;
}
getSpeciesByIds();
module.exports = getSpeciesByIds;
