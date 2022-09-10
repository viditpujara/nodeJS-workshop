var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'sql8.freemysqlhosting.net',
  user: 'sql8518556',
  password: 'Trcp1H7fb7',
  database: 'sql8518556'
});
connection.connect(function (err) {
  if (!err) {
    console.log('Connected to database');
  }
  else {
    console.log('failed to connect to the database');
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/form', function (req, res, next) {
  res.render('form');
});

router.post('/processing', function (req, res, next) {
  console.log(req.body);
  var a = req.body.n1;
  var b = req.body.n2;
  var c = parseInt(a) + parseInt(b);

  connection.query("insert into tbl_student (n1,n2,sum) values (?,?,?)", [a, b, c], function (err, result, field) {
    res.render('ans', { a, b, c });
  })

});

module.exports = router;