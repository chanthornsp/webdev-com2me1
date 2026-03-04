// alert('Welcome to my website!');
// Variables
const appName = 'My Website';
// appName = 'My website 2.0'; // This will cause an error because appName is a constant
console.log(appName);

let fullName = 'Sok san'
console.log(fullName);
fullName = 'Sok san 2.0';
console.log(fullName);

var age = 30;
console.log(age);
age = 31;
console.log(age);

// Data types

const isStudent = true;

let score = 95.5;

const colors = ['red','green','purple']

// add
colors.push('blue');

// filter
const filteredColors = colors.filter(c=>c === 'red')
console.log(filteredColors);

// remove
colors.pop();
colors.splice(1,1); // remove 1 element at index 1
console.log(colors)

const person = {
    name: 'Sok san',
    age: 30,
    isStudent: true
}
console.log(person.name + ' is ' + person.age +' Years old.')

const {name:fullname,age:age2} = person;
console.log(fullname)
console.log(age2)


let empty = null;

console.log(empty); // undefined
// loop
console.log('=============For loop:==============');
for(let i=1; i<=5; i++){
    console.log(i);
}

const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
const filteredNumbers = numbers.filter(n => n > 1 && n <4);
console.log(filteredNumbers);

// function

function greet(name){
    return `Hello, ${name}!`
}

console.log(greet('Piset'));

 age = 17;
if(age >= 18){
    console.log('Can vote');
}else{
    console.log('Try again next year');
}


// spread operator
const colorsNumber = [...colors,...numbers];
console.log(colorsNumber);
