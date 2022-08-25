const Rooster = require('../index.js')
const Calculate = require('../index.js')
const assert = require('assert')

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            const expected = 1
            const atual = Rooster.announceDawn();

            assert.ok(atual === expected)
        })
    });
    describe('.timeAtDawn', () => {
        it('returns its arguments as a string', () => {
            let atual = Rooster.timeAtDawn(10);
            let expected = '10'

            assert.strictEqual(atual, expected)
        });
        it('throws an error if passed a number less than 0', () => {
            assert.throws(() => { Rooster.timeAtDawn(-1), RangeError })
        });
        it('throws an error if passed a number greater than 23', () => {
            assert.throws(() => { Rooster.timeAtDawn(24), RangeError })
        });
    })
})

describe('Calculate', () => {
    describe('.sum', () => {
        it('returns the sum of an array of numbers', () => {
            const expectedResult = 6;
            const inputArray = [1, 2, 3]

            const result = Calculate.sum(inputArray)

            assert.strictEqual(result, expectedResult);
        });


        it('returns the sum of a four-item list', () => {
            //setup
            const expectedResult = 22;
            const inputArray = [4, 5, 6, 7]
                //exercise
            const result = Calculate.sum(inputArray)
                //verification
            assert.strictEqual(result, expectedResult)
        });

    });
    describe('.factorial', () => {
        it('returns the factorial of the array passed', () => {
            // setup
            const expected = 120
            const input = 5
                //exercise
            const result = Calculate.factorial(input)
                // verify
            assert.strictEqual(result, expected)
        })

    });
});