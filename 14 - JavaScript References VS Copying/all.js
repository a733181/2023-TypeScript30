"use strict";
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const newPlayers = [...players];
newPlayers.push('Tom');
console.log(players, newPlayers);
const person = {
    name: 'Wes Bos',
    age: 80,
};
const newPerson = JSON.parse(JSON.stringify(person));
newPerson.age = 60;
console.log(person, newPerson);
