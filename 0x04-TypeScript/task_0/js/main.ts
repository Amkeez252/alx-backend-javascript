interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Ebuka",
    lastName: "Ejie",
    age: 20,
    location: "Nigeria"
}

const student2: Student = {
    firstName: "Emmanuel",
    lastName: "Ejie",
    age: 21,
    location: "Nigeria"
}
const studentsList = [student1, student2]

function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    students.forEach((student) => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable(studentsList);