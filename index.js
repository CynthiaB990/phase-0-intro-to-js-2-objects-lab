function updateEmployeeWithKeyAndValue(Obj, key, value) {
    const newObj = {...Obj}
    newObj[key] = value;
    return newObj;
}
const employee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Sam"
)
function destructivelyUpdateEmployeeWithKeyAndValue(Obj, key, value) {
    Obj[key] = value;
    return Obj;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    'streetAddress', 
    '12 Broadway'
)
function deleteFromEmployeeByKey(object, key) {
    var newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
}
const currentEmployee = deleteFromEmployeeByKey(
    employee, 
    'name'
)
delete currentEmployee.name;
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
}
const modifyEmployee = destructivelyDeleteFromEmployeeByKey(
    employee, 
    'name'
)
delete modifyEmployee.name
    