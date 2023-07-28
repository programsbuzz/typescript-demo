const num1 = 10;
const num2 = 20;

// Check if either type is number
if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Incorrect input!');
}