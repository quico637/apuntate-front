const User = require('./User')

class Student extends User {
    constructor(name, email, subject, group) {
        super(name, email);
        this.subject = subject;
        this.group = group
    }
}

module.exports = Student