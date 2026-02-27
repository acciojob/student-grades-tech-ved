import fs from "fs/promises";

async function getStudentAverages() {
    try {
        const data = await fs.readFile("students.csv", "utf-8");
        const lines = data.trim().split("\n");
        
        // skip header
        for (let i = 1; i < lines.length; i++) {
            const parts = lines[i].split(",");
            const name = parts[0];
            const marks = parts.slice(1).map(Number);
            
            const avg = marks.reduce((a, b) => a + b, 0) / marks.length;
            console.log(`${name}: ${avg}`);
        }
    } catch (err) {
        console.error(err);
    }
}

getStudentAverages();