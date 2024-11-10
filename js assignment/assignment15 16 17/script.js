//Make a to do
//Create an empty array with the name is courses. ```example: var courses=[] ``
var courses = [];

//Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer")  and save all 5 value in "courses" array. example: courses.push(course1)
for (let i = 1; i <= 5; i++){
    let courseName = prompt("Enter a course" + i, "course" + i);
    courseName.push(courseName);
}

//print courses array in alertexample: alert(courses)
alert("courses array:" +courses.join(", "));

//print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
//If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit)  use Array.splice() to replace and edit index in array
for (let i = 0; i < courses.length; i++){
    let newCourses = prompt("Edit course " + (i + 1), courses[i]);
    if(newCourses !== null && newCourses !== courses[i]){
        courses.splice(i, 1, newCourses);
    }
}
//print courses array in alertexample: alert(courses)
alert("Update Courses array: " +courses.join(", "));