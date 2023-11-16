document.addEventListener('DOMContentLoaded', () => {



    /* STUDENT */



    // JavaScript code to handle form submission
    const studentForm = document.getElementById("student-form");
    const editStudentForm = document.getElementById("editStudent-form");
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

        listItem.setAttribute('customId', id);
        listItem.id = `student-li-${id}`;
        console.log(`nada mas tal: ${listItem.getAttribute('customId')}`);

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
            
            displayEditStudent(studentInfo.textContent, id);
        });

        removeButton.addEventListener("click", () => {
            const id = listItem.getAttribute('customId');
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
        const subject = document.getElementById("subject").value;
        const group = document.getElementById("groupSelector-student").value;


        const data = {
            name,
            age,
            subject,
            group
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


    /* TEACHER */


    const teacherForm = document.getElementById("teacher-form");
    const editTeacherForm = document.getElementById("editTeacher-form");
    const teacherList = document.getElementById("teacher-list");

    const teachers = fetch("http://localhost:3000/teachers/", {
        method : "GET"
    }).then(response => response.json())
    .then(data => {

        // Loop through each item in the array
        data.forEach(item => {
            // Do something with each item
            console.log(item);
            console.log("array")
        
            const listItem = createTeacherListItem(item.name, item.age, item.id);
            teacherList.appendChild(listItem);
            teacherForm.reset();

        });
    })


    function createTeacherListItem(name, age, id) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        listItem.setAttribute('customId', id);
        listItem.id = `teacher-li-${id}`;
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
            
            displayEditTeacher(teacherInfo.textContent, id);
        });

        removeButton.addEventListener("click", () => {
            const id = listItem.getAttribute('customId');
            listItem.remove();
            fetch(`http://localhost:3000/teachers/${id}`, {
                method : "DELETE"
            })
            .then(response => response.json())
            .then(datos => console.log(datos));
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
        const subject = document.getElementById("subject-teacher").value;
        const groups = [];

        const g1 = document.getElementById("teacher-cbox-g1")
        const g2 = document.getElementById("teacher-cbox-g2")
        const g3 = document.getElementById("teacher-cbox-g3")

        if (g1.checked)
            groups.push(1);
        
        if (g2.checked)
            groups.push(2);

        if (g3.checked)
            groups.push(3);


        const data = {
            name,
            age,
            subject,
            groups
        }

        fetch("http://localhost:3000/teachers/", {
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
            const listItem = createTeacherListItem(name, age, datos.id);
            teacherList.appendChild(listItem);
            teacherForm.reset();
        });
    });




    /* VIEWS */


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

    // inside student's view



    const studentAdd = document.getElementById("addStudent-form");
    const studentEdit = document.getElementById("editStudent-form");

    const studentAddBtn = document.getElementById("addStudent-btn");
    studentAddBtn.addEventListener("click", displayAddStudent);

    const editStudentTitle = document.getElementById("editStudent-title-edit");

    function displayEditStudent(name, id) {
        
        editStudentTitle.setAttribute("customId", id);
        editStudentTitle.textContent = `Edit student ${name}`;

        editStudentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name-edit").value;
            const age = document.getElementById("age-edit").value;
            const subject = document.getElementById("subject-edit").value;
    
            const group = document.getElementById("groupSelector-edit");
       
    
            const data = {
                name,
                age,
                subject,
                group
            }
    
            fetch(`http://localhost:3000/students/${id}`, {
                method : "PUT",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json"
                },
            })
            .then(response => response.json())
            .then(datos => {
                console.log(datos)
                console.log("PUTTT")
                console.log(`datos.id = ${datos.id}`)
                const listItem = createStudentListItem(name, age, datos.id);
                studentList.appendChild(listItem);
                studentForm.reset();
            });


            document.getElementById(`student-li-${id}`).remove()
        });


        studentAdd.style.display = "none";
        studentEdit.style.display = "block";
    }



    function displayAddStudent() {
        studentAdd.style.display = "block";
        studentEdit.style.display = "none";
    }


    // inside teacher view

    const teacherAdd = document.getElementById("addTeacher-form");
    const teacherEdit = document.getElementById("editTeacher-form");
    const editTeacherTitle = document.getElementById("editTeacher-title");

    const teacherAddBtn = document.getElementById("addTeacher-btn");
    teacherAddBtn.addEventListener("click", displayAddTeacher);

    function displayEditTeacher(name, id) {

        editTeacherTitle.setAttribute("customId", id);
        editTeacherTitle.textContent = `Edit teacher ${name}`;

        editTeacherForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name-teacher-edit").value;
            const age = document.getElementById("age-teacher-edit").value;
            const subject = document.getElementById("subject-teacher-edit").value;
            const groups = [];
    
    
            const g1 = document.getElementById("teacher-cbox-g1-edit");
            const g2 = document.getElementById("teacher-cbox-g2-edit");
            const g3 = document.getElementById("teacher-cbox-g3-edit");
    
            
    
            if (g1.checked)
                groups.push(1);
            
            if (g2.checked)
                groups.push(2);
    
            if (g3.checked)
                groups.push(3);
    
    
            const data = {
                name,
                age,
                subject,
                groups
            }
    
            fetch(`http://localhost:3000/teachers/${id}`, {
                method : "PUT",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json"
                },
            })
            .then(response => response.json())
            .then(datos => {
                console.log(datos)
                console.log("PUTTT")
                console.log(`datos.id = ${datos.id}`)
                const listItem = createTeacherListItem(name, age, datos.id);
                teacherList.appendChild(listItem);
                teacherForm.reset();
            });

            document.getElementById(`teacher-li-${id}`).remove()
        });


        teacherAdd.style.display = "none";
        teacherEdit.style.display = "block";
    }

    function displayAddTeacher() {
        teacherAdd.style.display = "block";
        teacherEdit.style.display = "none";
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
                const listItem = createMeetingListItem(item.meetingName, item.startHour, item.endHour, item.id, dia);
                meetingList.appendChild(listItem);
                // studentForm.reset();
            });
    
        });
    
    }
    
    
    
    asignaCabecera(fechaActual.getFullYear(),fechaActual.getMonth());
    asignaDiaMes(fechaActual.getFullYear(),fechaActual.getMonth());
    
    document.querySelectorAll('.dia').forEach(dia=>dia.addEventListener('click',mostarReunionesDia));
    
    
    function createMeetingListItem(name, startHour, endHour, id, date) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    
        listItem.setAttribute('customId', id);
        listItem.id = `meeting-li-${date}-${id}`
        console.log(`nada mas tal: ${listItem.getAttribute('customId')}`);
    
        const meetingInfo = document.createElement("span");
        meetingInfo.textContent = `${name}  ${startHour} - ${endHour}`;
    
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
            displayEditMeeting(meetingInfo.textContent, id, date);
        });
    
        removeButton.addEventListener("click", () => {
            const id = listItem.getAttribute('customId');
            listItem.remove();
            fetch(`http://localhost:3000/meetings/${id}`, {
                method : "DELETE"
            })
            .then(response => response.json())
            .then(datos => console.log(datos));
        });
    
        buttonsDiv.appendChild(updateButton);
        buttonsDiv.appendChild(removeButton);
    
        listItem.appendChild(meetingInfo);
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
    
        const meetingForm = document.getElementById("meetingForm");
    
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
            meetingForm.reset();
        });
    
    });
    
    
    // inside agenda view 
    
    const meetingForm = document.getElementById("addMeeting-form");
    const editMeetingForm = document.getElementById("editTeacher-form");
    const submitMettingButtonEdit = document.getElementById("meetingSubmitButton-edit");

    
    
    const meetingAdd = document.getElementById("meetingForm");
    const meetingAddDiv = document.getElementById("add-meetingForm");
    const meetingEdit = document.getElementById("meetingForm-edit");
    const meetingEditDiv = document.getElementById("edit-meetingForm-edit");
    const editMeetingTitle = document.getElementById("editMeeting-title");
    
    const meetingAddBtn = document.getElementById("addMeeting-btn");
    meetingAddBtn.addEventListener("click", displayAddMeeting);
    
    
    function displayEditMeeting(name, id, date) {
            
        editMeetingTitle.setAttribute("customId", id);
        editMeetingTitle.textContent = `Edit meeting ${name}`;
    
        submitMettingButtonEdit.addEventListener("click", function (e) {
            e.preventDefault();
            
            const startHour = document.getElementById("startHour-edit").value;
            const endHour = document.getElementById("endHour-edit").value;
            const interval = document.getElementById("interval-edit").value;
            const studentsPerInterval = document.getElementById("studentsPerInterval-edit").value;
            const meetingDate = document.getElementById("meetingDate-edit").value;
            const groupSelector = document.getElementById("groupSelector-edit");
            const subject = document.getElementById("meeting-subject-edit").value;
            const teacher = document.getElementById("meeting-teacher-edit").value;
            const location = document.getElementById("meeting-location-edit").value;
            const meetingName = document.getElementById("meetingName-edit").value;
        
            const meetingForm = document.getElementById("meetingForm-edit");
        
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
            
            fetch(`http://localhost:3000/meetings/${id}`, {
                method : "PUT",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json"
                },
            })
            .then(response => response.json())
            .then(datos => {
                console.log(datos)
                document.getElementById(`meeting-li-${date}-${id}`).remove()
                const listItem = createMeetingListItem(meetingName, startHour, endHour, datos.id, date);
                meetingList.appendChild(listItem);
                meetingForm.reset();
            });
    
        });
    
    
        meetingAddDiv.style.display = "none";
        meetingEditDiv.style.display = "block";
    }
    
    
    
    function displayAddMeeting() {
        meetingAdd.style.display = "block";
        meetingEdit.style.display = "none";
    }
    
  




});


