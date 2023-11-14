
document.addEventListener('DOMContentLoaded', () => {

    // JavaScript code to handle form submission
    const studentForm = document.getElementById("student-form");
    const studentList = document.getElementById("student-list");


    const students = fetch("http://localhost:3000/students/", {
        method : "GET"
    }).then(response => response.json())
    .then(data => {

        // Loop through each item in the array
        data.forEach(item => {
            // Do something with each item
            console.log(item);
            console.log("array")
        
            const listItem = createStudentListItem(item.name, item.age, item.id);
            studentList.appendChild(listItem);
            studentForm.reset();

        });
    })


    function createStudentListItem(name, age, id) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        listItem.setAttribute('id', id);
        console.log(`nada mas tal: ${listItem.getAttribute('id')}`);

        const studentInfo = document.createElement("span");
        studentInfo.textContent = `${name}`;

        const buttonsDiv = document.createElement("div");

        const updateButton = document.createElement("button");
        // updateButton.textContent = "Update";
        const updateIcon = document.createElement("i");
        updateIcon.className = "bi bi-pencil-square"; // Bootstrap trash icon
        updateButton.appendChild(updateIcon);
        updateButton.className = "btn btn-success mr-2";

        const removeButton = document.createElement("button");
        const removeIcon = document.createElement("i");
        removeIcon.className = "bi bi-trash"; // Bootstrap trash icon
        removeButton.appendChild(removeIcon);
        removeButton.className = "btn btn-danger";

        // removeButton.className = "btn btn-danger";

        updateButton.addEventListener("click", () => {
            alert(`Update Student: Name - ${name}, Age - ${age}`);
        });

        removeButton.addEventListener("click", () => {
            const id = listItem.getAttribute('id');
            listItem.remove();
            fetch(`http://localhost:3000/students/${id}`, {
                method : "DELETE"
            })
            .then(response => response.json())
            .then(datos => console.log(datos));
        });

        buttonsDiv.appendChild(updateButton);
        buttonsDiv.appendChild(removeButton);

        listItem.appendChild(studentInfo);
        listItem.appendChild(buttonsDiv);


        return listItem;
    }

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;


        const data = {
            name : name,
            age : age
        }

        fetch("http://localhost:3000/students/", {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json"
            },
        })
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            console.log("POSTTT")
            console.log(`datos.id = ${datos.id}`)
            const listItem = createStudentListItem(name, age, datos.id);
            studentList.appendChild(listItem);
            studentForm.reset();
        });

        
    });


    const teacherForm = document.getElementById("teacher-form");
    const teacherList = document.getElementById("teacher-list");

    function createTeacherListItem(name, age) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        const teacherInfo = document.createElement("span");
        teacherInfo.textContent = `${name}`;

        const buttonsDiv = document.createElement("div");

        const updateButton = document.createElement("button");
        // updateButton.textContent = "Update";
        const updateIcon = document.createElement("i");
        updateIcon.className = "bi bi-pencil-square"; // Bootstrap trash icon
        updateButton.appendChild(updateIcon);
        updateButton.className = "btn btn-success mr-2";

        const removeButton = document.createElement("button");
        const removeIcon = document.createElement("i");
        removeIcon.className = "bi bi-trash"; // Bootstrap trash icon
        removeButton.appendChild(removeIcon);
        removeButton.className = "btn btn-danger";

        // removeButton.className = "btn btn-danger";

        updateButton.addEventListener("click", () => {
            alert(`Update Teacher: Name - ${name}, Age - ${age}`);
        });

        removeButton.addEventListener("click", () => {
            listItem.remove();
        });

        buttonsDiv.appendChild(updateButton);
        buttonsDiv.appendChild(removeButton);

        listItem.appendChild(teacherInfo);
        listItem.appendChild(buttonsDiv);

        return listItem;
    }

    teacherForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name-teacher").value;
        const age = document.getElementById("age-teacher").value;

        const listItem = createTeacherListItem(name, age);
        teacherList.appendChild(listItem);
        teacherForm.reset();
    });


    // JavaScript code to switch between views
    const teacherView = document.getElementById("teacher-view");
    const studentView = document.getElementById("student-view");
    const agendaView = document.getElementById("agenda-view");
    const presentacionView = document.getElementById("presentacion-view");

    function showStudentListView() {
        teacherView.style.display = "block";
        studentView.style.display = "none";
        agendaView.style.display = "none";
        presentacionView.style.display = "none";
    }

    function showStudentView() {
        teacherView.style.display = "none";
        studentView.style.display = "block";
        agendaView.style.display = "none";
        presentacionView.style.display = "none";
    }

    function showAgendaView() {
        teacherView.style.display = "none";
        studentView.style.display = "none";
        agendaView.style.display = "block";
        presentacionView.style.display = "none";
    }

    function showPresentacionView() {
        teacherView.style.display = "none";
        studentView.style.display = "none";
        agendaView.style.display = "none";
        presentacionView.style.display = "block";
    }

    // Add event listeners to navigation links
    const studentListLink = document.querySelector('a[href="#student-view"]');
    const addStudentLink = document.querySelector('a[href="#teacher-view"]');
    const agendaLink = document.querySelector('a[href="#agenda-view"]');
    const presentacionLink = document.querySelector('a[href="#presentacion-view"]');

    studentListLink.addEventListener("click", showStudentListView);
    addStudentLink.addEventListener("click", showStudentView);
    agendaLink.addEventListener("click", showAgendaView);
    presentacionLink.addEventListener("click", showPresentacionView);

    // Show the student list view by default
    showPresentacionView();


    


});

