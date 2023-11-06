const Turn = require('./Turn')

class MultipleMeeting {
    constructor(title, teacher, location, description, startHour, endHour, registrarionOpening, registrarionEnding, groups, numberOfTurns, studentsPerTurn) {
        this.title = title;
        this.teacher = teacher;
        this.location = location;
        this.description = description;
        this.startHour = startHour;
        this.endHour = endHour;
        this.registrarionOpening = registrarionOpening;
        this.registrarionEnding = registrarionEnding;
        this.groups = groups;
        this.numberOfTurns = numberOfTurns;
        this.studentsPerTurn = studentsPerTurn;

        this.meetings = this._generateTimeArray(this.startHour, this.endHour, this.numberOfTurns, this.teacher) // array que agrupa todas las reuniones


    };

    _generateTimeArray(startHour, endHour, numTurns, teacher, locale = 'en-US') {

        const interval = (endHour - startHour) / (1000 * 60 * 60);
        const meetingTime = interval / numTurns;        

        const timeArray = []

        let n = 0

        for(let i = 0; i < numTurns; i++) {
            let d = new Date(startHour);
            d.setHours(startHour.getHours() + i * meetingTime)
            timeArray.push(d)
        }

        console.log(timeArray)

        const turns = [];

        for (let i = 0; i < timeArray.length; i++) {
            const startHour = timeArray[i];
            let endHour = new Date(startHour.getHours());
            endHour.setHours(startHour.getHours() + meetingTime);
        
            const turn = new Turn(startHour, endHour, teacher, this.studentsPerTurn);
            turns.push(turn);
        }

        return turns;
    }

    _studentInMeeting(student) {
        for (let i = 0; i < this.meetings.length; i++) {
            for (let j = 0; j < this.meetings[i].students.length; j++) {
                if (this.meetings[i].students[i].email == student.email)
                    return true;
            }
        }

        return false;
    }

    joinMeeting(turn, student) {

        if (this._studentInMeeting(student))
            throw new Error(`The student has already signed up for one turn!`);

        if (!this.groups.includes(student.group))
            throw new Error(`The student does not belong to the designed group`);

        if (!this.teacher.groups.includes(student.group))
            throw new Error(`The student and then teacher do not belong to the same group!`);

        if (this.teacher.subject != student.subject)
            throw new Error (`The student does not belong to the designed subject!`);
        
        turn.join(student);
        
        
    }

}

module.exports = MultipleMeeting