let ssales: number = 123_456_789;
// for big numbers we use underscore
let scourse: string = 'Typescript';
let sisBeginner: boolean = true;
    

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(function(number) {
    return number % 2 == 1;
}).map(function(number) {
    return number * 2;
}).reduce(function(previous, current) {
    return previous + current;
}).toString();
console.log(oddNumbers);

let user : [string, number] = ['John', 123];
console.log(user[0]);

enum Color {Red = "danger", Green = "success", Blue= "primary"};
let c: Color = Color.Green;
console.log(c);

function calculateTax(amount: number): number {
    return amount * 0.08;
}
let b = calculateTax(100);

console.log(b);

let employee :{readonly name: string, age: number ,fax?: boolean} = {name: 'John', age: 30};
// employee.name = 'Jane';
console.log(employee.name);
type Employee = {readonly name: string, age: number ,fax?: boolean};
let employeee :Employee = {name: 'John', age: 30};

function kgToPounds(kg: number | string): number {
    if (typeof kg === 'string') {
        return parseInt(kg) * 2.20462262185;
    }
    return kg * 2.20462262185;
        
    }
    let be = kgToPounds(100);
    let ce = kgToPounds('1000');
    console.log(be);
    console.log(ce);
type Draggaable = {
    drag : () => void;
}
type Resizeable = {
    resize : () => void;
}
type UIWidget = Draggaable & Resizeable;
let uiWidget : UIWidget = {
    drag : () => {
        console.log('drag');
    },
    resize : () => {
        console.log('resize');
    }
}
uiWidget.drag();
uiWidget.resize();
// optinal chaining 
function getCustomer(id :number) :{name: string, city: string} | undefined {
    if(id === 1) {
        return {
            name: 'John',
            city: 'New York'
        }

    }

}
let customer = getCustomer(1);
console.log(customer?.city);
let customer2 = getCustomer(2);
console.log(customer2?.city);
