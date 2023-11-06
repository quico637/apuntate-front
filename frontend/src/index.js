const MultipleMeeting = require('./modules/MultipleMeeting');
const Student = require('./modules/Student');
const Teacher = require('./modules/Teacher');

function numberOfStudents() {
    let title = "Reunion practicas";
    let teacher = new Teacher('Marcos Menárguez', 'marcosmt@um.es', "Desarrollo Fullstack", [1, 2])
    let location = "FIUM";
    let description = "Entrevista de practicas";
    let startHour = new Date(2023, 10, 20, 10, 0, 0);
    let endHour = new Date(2023, 10, 20, 20, 0, 0);
    let registrarionOpening = new Date(2023, 10, 15, 0, 0, 0);
    let registrarionEnding = new Date(2023, 10, 20, 0, 0, 0);
    let groups = [1, 2, 3];

    let numberOfTurns = 5;
    let studentsPerTurn = 2;



    let mult_meeting = new MultipleMeeting(title, teacher, location, description, startHour, endHour, registrarionOpening, registrarionEnding, groups, numberOfTurns, studentsPerTurn)

    let s1 = new Student("Quico Boix", "quicobm01@gmail.com", "Desarrollo Fullstack", 1);
    let s2 = new Student("Albita Martinez", "albeota@icloud.com", "Desarrollo Fullstack", 1);
    // let s3 = new Student("moscas", "moscas@icloud.com", "Desarrollo Fullstack", 1);

    

    mult_meeting.joinMeeting(mult_meeting.meetings[0], s1);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s2);

    
    return mult_meeting.meetings[0].students.length
}

function maxStudentsInTurn() {
    let title = "Reunion practicas";
    let teacher = new Teacher('Marcos Menárguez', 'marcosmt@um.es', "Desarrollo Fullstack", [1, 2])
    let location = "FIUM";
    let description = "Entrevista de practicas";
    let startHour = new Date(2023, 10, 20, 10, 0, 0);
    let endHour = new Date(2023, 10, 20, 20, 0, 0);
    let registrarionOpening = new Date(2023, 10, 15, 0, 0, 0);
    let registrarionEnding = new Date(2023, 10, 20, 0, 0, 0);
    let groups = [1, 2, 3];

    let numberOfTurns = 5;
    let studentsPerTurn = 2;



    let mult_meeting = new MultipleMeeting(title, teacher, location, description, startHour, endHour, registrarionOpening, registrarionEnding, groups, numberOfTurns, studentsPerTurn)

    let s1 = new Student("Quico Boix", "quicobm01@gmail.com", "Desarrollo Fullstack", 1);
    let s2 = new Student("Albita Martinez", "albeota@icloud.com", "Desarrollo Fullstack", 1);
    let s3 = new Student("moscas", "moscas@icloud.com", "Desarrollo Fullstack", 1);

    mult_meeting.joinMeeting(mult_meeting.meetings[0], s1);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s2);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s3);

    
    return mult_meeting.meetings[0].students.length
}

function waitingList() {
    let title = "Reunion practicas";
    let teacher = new Teacher('Marcos Menárguez', 'marcosmt@um.es', "Desarrollo Fullstack", [1, 2])
    let location = "FIUM";
    let description = "Entrevista de practicas";
    let startHour = new Date(2023, 10, 20, 10, 0, 0);
    let endHour = new Date(2023, 10, 20, 20, 0, 0);
    let registrarionOpening = new Date(2023, 10, 15, 0, 0, 0);
    let registrarionEnding = new Date(2023, 10, 20, 0, 0, 0);
    let groups = [1, 2, 3];

    let numberOfTurns = 5;
    let studentsPerTurn = 2;



    let mult_meeting = new MultipleMeeting(title, teacher, location, description, startHour, endHour, registrarionOpening, registrarionEnding, groups, numberOfTurns, studentsPerTurn)

    let s1 = new Student("Quico Boix", "quicobm01@gmail.com", "Desarrollo Fullstack", 1);
    let s2 = new Student("Albita Martinez", "albeota@icloud.com", "Desarrollo Fullstack", 1);
    let s3 = new Student("moscas", "moscas@icloud.com", "Desarrollo Fullstack", 1);
    let s4 = new Student("flyes", "flyes@icloud.com", "Desarrollo Fullstack", 2);
    let s5 = new Student("aaaa", "aaa@icloud.com", "Desarrollo Fullstack", 2);


    mult_meeting.joinMeeting(mult_meeting.meetings[0], s1);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s2);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s3);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s4);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s5);

    
    return mult_meeting.meetings[0]
}


