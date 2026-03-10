const fs = require("fs");

fs.readFile("students.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    const students = JSON.parse(data);

    students.forEach(student => {

        let sum = 0;

        student.grades.forEach(g => {
            sum += g;
        });

        let avg = sum / student.grades.length;

        console.log(student.name + " : " + avg);
    });

});