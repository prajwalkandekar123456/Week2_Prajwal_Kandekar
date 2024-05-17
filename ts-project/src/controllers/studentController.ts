import { Student } from "../types";

// Function to filter passed students
export function filterPassedStudents(students: Student[]): Student[] {
  return students.filter((student) => student.grade >= 50);
}

// Function to get student names
export function getStudentNames(students: Student[]): string[] {
  return students.map((student) => student.name);
}

// Function to sort students by grade
export function sortStudentsByGrade(students: Student[]): Student[] {
  return [...students].sort((a, b) => a.grade - b.grade);
}

// Function to get average age of students
export function getAverageAge(students: Student[]): number {
  const totalAge = students.reduce((acc, student) => acc + student.age, 0);
  return totalAge / students.length;
}
