class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level
    }
    get numberOfStudents() {
        return this._numberOfStudents
    }
    set numberOfStudents(newNumber) {
        if (typeof newNumber === 'number') {
            this._numberOfStudents = newNumber;
        } else return 'Invalid input: numberOfStudents must be set to a Number'

    }
    quickFacts() {
        console.log(`School ${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        return substitueTeachers[Math.floor(Math.random() * substituteTeachers.length - 1)]
    }
}

class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, level, numberOfStudents)
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class Middle extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents)
    }

}
class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, level, numberOfStudents)
        this._sportsTemas
    }
    get sportTeams() {
        this._sportTeams.forEach(ele => console.log(ele))
    }

}

const lorraineHansburry = new Primary('Lorraine Hansburry', 'primary', 514, 'Students must be picked up by a parent, guardian or a family memeber over age of 13')
console.log(lorraineHansburry.pickupPolicy)
lorraineHansburry.quickFacts();