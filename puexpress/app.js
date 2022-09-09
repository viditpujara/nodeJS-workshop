var express = require('express');
var app = express();
var port = 3000;

//routing
app.get('/',function (req,res) {
    res.sendFile(__dirname + '/demo.html');
});

app.get('/about',function (req,res){
    res.send("<h1>About</h1>");
});

app.get('/contact',function(req,res){
    var a = 10;
    var b = 20;
    var msg = "" + (a+b);
    res.send(msg);
});

app.listen(port,() => {
    console.log(`listening on port ${port}`)
});