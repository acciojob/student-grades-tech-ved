const fs = require("fs");

fs.readFile("students.json", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const students = JSON.parse(data);

    students.forEach(student => {
        let sum = student.grades.reduce((a, b) => a + b, 0);
        let avg = sum / student.grades.length;

        console.log(student.name + ":", avg);
    });
});