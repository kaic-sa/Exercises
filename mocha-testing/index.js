Rooster = {};

Rooster.announceDawn = () => {
    return 'moo!';
}


Rooster.timeAtDawn = (hour) => {
    if (hour < 0 || hour > 23) {
        throw new RangeError;
    } else {
        return hour.toString();
    };
}


module.exports = Rooster;

//-----------------------------------

const Calculate = {
    sum(inputArray) {
        return inputArray.reduce((previous, current) => previous + current)
    },
    factorial(input) {
        if (input === 0) {
            throw new Error('0! not allowed')
        }
        let arr = []
        for (let i = 1; i <= 5; i++) {
            arr.push(i)

        }
        let factorial = arr.reduce((current, previous) => current * previous)
        return factorial;
    }
}

module.exports = Calculate;