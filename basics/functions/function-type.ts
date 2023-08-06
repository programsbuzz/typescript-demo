function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function printResult(num: number): void {
    console.log('Result: ' + num);
  }
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  
  printResult(add(5, 12));
  
    // This is function type created using arrow notation
    // Accept 2 parameters as number
    // return number
  let combineValues: (a: number, b: number) => number;
  
  // add satisfy combinedValue condition
  combineValues = add;

  //This is not accepted
  //combineValues = printResult;

  console.log(combineValues(8, 8));
    
  addAndHandle(10, 20, (result) => {
    console.log(result);
  });