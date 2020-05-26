const express = require('express');
const app = express();

var myLogger = (req, res, next) => {
    console.log('LOGGED')
    next()
  }
  
app.use(myLogger)

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

app.listen(3000, (err)=> {
    if (err) {
        return console.log('there was an error');
    }
    console.log('Server is running on port 3000');
})


