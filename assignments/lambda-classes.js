// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender
    }
    speak() {
        return(`Hello, my name is ${this.name}, and I'm from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase
    }
    demo(subject) {
        return(`Today we are learning about ${subject}.`)
    }
    grade(student, subject) {
        return(`${student.name} receives a perfect score on ${subject}!`);
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects
    }
    listsSubjects() {
        return(this.favSubjects.forEach())
    }
    prAssignment(subject) {
        return(`${this.name} has submitted a pull request for ${subject}.`)
    }
    sprintChallenge(subject) {
        return(`${this.name} has began the sprint challenge on ${subject}.`)
    }
}
const jonathan = new Student ({
    name: "Jonathan",
    age: 21,
    location: "Charlotte",
    gender: "M",
    previousBackground: ["HTML", "CSS"],
    className: "WPT5",
    favSubjects: ["HTML", "CSS", "JavaScript"],
})

class PM extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel) {
        return(`${this.name} announces to ${channel}: '@channel standy times!'.`)
    }
    debugsCode(student, subject) {
        return(`${this.name} debugs code from ${student.name} on ${subject}.`)
    }
}

const jerryTest = new PM ({
    name: "Jerry",
    location: "'merica",
    age: 21,
    gender: "M",
    specialty: "Debugging",
    favLanguage: "JavaScript",
    catchPhrase: "Never give up!"
})
console.log(jerryTest.debugsCode(jonathan, 'JavaScript'));
console.log(jonathan.favSubjects);