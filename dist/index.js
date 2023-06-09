"use strict";
let slaes = 123456789;
let course = 'Typescript';
let is_published = true;
let level;
function rednder(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numberss = [];
let numbersss = [];
numbersss[0] = 1;
numbersss[1] = 2;
let user = [1, 'Mosh'];
const small = 1;
const medium = 2;
const large = 3;
let mySize = "m";
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return 1.4;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'student',
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'sheikh';
console.log(employee);
employee.retire(new Date);
let worker = {
    id: 1,
    name: 'student',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
console.log(kgToLbs('10kg'));
//# sourceMappingURL=index.js.map