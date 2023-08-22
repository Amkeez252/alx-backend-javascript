const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n');
        normal_line = lines.slice(1, lines.length);
        let numberOfStudents = 0;
        const studentsByField = {};

        normal_line.forEach((line) => {
            const [firstName, lastname, age, field] = line.split(',');

            // Check if the line contains valid data
            if (firstName && lastname && age && field) {
                numberOfStudents++;

                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
        
                studentsByField[field].push(firstName);
            }
        });

        console.log(`Number of students: ${numberOfStudents}`);
    
        for (const field in studentsByField) {
            console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
        }
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
