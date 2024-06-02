const student = { name: 'John', age: 20 };

// Prevent further additions to the student object
Object.preventExtensions(student);

// Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// Create a new object called teacher
const teacher = { subject: 'Math' };

// Seal the teacher object
Object.seal(teacher);

// Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

console.log(`Extensible Status: ${extensibleStatus}`);
console.log(`Sealed Status: ${sealedStatus}`);
