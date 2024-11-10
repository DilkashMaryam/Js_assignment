// 1. Input your name through prompt. for example name is  "Ameen Alam"
const name = prompt("Enter your name:", "Ameen Alam");

// 2. input your DOB(date) through prompt. for example date is  "24"
const day = parseInt(prompt("Enter your birth date (DD):", "24"), 10);

// 3. input your DOB(month) through prompt. for example month is  "05"
const month = parseInt(prompt("Enter your birth month (MM):", "05"), 10) - 1;

// 4. input your DOB(year) through prompt. for example year is  "1999"
const year = parseInt(prompt("Enter your birth year (YYYY):", 1999), 10);

// 5. print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"
const now = newDate();
const currentHours = now.getHours();

let greeting;
if(currentHours < 12){
    greeting = "Good Morning";
} else if (currentHours < 18){
    greeting = "Good Afternoon";
} else if (currentHours < 21){
    greeting = "Good Evening";
} else {
    greeting = "Good Night";
}
console.log(`Hello ${name}, ${greeting}`);

// 6. print meassage in console.log() "Your DOB is {in pakistan standard time format}"
const dob = newDate(year, month, day);
console.log(`Your DOB is ${dob.toLocalString('en-US', {timeZone: 'Asia/Karachi' })}`);


// 7. print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"
const ageDifMs = now - dob;
const ageDate = newDate(ageDifMs);
const years = ageDate.getUTCFullYear() - 1970;
const months = ageDate.getUTCMonth();
const days = ageDate.UTCDate() - 1;
const hours = ageDate.getUTCHours();
const minutes = ageDate.getUTCMinutes();
const seconds = ageDate.getUTCSeconds();
console.log(`You are ${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds old`);


// 8. "Your Age in Days 7510"
const daysInYears = years * 365.25;
const daysINMonths = months * 30.4375;
const totalDays = Math.floor(daysInYears + daysINMonths + days);
console.log(`Your Age in Days: ${totalDays}`);

// 9. print meassage in console.log() "How much time left in your next birthday?
// 161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam.  Today is Your 20th Birthday"
const timeUntilBirthday = nextBirthday - now;
const leftDays = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
const leftHours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const leftMinutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
const leftSeconds = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

if (leftDays === 0 && leftHours === 0 && leftMinutes === 0 && leftSeconds === 0) {
    console.log(`Happy Birthday ${name}. Today is your ${years + 1}th Birthday!`);
} else {
    console.log(`How much time left in your next birthday? ${leftDays} days ${leftHours} hours ${leftMinutes} minutes ${leftSeconds} seconds`);
}
