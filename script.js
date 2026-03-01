import fs from "fs/promises";

async function solve() {
  try {
    const data = await fs.readFile("students.json", "utf-8");
    const students = JSON.parse(data);

    students.forEach(s => {
      const avg =
        s.marks.reduce((a, b) => a + b, 0) / s.marks.length;

      console.log(`${s.name}: ${avg}`);
    });
  } catch (err) {
    console.error(err);
  }
}

solve();