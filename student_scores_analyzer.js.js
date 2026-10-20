let scores = [85, 72, 91, 64, 78];

function getGrade(score) {
    if (score >= 90 && score <= 100) return "Excellent!";
    else if (score >= 80 && score <= 89) return "Very Good!"; 
    else if (score >= 75 && score <= 79) return "Good!";
    else return "Failed!";
}

let totalScore = 0;
let passedCount = 0;
let failedCount = 0;

console.log("Student Scores: ");
scores.forEach((score, index) => {
    let grade = getGrade(score);
    let status = score >= 75 ? "Passed!" : "Failed!";

    if (status === "Passed!") {
        passedCount++;
    } else {
        failedCount++;
    }

    totalScore += score;

    console.log(`Student ${index + 1}: ${score} - ${grade} - ${status}`);
});

let averageScore = totalScore / scores.length;
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

console.log("\nTotal Score: " + totalScore);
console.log("Average Score: " + averageScore);
console.log("Highest Score: " + highestScore);
console.log("Lowest Score: " + lowestScore);
console.log("Number of Students Passed: " + passedCount);
console.log("Number of Students Failed: " + failedCount);