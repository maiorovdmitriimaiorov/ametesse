class Example {
    static readonly ANGLE_1 = 0;

    // Other methods or properties can follow...
}

// Accessing ANGLE_1 without an instance of Example
console.log(Example.ANGLE_1);  // Output: 0

// Attempting to modify ANGLE_1 will result in an error
// Example.ANGLE_1 = 10;  // Error: Cannot assign to 'ANGLE_1' because it is a read-only property.
