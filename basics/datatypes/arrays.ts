const person1 = {
  name: 'Dev',
  age: 34,
  sports: ['Cricket', 'Table TEnnis']
};

// Array to store values of type string 
let favoriteActivities: string[];

favoriteActivities = ['Sports'];

console.log(person1.name);

for (const sport of person1.sports) {
  console.log(sport.toUpperCase());
}
