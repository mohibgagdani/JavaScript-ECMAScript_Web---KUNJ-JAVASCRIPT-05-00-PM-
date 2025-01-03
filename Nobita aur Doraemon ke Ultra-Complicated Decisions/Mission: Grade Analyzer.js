function analyzeStudentGrades(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Please enter a number between 0 and 100.";
    }

    if (marks % 5 === 0 && marks % 10 === 0) {
        return "Elite Performer";
    } else if (marks >= 90 && marks <= 99) {
        return "Top Futuristic Student";
    } else if (marks >= 70 && marks <= 89) {
        return "Almost There!";
    } else if (marks >= 50 && marks <= 69) {
        return "Keep Working Hard!";
    } else if (marks < 50) {
        return "Back to Basics!";
    }
}

let studentMarks = 85;
console.log(analyzeStudentGrades(studentMarks));
