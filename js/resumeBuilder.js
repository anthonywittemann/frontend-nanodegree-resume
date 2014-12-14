//$("#main").append("Anthony Wittemann");


/***********     Lesson 1 data types     ***********/

//var age = 32;

// var awesomeThought;
// awesomeThought = "I am Anthony and I am awesome";
// console.log(awesomeThought);

// var email = "awittema@usc.edu";
// var newEmail = email.replace("usc", "mit");
// console.log("Old email: " + email);
// console.log("New email: " + newEmail);

// var funThought = awesomeThought.replace("awesome", "fun");
// $("#main").append(" " + funThought);


var name = "Anthony Wittemann";
var role = "Software Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


var strToConvert = "audacity";
var convertedStr = strToConvert.slice(1, strToConvert.length).replace("u", "U");
console.log(convertedStr);

