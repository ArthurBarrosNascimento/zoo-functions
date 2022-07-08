const { species, employees, hours, prices } = require('../data/zoo_data');
function getSpeciesByIds(...idsArray) {
  // seu código aqui
  const result = [];

  idsArray.forEach((id) => {
    const specie = species.find((specie) => specie.id == id);
    result.push(specie);
  })

  return result;
}
getSpeciesByIds();
module.exports = getSpeciesByIds;
