//your JS code here. If required.
async function loadStudents() {
    try {
        const res = await fetch("students.json");
        const students = await res.json();

        students.forEach(student => {
            const marks = student.marks;
            const avg = marks.reduce((a, b) => a + b, 0) / marks.length;
            console.log(student.name + " " + avg);
        });
    } catch (e) {
        console.log("Error reading file");
    }
}

loadStudents();

