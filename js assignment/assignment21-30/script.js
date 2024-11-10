//Take a input from user in number with decimal point  user input is 3.4
let userInput = 3.4;


//Convert it into greater number Example: Math.ceil(3.4); to 4
let roundedNumber = Math.ceil(3.4);


//Declear a variable of string and assign some text var text="This is my dummy text"
var text = "This is my dummy text"; 


//Slice the text into a new variable from 0 to the rounded number 0 to 4;  Example: text.slice(0, 4) | sliceText = This
let slicedText = text.slice(0, roundedNumber);


//Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT
let reversedText = "";
for(let i = slicedText.length - 1; i >= 0; i--){
    reversedText +=slicedText[i];
} 

//print value in alert "shiT"
alert("Reversed text: " + reversedText);

// Second Assignment
//input value from user in String var inputValue="cloUd naTive computinG"
var inputValue = "cloUd naTive computinG";

//Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
inputValue = inputValue
.toLowerCase()
.split(" ")
.map(word => word.chart(0).toUpperCase() + word.slice(1))
.join(" ");

//print value in console.log() console.log(inputValue) | check result in browser console
console.log(inputValue);