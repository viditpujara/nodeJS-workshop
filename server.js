var http = require("http");

var a = 100;
var b = 200;
var c = a+b;
var msg = "Sum is: " + c;

if (c==30) {
    msg += "<br> C is 30";
} else {
    msg += "<br> C is not 30";
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(msg);
}).listen(3000);

console.log("Server is listening on http:127.0.0.1:3000");