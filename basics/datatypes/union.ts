// Work for number and strings
function combine(input1: number | string, input2: number | string) {
    let result;
    // Check type here
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } 
    // Else consider as String
    else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  // Calling with numbers
  const combinedAges = combine(10, 15);
  console.log(combinedAges);
  
  // Calling with Strings
  const combinedNames = combine('Ram', 'Sham');
  console.log(combinedNames);
  