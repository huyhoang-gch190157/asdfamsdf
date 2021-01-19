var http = require('http'); // 1 - Import Node.js core module
var url = require('url');

var server = http.createServer(function (req, res) {   // 2 - creating server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });  
        
        // set response content    
        res.write('<html><body><h1>This is home Page.</h1>');
        res.write('<a href="student"> Student</a><br>');
        res.write('<a href="Admin">Admin</a></body></html><br>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is student Page.</h1></body>');
        res.write('<a href="Home">Home</a><br>');
        res.write('<a href="Admin">Admin</a></html><br>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is admin Page.</h1></body>');
        res.write('<a href="Student">Student</a><br>');
        res.write('<a href="Home">Home</a></html><br>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');
    //handle incomming requests here..

});

var PORT = process.env.PORT || 5000
server.listen(PORT); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')