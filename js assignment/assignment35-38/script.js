// 1.input value from user in String var inputValue="cloUd naTive computinG"
var inputValue= "cloUd naTive computinG";
// 2.Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing" use Function
function capitalizeWords(input){
    let words = input.toLowerCase().split(' ');
    let capitalizeWords = words.map(word => {
        return word.charAt(0).toLowerCase() + word.slice(1);
    });
    let results = capitalizeWords.join(' ');
    console.log(results);
}
// 3.print value in console.log() console.log(inputValue) | check result in browser console
let inputValue = "cloUd naTive computinG";
capitalizeWords(inputValue)


//Second assignment
// 1.User input value in Number through prompt Example value=5
// 2.Factorialize a Number use Function
// 3.print value in console.log()  console.log(value); the result is 120
function Factorialize(num){
    let result = 1;
    for(let i = 1; i<= num; i++){
        result *= i;
    }
    return result;
}
let inputValue = parseInt(prompt("Enter a number to find its factorial"));
if (!isNaN(inputValue) && inputValue >= 0){
    let factorialResult = Factorialize(inputValue);
    console.log(`The factorial of ${inputValue} is ${factorialResult}`);
} else {
    console.log("Please enter a valid non-megative number.");
}









