const http = require('http');
const fs = require('fs');

const readFileAsync = (filename, callback) => {
  fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, data);
  });
};

const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const databaseFile = process.argv[2];

    readFileAsync(databaseFile, (error, data) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error\n');
        return;
      }

      const lines = data.split('\n');
      const students = lines.filter(line => line.trim() !== '');

      const totalStudents = students.length;
      const csStudents = students.filter(student => student.endsWith(',CS')).length;
      const sweStudents = students.filter(student => student.endsWith(',SWE')).length;

      const csStudentList = students
        .filter(student => student.endsWith(',CS'))
        .map(student => student.split(',')[0])
        .join(', ');

      const sweStudentList = students
        .filter(student => student.endsWith(',SWE'))
        .map(student => student.split(',')[0])
        .join(', ');

      const response = `
This is the list of our students
Number of students: ${totalStudents}
Number of students in CS: ${csStudents}. List: ${csStudentList}
Number of students in SWE: ${sweStudents}. List: ${sweStudentList}
`;

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

