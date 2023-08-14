function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Output of Print Result: ' + num);
}
// Function with callBack function in argument
// () => this is function type definition
// callBack accept number as an argument and return nothing -- void
function addWithCallback(n1, n2, callBack) {
    var result = n1 + n2;
    callBack(result);
}
printResult(add(5, 6));
// This is function type created using arrow notation
// Accept 2 parameters as number
// return number
var combineValues;
// add satisfy combinedValue condition
combineValues = add;
//This is not accepted as printResult is accepted one argument num
//combineValues = printResult;
console.log("Output of combined Values: ", combineValues(5, 5));
addWithCallback(5, 10, function (result) {
    console.log("Output of Add With Callback", result);
});
