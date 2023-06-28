const getEmployerRole = (employeeName, employees) => {
    const employee = employees.find(employee => employeeName === employee.name);
    return employee.role;
};

module.exports = getEmployerRole;
