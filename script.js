// Creating an array 

let Array = [true, false, true, true, false, false, true, true];

 // Count the number of true values in the array 
 let trueCount = Array.filter(value => value === true).length; 

 // Display the result 

console.log(`Number of true values: ${trueCount}`);