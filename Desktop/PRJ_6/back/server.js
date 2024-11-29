const express = require('express'); // importing express
const app = express() // creating an exp^ress app

// create a route that sends a response when visiting the homepage
app.get('/', (req, res) =>  {
    res.send('<h1> Hello, Express.js Server! </h1>');
});


// let's add more routes 
// test the routes 
// http://localhost:3000/
// http://localhost:3000/about
// http://localhost:3000/contact

app.get('/about', (req, res) => {
    res.send('This is the about page');
  });

  app.get('/contact', (req, res) => {
    res.send('This is the contact page');
  });
// set up the server to listen on port 3000

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// test it run your server by typing node server.js