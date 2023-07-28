function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result = n1 + n2;
  
  // if value is true
  if (printResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// By Default Numbers are flaot
const number1 = 5; // which is same as 5.0
const number2 = 2.5;

// boolean value
const printResult = true;

//String to concate
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
