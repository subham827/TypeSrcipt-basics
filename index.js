var ssales = 123456789;
// for big numbers we use underscore
var scourse = 'Typescript';
var sisBeginner = true;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = numbers.filter(function (number) {
    return number % 2 == 1;
}).map(function (number) {
    return number * 2;
}).reduce(function (previous, current) {
    return previous + current;
}).toString();
console.log(oddNumbers);
var user = ['John', 123];
console.log(user[0]);
var Color;
(function (Color) {
    Color["Red"] = "danger";
    Color["Green"] = "success";
    Color["Blue"] = "primary";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
function calculateTax(amount) {
    return amount * 0.08;
}
var b = calculateTax(100);
console.log(b);
var employee = { name: 'John', age: 30 };
// employee.name = 'Jane';
console.log(employee.name);
var employeee = { name: 'John', age: 30 };
function kgToPounds(kg) {
    if (typeof kg === 'string') {
        return parseInt(kg) * 2.20462262185;
    }
    return kg * 2.20462262185;
}
var be = kgToPounds(100);
var ce = kgToPounds('1000');
console.log(be);
console.log(ce);
var uiWidget = {
    drag: function () {
        console.log('drag');
    },
    resize: function () {
        console.log('resize');
    }
};
uiWidget.drag();
uiWidget.resize();
// optinal chaining 
function getCustomer(id) {
    if (id === 1) {
        return {
            name: 'John',
            city: 'New York'
        };
    }
}
var customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.city);
var customer2 = getCustomer(2);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.city);
