// for loops
for(let i=0; i<5; i++){
    console.log('in loops', i);
}

const names = ['shaun', 'mario', 'luigi'];

for(let i=0; i<names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// while loops
let i = 0;
while(i < 5){
    console.log('in loop: ', i)
    i++;
}

i = 0;
while(i < names.length){
    console.log(names[i])
    i++;
}

// do while loops
i = 5;
do{
    console.log('val of i is ', i);
    i++;
} while(i < 5);

// if statements
const age = 20;

if(age > 20){
    console.log('you are over 20 years old');
}

if(names.length > 2){
    console.log("that's a lot of ninjas");
}

const password = 'pass';

if(password.length >= 12){
    console.log('that password is mighty strong');
} else if(password.length >= 8){
    console.log('that password is long enough!')
} else {
    console.log('password is not long enough');
}

// logical operators - OR || and AND &&
if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@')){
    console.log('that password is long enough!')
} else {
    console.log('password is not long enough');
}

// logical NOT (!)
let user = false;

if(!user){
    console.log('logical NOT')
}

// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i<scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

// switch statements
const grade = 'D';

switch(grade){
    case 'A': 
        console.log('you got an A!');
        break;
    case 'B': 
        console.log('you got a B!');
        break;
    case 'C': 
        console.log('you got a C!');
        break;
    case 'D': 
        console.log('you got a D!');
        break;
    case 'E': 
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}

// variables & block scope
let number = 30;

if(true){
    let number = 40;
    let name = 'minwoo'
    console.log('inside 1st code block: ', number, name);

    if(true){
        let number = 50;
        console.log('inside 2nd code block: ', number);
    }
}

console.log('outside code block: ', number, name);