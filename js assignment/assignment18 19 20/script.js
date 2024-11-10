// Customize previous assignment "ch_15_16_17" with for loop...
var courses = [];
for (let i = 1; i <= 5; i++){
    let courseName = prompt("Enter a course" + i, "course" + i);
    courseName.push(courseName);
}
alert("courses array:" +courses.join(", "));
for (let i = 0; i < courses.length; i++){
    let newCourses = prompt("Edit course " + (i + 1), courses[i]);
    if(newCourses !== null && newCourses !== courses[i]){
        courses.splice(i, 1, newCourses);
    }
}
alert("Update Courses array: " +courses.join(", "));