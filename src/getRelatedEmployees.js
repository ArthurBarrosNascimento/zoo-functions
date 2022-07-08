const { employees } = require('../data/zoo_data');

function isManager(employeeId) {
  // seu código aqui
  let result = false;

  employees.forEach((employee) => {
    const managerCheck = employee.managers.some((id) => id === employeeId);
    if (managerCheck) result = managerCheck;
  });
  return result;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const manager = isManager(managerId);
  const result = [];

  if (manager === true) {
    employees.forEach((employee) => {
      if (employee.managers.some((id) => id === managerId)) {
        const fullName = `${employee.firstName} ${employee.lastName}`;

        result.push(fullName);
      }
    });

    return result;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
