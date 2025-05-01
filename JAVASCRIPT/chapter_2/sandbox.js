// let variable can be changed
let age = 25;
age = 30;

// const variable cannot be changed
const points = 100;

// outdated way of declaring variables
var score = 75;
console.log(score);

/*
comment 1
comment 2
*/

// strings
console.log('hello, world');

let email = 'mario@ninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Minwoo';
let lastName = 'Jo';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
email = 'mario@ninja.co.uk';

let resultOne = email.lastIndexOf('n');
console.log(resultOne);

let resultTwo = email.slice(0, 10);
console.log(resultTwo);

let resultThree = email.substr(4, 10);
console.log(resultThree);

let resultFour = email.replace('m', 'w');
console.log(resultFour);

let resultFive = email.replace('n', 'w');
console.log(resultFive);

// numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %
console.log(10 / 2);

result = radius % 3;
console.log(result);

result = pi * radius**2;
console.log(result);

// order of operation - B I D M A S
result = 5 * (10-3)**2;
console.log(result);

let likes = 10;

likes = likes + 1;
console.log(likes);

likes++;
console.log(likes);

likes += 10;
console.log(likes)

// NaN - not a number
console.log(5 / 'hello');
console.log(5 * 'hello');

result = 'the blog has ' + likes + ' likes';
console.log(result);

// template strings
const title = 'Best reads of 2025';
const author = 'Mario';
likes = 30;

// concatenation way
result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// created html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);

// array
let ninjas = ['jo', 'ken', 'woo'];

console.log(ninjas);

console.log(ninjas[0]);

ninjas[1] = 'min'
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['min', 'jo', 30, 25];
console.log(random);

console.log(ninjas.length);

// array methods
result = ninjas.join(',');
console.log(result);

result = ninjas.indexOf('woo');
console.log(result);

result = ninjas.concat(['ken', 'crystal']);
console.log(result);

result = ninjas.push('ken');
console.log(ninjas);
console.log(result);

result = ninjas.pop();
console.log(ninjas);
console.log(result);

// Undefined
let number;

console.log(number, number+3, `the age is ${number}`);

// Null
number = null;

console.log(number, number+3, `the age is ${number}`);

// Boolean
console.log(true, false, "true", "false");

// methods can return booleans
result = email.includes('@');
console.log(result);

let names = ['mario', 'luigi', 'toad']
result = names.includes('luigi');
console.log(result);

// comparison operators
console.log(age == 25);
console.log(age != 25);
console.log(age > 30);

let myName = 'shaun';
console.log(myName == 'shaun');
console.log(myName > 'crystal');
console.log(myName > 'Shaun');
console.log(myName > 'Crystal');

// loose comparison (different types can still be equal)
age = 25;

console.log(age == 25);
console.log(age == '25');

console.log(age != 25);
console.log(age != '25');

// strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25');

console.log(age !== 25);
console.log(age !== '25');

// type conversion
score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

result = Number('hello');
console.log(result);

result = String(50);
console.log(result);
console.log(typeof result);

result = Boolean(100);
console.log(result, typeof result);

result = Boolean(0);
console.log(result, typeof result);

result = Boolean('0');
console.log(result, typeof result);

result = Boolean('');
console.log(result, typeof result);
