"use strict";
const click = document.querySelector('.click');
const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 },
];
function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
// Regular
console.log('Hello World');
// Interpolated
console.log('Hello %s', 'Tom');
// Styled
console.log('%c Hello World', 'font-size:30px; background:orange; text-shadow: 2px 12px 0 gray');
// warning!
console.warn('waring');
// Error :|
console.error('error');
// Info
console.info('info');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'wrong!');
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
    console.log(dog.name);
});
// counting
console.count('Hello');
console.count('Hello');
console.count('World');
console.count('World');
console.count('Hello');
console.count('World');
console.count('Hello');
console.count('World');
console.count('World');
console.count('World');
console.count('World');
console.count('World');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/a733181')
    .then((data) => data.json())
    .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
});
console.table(dogs);
