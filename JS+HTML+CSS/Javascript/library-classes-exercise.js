class media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(ischk) {
        this._isCheckedOut = ischk;
    }
    getAverageRating() {
        let i = this._ratings.reduce((previousValue, currentValue) => previousValue + currentValue);
        return i / this._ratings.length;
    }
    toggleCheckOutStatus() {
        if (this._isCheckedOut === false) {
            this._isCheckedOut = true;
        } else this._isCheckedOut = false;

    }
    addRating(rate) {
        this._ratings.push(rate)
    }
}

class Book extends media {
    constructor(title, author, pages) {
        super(title)
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
class Movie extends media {
    constructor(title, director, runTime) {
        super(title)
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())
const speed = new Movie('Speed', 'Jan de Bont', 116)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())
const npa = process.argv[2]
console.log(npa)