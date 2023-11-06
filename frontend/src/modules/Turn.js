class Turn {
    constructor(startHour, endHour, teacher, maxStudents) {
        this.startHour = startHour;
        this.endHour = endHour;
        this.teacher = teacher;
        this.maxStudents = maxStudents;

        this.students = [];
        this.waitingList = [];
    }

    join(student) {
        if (this.students.length >= this.maxStudents) {
            this.waitingList.push(student);
        }

        this.students.push(student);
    }

    // leaves waitingList or inscription eather way
    leave(student) {
        const filtered = this.students.filter((i) => i !== student);
        if (filtered.length !== this.students.length) {
            const s = this.waitingList.shift();
            if (s) {
                this.students.push(s);  
            }
        }
           
        this.students = filtered;
        this.waitingList = this.waitingList.filter((i) => i !== student);
    }

}

module.exports = Turn