// -- Libraries
const fs = require('fs');
const http = require('http');
const { hostname } = require('os');
const url = require('url');

const content_HTML = {'Content-type': 'text/html'};
const indexHTML = fs.readFileSync(`${__dirname}/src/index.html`, 'utf8');


// -- Server
const server = http.createServer((req, res) => {
    const urlPath = req.url;
    const urlHost = "http://"+req.headers.host;
    const urlObj = new URL(urlPath, urlHost);
    const pathName = urlObj.pathname
  

    // -- Run index
    if (pathName === "/" || pathName === "/overview"){
        let message = "<h1>Navigating to Overview</h1>";
        res.writeHead(200, content_HTML);
        res.end(indexHTML);
    }

});

const hostnameAddress = '127.0.0.1';
const port = 3100;
server.listen(port, hostnameAddress,() => {
    console.log('server running');
    console.log(`Available on:\n\thttp://${hostnameAddress}:${port}`);
    
});