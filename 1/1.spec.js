const { expect } = require('chai')
const {
    captcha1,
    captcha2
} = require('./1')

describe('Day 1', () => {
    describe('Captcha 1', () => {
        [
            { input: 1122, expected: 3 },
            { input: 1111, expected: 4 },
            { input: 1234, expected: 0 },
            { input: 91212129, expected: 9 }
        ].forEach(test => {
            it('should sum numbers that are successive', () => {
                expect(captcha1(test.input)).to.equal(test.expected)
            })
        })
    })

    describe('Captcha 2', () => {
        [
            { input: 1212, expected: 6 },
            { input: 1221, expected: 0 },
            { input: 123425, expected: 4 },
            { input: 123123, expected: 12 },
            { input: 12131415, expected: 4 }
        ].forEach(test => {
            it('should sum numbers that match halfway around the input', () => {
                expect(captcha2(test.input)).to.equal(test.expected)
            })
        })
    })
})
