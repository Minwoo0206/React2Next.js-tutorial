// object literals
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@ninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

user['name'] = 'chun-li';
console.log(user['name']);

const key = 'location'
console.log(user[key]);

console.log(typeof user);

user.login();
user.logout();

console.log(this);
user.logBlogs();

// Math object
console.log(Math);
console.log(Math.PI);

console.log(Math.round(7.7));
console.log(Math.floor(7.7));
console.log(Math.ceil(7.1));
console.log(Math.trunc(7.7));

// random numbers
const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
const userOne = {name: 'ryu', age: 30}
const userTwo = userOne;

console.log(userOne, userTwo)

userOne.age = 40
console.log(userOne, userTwo)