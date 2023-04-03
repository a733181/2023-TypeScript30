interface Person {
  name: string;
  age: number;
}

const players: string[] = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const newPlayers: string[] = [...players];

newPlayers.push('Tom');

console.log(players, newPlayers);

const person = {
  name: 'Wes Bos',
  age: 80,
};

const newPerson: Person = JSON.parse(JSON.stringify(person));

newPerson.age = 60;

console.log(person, newPerson);
