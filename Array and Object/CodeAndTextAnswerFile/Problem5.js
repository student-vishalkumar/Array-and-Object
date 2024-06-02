const studentInfo = {
    name: 'Alice',
    age: 22,
    major: 'computer science',
    GPA: 3.8,
    isEnrolled: true
};

function displayStudentInfo(student) {
    for (const key in student) {
        if (student.hasOwnProperty(key)) {
            console.log(`${key}: ${student[key]}`);
        }
    }
}

// Usage
displayStudentInfo(studentInfo);
