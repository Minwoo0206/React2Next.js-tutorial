const para = document.querySelector('body > h1');

console.log(para);

const paras = document.querySelectorAll('p');
const error = document.querySelectorAll('.error');

paras.forEach(para => {
    console.log(para);
});

console.log(error);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);

// get elements by their tag name
const params = document.getElementsByTagName('p');
console.log(params);

console.log(para.innerText);
paras[0].innerText = 'ninjas are awesome!';

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text'
})

const content = document.querySelector('.content');

console.log(content.innerHTML);
content.innerHTML += '<H2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja website';

const mssg = document.querySelectorAll('p');

console.log(mssg[2].getAttribute('class'));
mssg[2].setAttribute('class', 'success');
mssg[2].setAttribute('style', 'color:green');

// title.setAttribute('style', 'margin: 50px;');
console.log(title.style);

title.style.color = 'orange';
console.log(title.style.color);

title.style.margin = '50px';
title.style.fontSize = '60px';

console.log(mssg[2].classList);
mssg[2].classList.add('error');
// mssg[2].classList.remove('error');

mssg.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

title.classList.toggle('test');
title.classList.toggle('test');