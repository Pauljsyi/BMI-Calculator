//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){

var height1 = Number(req.body.ht1*12)
var height2 = Number(req.body.ht2)
var totalHt = height1 + height2

var heightSquared = totalHt**2
var weight = Number(req.body.wt)
var wDividedByH = weight/heightSquared

var result = 703 * wDividedByH
var resultRounded = Math.round(result)

var remark = ""
var weightLevel = ""
if (resultRounded < 18.5){
  weightLevel = "You are underweight!"
  remark = "Eat more!"
} else if (resultRounded >= 18.5 && resultRounded < 25){
  weightLevel = ""
  remark = "Everything is looking good, keep it up!"
} else if (resultRounded >= 25 && resultRounded <= 30){
  weightLevel = "You are overweight!"
  remark = "Hit the treadmill more often my man!"
} else if (resultRounded > 30){
  weightLevel = "You are obese!"
  remark = "Even the treadmill can't help you."
}

  res.send("Your BMI results is: " + resultRounded + ". " + weightLevel + " " + remark );
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
