// Requiring in-built https for creating
const fs = require("fs");           // Requiring file system to use local files
const https = require("https");     // https server
const path = require("path");
// Express for handling GET and POST request
const express = require("express");
const app = express();
  

const indexHTML = fs.readFileSync(`${__dirname}/src/index.html`, 'utf8');
app.use('/src',express.static(path.join(__dirname, 'src')));
app.use('script.js',express.static(path.join(__dirname, 'script.js')));
app.use('style.css',express.static(path.join(__dirname, 'style.css')));
// Get request for root of the app
app.get("/", function (req, res) {
    // Sending index.html to the browser
    console.log('Loading index page');
  res.end(indexHTML);
});


// Creating object of key and certificate
// for SSL
const options = {
  key: fs.readFileSync("/auth/server.key"),
  cert: fs.readFileSync("/auth/server.cert"),
};


// Creating https server by passing
// options and app object
https.createServer(options, app)
.listen(3000, function (req, res) {
  console.log("Server started at: https://localhost:3000/");
});