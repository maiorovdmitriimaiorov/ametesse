// Define a type that can be an array of strings or numbers
type StringOrNumberArray = Array<string | number>;

// Function to process the array
function processArray(array: StringOrNumberArray): void {
  // Logic to process the array elements
  array.forEach(element => {
    if (typeof element === 'string') {
      console.log(`String: ${element}`);
    } else {
      console.log(`Number: ${element}`);
    }
  });
}

// Example usage
const exampleArray: StringOrNumberArray = ['hello', 42, 'world', 100];
processArray(exampleArray);
