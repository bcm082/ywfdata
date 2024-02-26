//This code does the following:

// Imports the Express module.
// Creates an Express application.
// Defines a route handler for GET requests to the root URL (/). When this route is accessed, it responds with a simple message.
// Tells the Express app to listen for incoming requests on the specified port.

const express = require('express');
const app = express();
const port = 3000; // Choose a port number

app.get('/',(req, res) => {
    res.send('Express Server Test');
});

app.listen(port, () =>{
    console.log('Server is running on http://localhost:${port}');
}) 

app.use(express.json());
  
