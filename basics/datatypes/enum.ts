// Enum can start with any number
// You can assign non-numeric value to it as well
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
};

if (person.role === Role.AUTHOR) {
  console.log('is author');
}