let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 22, grade: 'B' },
    // Add more students as needed
];

// Add a Student
function addStudent(student) {
    students.push(student);
}

// Update Student Information
function updateStudent(id, updatedInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
    }
}

// Delete a Student
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
}

// List All Students
function listAllStudents() {
    console.log(students);
}

// Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Usage examples
addStudent({ id: 3, firstName: 'Alice', lastName: 'Smith', age: 23, grade: 'A' });
updateStudent(1, { age: 21, grade: 'A+' });
deleteStudent(2);
listAllStudents();
console.log(findStudentsByGrade('A'));
console.log(`Average Age: ${calculateAverageAge()}`);