const reunionesElement = document.getElementById("reuniones");
const cabeceraElement = document.getElementById("cabecera");
const mesElement = document.getElementById("mes");
const submitMettingButton = document.getElementById("meetingSubmitButton");
const meetingList = document.getElementById("meeting-list");

let fechaActual = new Date();
//fechaActual=new Date(2022,11,24);
const idioma = "es";
const intlMes = new Intl.DateTimeFormat(idioma, {month:'long'});
const intlSemana = new Intl.DateTimeFormat(idioma,{weekday:'short'});

const diaSemana = [...Array(7).keys()].map((i)=>intlSemana.format(new Date(2023,4,i+1)));



function asignaCabecera(año, indiceMes){
    let nombreMes = intlMes.format(new Date(año,indiceMes)).toUpperCase();
    cabeceraElement.textContent=`${nombreMes} ${año}`;
}

function asignaDiaMes(año,indiceMes){
    const diasEnMes = new Date(año,indiceMes+1,0).getDate();
    const dias = [...Array(diasEnMes).keys()];
    let primerDia = new Date(año,indiceMes,1).getDay();
    if(primerDia===0) primerDia = 7;

    const claseCSSPrimerDia = `class='primerDia dia' style='--primerDiaMes:${primerDia}'`;
    const htmlDiaSemana = diaSemana.map((nombre)=>`<li class='diaNombre'>${nombre}</li>`).join('');
    const cal = dias.map((dia,indice)=>`<li ${indice === 0 ? claseCSSPrimerDia:"class='dia'"}>${dia+1}</li>`).join('');
    mesElement.innerHTML=htmlDiaSemana+" "+cal;
}

function mostarReunionesDia(event){
    meetingList.innerHTML = '';
    const dia = event.target.textContent;
    // reunionesElement.textContent=`No hay reuniones en el dia ${dia}`;

    const meetingDate = `2023-11-${dia}`;
    fetch(`http://localhost:3000/meetings?meetingDate=${meetingDate}`, {
        method : "GET"
    }).then(response => response.json())
    .then(data => {
            
        data.forEach(item => {
            const listItem = createMeetingListItem(item.meetingName, item.startHour, item.endHour, item.id);
            meetingList.appendChild(listItem);
            // studentForm.reset();
        });

    });

}



asignaCabecera(fechaActual.getFullYear(),fechaActual.getMonth());
asignaDiaMes(fechaActual.getFullYear(),fechaActual.getMonth());

document.querySelectorAll('.dia').forEach(dia=>dia.addEventListener('click',mostarReunionesDia));


function createMeetingListItem(name, startHour, endHour, id) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    listItem.setAttribute('id', id);
    console.log(`nada mas tal: ${listItem.getAttribute('id')}`);

    const studentInfo = document.createElement("span");
    studentInfo.textContent = `${name}  ${startHour} - ${endHour}`;

    const buttonsDiv = document.createElement("div");

    const updateButton = document.createElement("button");
    // updateButton.textContent = "Update";
    const updateIcon = document.createElement("i");
    updateIcon.className = "bi bi-pencil-square"; // Bootstrap trash icon
    updateButton.appendChild(updateIcon);
    updateButton.className = "btn btn-success mr-2";

    const removeButton = document.createElement("button");
    const removeIcon = document.createElement("i");
    removeIcon.className = "bi bi-trash"; // Bootstrap trash icon
    removeButton.appendChild(removeIcon);
    removeButton.className = "btn btn-danger";

    // removeButton.className = "btn btn-danger";

    updateButton.addEventListener("click", () => {
        alert(`Update Student: Name - ${name}, Age - ${age}`);
    });

    removeButton.addEventListener("click", () => {
        const id = listItem.getAttribute('id');
        listItem.remove();
        fetch(`http://localhost:3000/meetings/${id}`, {
            method : "DELETE"
        })
        .then(response => response.json())
        .then(datos => console.log(datos));
    });

    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(removeButton);

    listItem.appendChild(studentInfo);
    listItem.appendChild(buttonsDiv);


    return listItem;
}



submitMettingButton.addEventListener("click", function (e) {

    e.preventDefault();
    const startHour = document.getElementById("startHour").value;
    const endHour = document.getElementById("endHour").value;
    const interval = document.getElementById("interval").value;
    const studentsPerInterval = document.getElementById("studentsPerInterval").value;
    const meetingDate = document.getElementById("meetingDate").value;
    const groupSelector = document.getElementById("groupSelector");
    const subject = document.getElementById("subject").value;
    const teacher = document.getElementById("teacher").value;
    const location = document.getElementById("location").value;
    const meetingName = document.getElementById("meetingName").value;

    const data = {
        startHour,
        endHour,
        interval,
        studentsPerInterval,
        meetingDate,
        group : groupSelector.value,
        subject,
        teacher,
        location,
        meetingName
    }

    fetch("http://localhost:3000/meetings/", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-type" : "application/json"
        },
    })
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        // const listItem = createMeetingListItem(meetingName, startHour, endHour, datos.id);
        // meetingList.appendChild(listItem);
        // // meetingForm.reset();
    });

});




