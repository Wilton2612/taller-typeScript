import { dataCourses } from './dataCourses.js';
import { dataStudents } from './dataStudent.js';
var studentsTbody = document.getElementById('students');
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
renderStudentsInTable(dataStudents);
renderCoursesInTable(dataCourses);
btnfilterByName.onclick = function () { return applyFilterByName(); };
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderStudentsInTable(students) {
    console.log('Desplegando estudiantes');
    students.forEach(function (student) {
        var trElement = document.createElement("tbody");
        trElement.innerHTML = "<tr ><td>" + "codigo" + "</td>\n                           <td>" + student.codigo + "</td></tr>\n\n                           <tr >\n                           <td>" + "cedula" + "</td>\n                           <td>" + student.cedula + "</td>\n\n                           </tr>\n                           \n                           <tr >\n                           <td>" + "edad" + "</td>\n                           <td>" + student.edad + "</td>\n                           </tr>\n\n                           <tr >\n                           <td>" + "dirección" + "</td>\n                           <td>" + student.direccion + "</td>\n                           </tr>\n\n                           <tr >\n                           <td>" + "telefono" + "</td>\n                           <td>" + student.telefono + "</td>\n                           </tr>";
        studentsTbody.appendChild(trElement);
    });
}
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
