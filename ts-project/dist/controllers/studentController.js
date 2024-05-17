"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAge = exports.sortStudentsByGrade = exports.getStudentNames = exports.filterPassedStudents = void 0;
// Function to filter passed students
function filterPassedStudents(students) {
    return students.filter((student) => student.grade >= 50);
}
exports.filterPassedStudents = filterPassedStudents;
// Function to get student names
function getStudentNames(students) {
    return students.map((student) => student.name);
}
exports.getStudentNames = getStudentNames;
// Function to sort students by grade
function sortStudentsByGrade(students) {
    return [...students].sort((a, b) => a.grade - b.grade);
}
exports.sortStudentsByGrade = sortStudentsByGrade;
// Function to get average age of students
function getAverageAge(students) {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
}
exports.getAverageAge = getAverageAge;
