const { species, employees } = require('../data/zoo_data');

function getAnimalsInfo(responsibleFor, employeeObject) {
  const result = employeeObject;

  responsibleFor.forEach((specieId) => {
    const { name, location } = species.find(({ id }) => id === specieId);
    result.species.push(name);
    result.locations.push(location);
  });

  return result;
}

function getEmployees() {
  const result = [];

  employees.forEach((employee) => {
    const employeeInfo = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: [],
      locations: [],
    };

    const employeeWithAnimalsInfo = getAnimalsInfo(employee.responsibleFor, employeeInfo);
    result.push(employeeWithAnimalsInfo);
  });

  return result;
}

function getEmployeesCoverage(object) {
  // seu código aqui
  const employeesArray = getEmployees();

  if (object === undefined) return employeesArray;

  const { name, id } = object;
  let result;

  if (name || id) {
    result = employeesArray.find((emp) => emp.fullName.includes(name) || emp.id === id);
  }

  if (!result) throw Error('Informações inválidas');
  return result;
}

module.exports = getEmployeesCoverage;
