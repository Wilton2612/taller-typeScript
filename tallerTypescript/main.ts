import { Course } from './course.js';
import { dataCourses } from './dataCourses.js';
import { Student } from './student.js';
import { dataStudents } from './dataStudent.js';


let studentsTbody: HTMLElement = document.getElementById('students')!;
let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


renderStudentsInTable(dataStudents);

renderCoursesInTable(dataCourses);

btnfilterByName.onclick = () => applyFilterByName();

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`

function renderStudentsInTable(students: Student[]): void {
  console.log('Desplegando estudiantes');
  students.forEach((student) => {
    let trElement = document.createElement("tbody");
  
    trElement.innerHTML = `<tr ><td>${"codigo"}</td>
                           <td>${student.codigo}</td></tr>

                           <tr >
                           <td>${"cedula"}</td>
                           <td>${student.cedula}</td>

                           </tr>
                           
                           <tr >
                           <td>${"edad"}</td>
                           <td>${student.edad}</td>
                           </tr>

                           <tr >
                           <td>${"dirección"}</td>
                           <td>${student.direccion}</td>
                           </tr>

                           <tr >
                           <td>${"telefono"}</td>
                           <td>${student.telefono}</td>
                           </tr>`;

    studentsTbody.appendChild(trElement);
  });
}




function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}