function bothLists() {
    let title = "Reunion practicas";
    let teacher = new Teacher('Marcos Menárguez', 'marcosmt@um.es', "Desarrollo Fullstack", [1, 2])
    let location = "FIUM";
    let description = "Entrevista de practicas";
    let startHour = new Date(2023, 10, 20, 10, 0, 0);
    let endHour = new Date(2023, 10, 20, 20, 0, 0);
    let registrarionOpening = new Date(2023, 10, 15, 0, 0, 0);
    let registrarionEnding = new Date(2023, 10, 20, 0, 0, 0);
    let groups = [1, 2, 3];

    let numberOfTurns = 5;
    let studentsPerTurn = 2;



    let mult_meeting = new MultipleMeeting(title, teacher, location, description, startHour, endHour, registrarionOpening, registrarionEnding, groups, numberOfTurns, studentsPerTurn)

    let s1 = new Student("Quico Boix", "quicobm01@gmail.com", "Desarrollo Fullstack", 1);
    let s2 = new Student("Quico Boix", "quicobm01@gmail.com", "Desarrollo Fullstack", 1);

    mult_meeting.joinMeeting(mult_meeting.meetings[0], s1);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s2);

    console.log(mult_meeting.meetings[0])
    return mult_meeting.meetings[0]
}

function leaveTurn() {
    let title = "Reunion practicas";
    let teacher = new Teacher('Marcos Menárguez', 'marcosmt@um.es', "Desarrollo Fullstack", [1, 2])
    let location = "FIUM";
    let description = "Entrevista de practicas";
    let startHour = new Date(2023, 10, 20, 10, 0, 0);
    let endHour = new Date(2023, 10, 20, 20, 0, 0);
    let registrarionOpening = new Date(2023, 10, 15, 0, 0, 0);
    let registrarionEnding = new Date(2023, 10, 20, 0, 0, 0);
    let groups = [1, 2, 3];

    let numberOfTurns = 5;
    let studentsPerTurn = 2;



    let mult_meeting = new MultipleMeeting(title, teacher, location, description, startHour, endHour, registrarionOpening, registrarionEnding, groups, numberOfTurns, studentsPerTurn)

    let s1 = new Student("Quico Boix", "quicobm01@gmail.com", "Desarrollo Fullstack", 1);
    let s2 = new Student("Albita Martinez", "albeota@icloud.com", "Desarrollo Fullstack", 1);
    let s3 = new Student("moscas", "moscas@icloud.com", "Desarrollo Fullstack", 1);
    let s4 = new Student("flyes", "flyes@icloud.com", "Desarrollo Fullstack", 2);
    let s5 = new Student("aaaa", "aaa@icloud.com", "Desarrollo Fullstack", 2);


    mult_meeting.joinMeeting(mult_meeting.meetings[0], s1);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s2);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s3);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s4);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s5);

    mult_meeting.meetings[0].leave(s1);

    
    return mult_meeting.meetings[0].students
}

function leaveTurnWaitList() {
    let title = "Reunion practicas";
    let teacher = new Teacher('Marcos Menárguez', 'marcosmt@um.es', "Desarrollo Fullstack", [1, 2])
    let location = "FIUM";
    let description = "Entrevista de practicas";
    let startHour = new Date(2023, 10, 20, 10, 0, 0);
    let endHour = new Date(2023, 10, 20, 20, 0, 0);
    let registrarionOpening = new Date(2023, 10, 15, 0, 0, 0);
    let registrarionEnding = new Date(2023, 10, 20, 0, 0, 0);
    let groups = [1, 2, 3];

    let numberOfTurns = 5;
    let studentsPerTurn = 2;



    let mult_meeting = new MultipleMeeting(title, teacher, location, description, startHour, endHour, registrarionOpening, registrarionEnding, groups, numberOfTurns, studentsPerTurn)

    let s1 = new Student("Quico Boix", "quicobm01@gmail.com", "Desarrollo Fullstack", 1);
    let s2 = new Student("Albita Martinez", "albeota@icloud.com", "Desarrollo Fullstack", 1);
    let s3 = new Student("moscas", "moscas@icloud.com", "Desarrollo Fullstack", 1);
    let s4 = new Student("flyes", "flyes@icloud.com", "Desarrollo Fullstack", 2);
    let s5 = new Student("aaaa", "aaa@icloud.com", "Desarrollo Fullstack", 2);

    

    mult_meeting.joinMeeting(mult_meeting.meetings[0], s1);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s2);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s3);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s4);
    mult_meeting.joinMeeting(mult_meeting.meetings[0], s5);

    mult_meeting.meetings[0].leave(s4);
    // console.log(mult_meeting.meetings[0]);
    
    return mult_meeting.meetings[0].waitingList
}

module.exports = {
    numberOfStudents,
    maxStudentsInTurn,
    waitingList,
    bothLists,
    leaveTurn,
    leaveTurnWaitList,
}
