const { expect } = require('chai')
const day1 = require('./1')

describe('Day 1', () => {
    [
        { input: 1122, expected: 3 },
        { input: 1111, expected: 4 },
        { input: 1234, expected: 0 },
        { input: 91212129, expected: 9 }
    ].forEach(test => {
        it('should sum numbers that are successive', () => {
            expect(day1(test.input)).to.equal(test.expected)
        })
    })
})
