const { species } = require('../data/zoo_data');

function defaultAnimalsCounter() {
  const result = {};

  species.forEach((specie) => {
    result[specie.name] = specie.residents.length;
  });

  return result;
}

function animalsCounterBySpecie(specie) {
  const animal = species.find(({ name }) => name === specie);

  return animal.residents.length;
}

function animalsCouterBySpecieAndSex(specie, animalSex) {
  const animal = species.find(({ name }) => name === specie);

  const quantity = animal.residents.filter(({ sex }) => sex === animalSex).length;

  return quantity;
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) return defaultAnimalsCounter();

  const { specie, sex } = animal;

  if (specie && sex) return animalsCouterBySpecieAndSex(specie, sex);

  if (specie) return animalsCounterBySpecie(specie);
}

module.exports = countAnimals;
