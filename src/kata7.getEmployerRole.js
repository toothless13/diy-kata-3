// const getEmployerRole = (employeeName, employees) => {
//     const employee = employees.find(employee => employeeName === employee.name);
//     return employee.role;
// };

const getEmployerRole = (employeeName, employees) => {
    return employees.find(employee => employeeName === employee.name).role;
};

module.exports = getEmployerRole;
