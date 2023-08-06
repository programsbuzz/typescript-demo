function combine(
    // input 1 or 2 can either be number or string
    input1: number | string,
    input2: number | string,
    // this is literal
    // union combined with litrals
    resultConversion: 'as-number' | 'as-text'
  ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        // Converting to number, parseflow can also be used    
        result = +input1 + +input2;
    } else {
        // return result as strinng
        result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26, 'as-number');
  console.log(combinedAges);
  
  const combinedStringAges = combine('30', '26', 'as-number');
  console.log(combinedStringAges);
  
  const combinedNames = combine('Max', 'Anna', 'as-text');
  console.log(combinedNames);
  