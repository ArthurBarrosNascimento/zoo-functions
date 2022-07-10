const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(idEmployee) {
  // seu código aqui
  const employee = employees.find(({ id }) => id === idEmployee);

  const specieId = employee.responsibleFor.find((responsibleFor) => responsibleFor.length);

  const animalId = species.find((animal) => animal.id === specieId);

  const ages = animalId.residents.map(({ age }) => Math.max(age));
  console.log(ages);
  const animlaOlder = ages.indexOf(Math.max(...ages));

  return Object.values(animalId.residents[animlaOlder]);
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
