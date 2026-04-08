//task3 
const student = [
    { name: "aimen", marks: 85 },
    { name: "Huda", marks: 95 },
    { name: "Asma", marks: 25 },
    { name: "aima", marks: 30 },
    { name: "ali", marks: 20 },
    { name: "kinza", marks: 5 },


]
//console.log(student)
const findByName = (searchTerm) => {
    return student.find(item => {
        const currentName = item.name.toLowerCase();
        return currentName === searchTerm.toLowerCase();
    });
}

//console.log("findByName", findByName("huda"));
const passedStudents = student.filter(item => item.marks > 50);
console.log(passedStudents)
const studentWithGrades = (student.map(item => {
    let grades;
    if (item.marks >= 80) {
        grades = "A";
    }
    else if (item.marks >= 50) grades = "B";
    else { grades = "C" };
    return {
        ...item,
        grade: grades
    }

}));
console.log("Task 4: \n Full List with Grades:", studentWithGrades); 