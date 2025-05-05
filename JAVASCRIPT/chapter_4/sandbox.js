// function declaration
function greet(){
    console.log('hello there');
}

// function expression
const speak = function(){
    console.log('good day!');
};

greet();
speak();

// arguments & parameters
const speak2 = function(name='luigi', time='night'){
    console.log(`good ${time} ${name}`);
};

speak2('mario', 'morning');
speak2();

// returning values
const calArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};

const area = calArea(5);
console.log(area);

// arrow function
const calArea2 = radius => 3.14 * radius**2;

const area2 = calArea2(5);
console.log(area2);

// functions 
const greet2 = () => 'hello';

let resultOne = greet2();
console.log(resultOne);

// methods
const name = 'shaun';

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & foreach
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun','chun-li'];

people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;