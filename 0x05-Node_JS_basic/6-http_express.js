const express = require('express');
const app = express();

// Define a route for the root endpoint "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app variable
module.exports = app;

