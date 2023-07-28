function add(n1, n2, printResult, phrase) {
    var result = n1 + n2;
    // if value is true
    if (printResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// By Default Numbers are flot
var number1 = 5; // which is same as 5.0
var number2 = 2.5;
// boolean value
var printResult = true;
//String to concate
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
