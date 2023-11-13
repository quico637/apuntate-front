
document.addEventListener('DOMContentLoaded', () => {

    // JavaScript code to handle form submission
    const studentForm = document.getElementById("student-form");
    const studentList = document.getElementById("student-list");


    const students = fetch("http://localhost:3000/students/", {
        method : "GET"
    }).then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            // Loop through each item in the array
            data.forEach(item => {
              // Do something with each item
                console.log(item);
                console.log("array")
            
                const listItem = createStudentListItem(item.name, item.age);
                studentList.appendChild(listItem);
                studentForm.reset();

            });
          } else if (typeof data === 'object') {
            // Loop through each key in the object
            Object.keys(data).forEach(key => {
              // Access the value of each key
                console.log(`${key}: ${data[key]}`);
                console.log("object")
                const listItem = createStudentListItem(data[key].name, data[key].age);
                studentList.appendChild(listItem);
                studentForm.reset();
            });
          } else {
            console.error('Invalid data format');
          }
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