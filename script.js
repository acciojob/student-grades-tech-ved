import fs from "fs/promises";

async function main() {
  try {
    const data = await fs.readFile("students.json", "utf-8");
    const students = JSON.parse(data);

    students.forEach(student => {
      const marks = student.marks;
      const avg =
        marks.reduce((sum, m) => sum + m, 0) / marks.length;

      console.log(`${student.name}: ${avg}`);
    });
  } catch (err) {
    console.error(err);
  }
}

main();