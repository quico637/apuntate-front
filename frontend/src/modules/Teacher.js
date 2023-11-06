const User = require('./User')

class Teacher extends User {
    constructor(name, email, subject, groups) {
        super(name, email);
        this.subject = subject;
        this.groups = groups;
    }

}

module.exports = Teacher