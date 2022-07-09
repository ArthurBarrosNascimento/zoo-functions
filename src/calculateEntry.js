const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqu
  const result = {};

  const childs = entrants.filter(({ age }) => age < 18).length;

  const adults = entrants.filter(({ age }) => age >= 18 && age < 50).length;

  const olds = entrants.filter(({ age }) => age >= 50).length;

  result.child = childs;
  result.adult = adults;
  result.senior = olds;

  return result;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0 || entrants.length === 0) {
    return 0;
  }

  const { child, adult, senior } = countEntrants(entrants);

  const allTicketPrices = (
    (prices.child * child) + (prices.adult * adult) + (prices.senior * senior));
  return allTicketPrices;
}

module.exports = { calculateEntry, countEntrants };
