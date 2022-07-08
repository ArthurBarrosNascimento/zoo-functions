const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employe = employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName));
  console.log(employe);

  const emptyResult = {};

  if (employe === undefined) return emptyResult;

  return employe;
}

module.exports = getEmployeeByName;
