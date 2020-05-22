const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){});

app.get("/", function (req,res) {res.sendFile(__dirname+"/index.html");});
app.post("/", function (req,res) {

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1+num2;

res.send("The result of calculation is:"+result);
});

app.get("/bmicalculator", function (req,res) {res.sendFile(__dirname+"/bmiCalculator.html");});

app.post("/bmicalculator", function (req,res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = (Math.floor((weight/(2*height))*1000))/10;

  res.send("Your personal Body Mass Index is actually: "+bmi);
  });
