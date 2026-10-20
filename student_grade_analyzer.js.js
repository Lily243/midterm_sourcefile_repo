// Student Class Definition
class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  // Method to calculate average
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return sum / this.scores.length;
  }

  // Method to determine letter grade
  getLetterGrade() {
    const avg = this.getAverage();
    if (avg >= 90) return "A";
    else if (avg >= 80) return "B";
    else if (avg >= 70) return "C";
    else if (avg >= 60) return "D";
    else return "F";
  }
}

// Analyzer Function
function analyzeClass(students) {
  console.log("------- STUDENT REPORT -------");

  let classSum = 0;
  let topStudent = null;
  let highestAverage = 0;

  for (let student of students) {
    const avg = student.getAverage();
    const grade = student.getLetterGrade();

    console.log(`${student.name} - Average: ${avg.toFixed(1)} | Grade: ${grade}`);

    classSum += avg;

    if (avg > highestAverage) {
      highestAverage = avg;
      topStudent = student;
    }
  }

  const classAverage = classSum / students.length;

  console.log("-----------------------------------");
  console.log(`Class Average: ${classAverage.toFixed(1)}`);
  console.log(`Top Student: ${topStudent.name} with ${highestAverage.toFixed(1)}`);
}

// Test Data
const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];

// Convert raw data into Student instances
const students = studentData.map(data => new Student(data.name, data.scores));

// Run Analyzer
analyzeClass(students);
