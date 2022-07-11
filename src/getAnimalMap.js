const { species } = require('../data/zoo_data');

const locationsList = [
  'NE',
  'NW',
  'SE',
  'SW',
];

function getSpecies(locationName) {
  return species.filter(({ location }) => location === locationName);
}

function getSpeciesByLocation(locationList) {
  const result = {};

  locationList.forEach((locationName) => {
    const filteredSpecies = getSpecies(locationName);
    result[locationName] = filteredSpecies.map(({ name }) => name);
  });

  return result;
}

function sortNames(namesList, isSorted) {
  if (isSorted) return namesList.sort();

  return namesList;
}

function getSpeciesByLocationWithName(locationList, sexo, isSorted) {
  const result = {};

  locationList.forEach((locationName) => {
    result[locationName] = [];

    const filteredSpecies = getSpecies(locationName);

    filteredSpecies.forEach(({ name, residents }) => {
      const filteredBySex = sexo ? residents.filter(({ sex }) => sex === sexo) : residents;

      result[locationName].push({
        [name]: sortNames(filteredBySex.map((resident) => resident.name), isSorted),
      });
    });
  });

  return result;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) return getSpeciesByLocation(locationsList);
  const { includeNames, sex, sorted } = options;

  if (includeNames) return getSpeciesByLocationWithName(locationsList, sex, sorted);
}

module.exports = getAnimalMap;
