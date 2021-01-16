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
// console.log({resultRounded})

// if (resultRounded < 18.5){
//   var underweight = "You are underweight, please eat more!"
// } else if (resultRounded >= 18.5 && resultRounded < 25){
//   var normal = "Everything is looking good, keep it up!"
// } else if (resultRounded >= 25 && resultRounded <= 30){
//   var overweight = "Hit the treadmill more often my man!"
// } else if (resultRounded > 30){
//   var obese = "The treadmill can't help you."
// }

var remark = ""

if (resultRounded < 18.5){
  remark = "You are underweight"
} else if (resultRounded >= 18.5 && resultRounded < 25){
  remark = "Everything is looking good, keep it up!"
} else if (resultRounded >= 25 && resultRounded <= 30){
  remark = "Hit the treadmill more often my man!"
} else if (resultRounded > 30){
  remark = "Even the treadmill can't help you."
}



  res.send("Your BMI results is: " + resultRounded + ".        " + remark );
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
