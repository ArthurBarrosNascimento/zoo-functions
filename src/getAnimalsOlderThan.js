const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animalName, idade) {
  // seu código aqui
  const animal = species.find(({ name }) => name === animalName);

  const hasMinAge = animal.residents.every(({ age }) => age >= idade);

  return hasMinAge;
}

module.exports = getAnimalsOlderThan;
