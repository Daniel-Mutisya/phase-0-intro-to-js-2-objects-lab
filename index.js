
const employee = {
  name: "",
  streetAddress: "",
};
employee.name = "Dan";
employee.streetAddress = "Chuka";
employee;
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee["name"] = "Sam";
  employee["streetAddress"] = "12 Broadway";
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee.name;
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee["name"];
  return employee;
}
destructivelyDeleteFromEmployeeByKey();
