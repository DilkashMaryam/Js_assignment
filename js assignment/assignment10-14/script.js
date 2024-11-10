//Simple Calculator
//input a value from user for example num1 is 7
let num1 = 7;

//input a second value from user for example num2 is 3
let num2 = 3;

//input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
let vale = prompt("Enter an operator(+, -, *, /, %):");

//print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1
let result;
if(value === "+"){
    result = num1 + num2
} else if (value === "-"){
    result = num1 - num2
} else if (value === "*"){
    result = num1 * num2
} else if(value === "/"){
    result = num1 / num2
} else if(value === "%"){
    result = num1 % num2
} else{
    alert("Invalid operator");
}

//Percentage Calculator
//Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
var totalMarks = 500;
let course1 = parseFloat(prompt("Enter marks for course 1:"));
let course2 = parseFloat(prompt("Enter marks for course 2:"));
let course3 = parseFloat(prompt("Enter marks for course 3:"));
let course4 = parseFloat(prompt("Enter marks for course 4:"));
let course5 = parseFloat(prompt("Enter marks for course 5:"));

//Calculate the total percentage formula:  obtainedMarks * 100/ totalMarks
let obtainedMarks = course1 + course2 + course3 + course4 +course5;
let percentage = (obtainedMarks * 100) / totalMarks;

//print output in alert
alert(`Totall marks obtained: ${obtainedMarks}\nPercentage: ${percentage}%`);