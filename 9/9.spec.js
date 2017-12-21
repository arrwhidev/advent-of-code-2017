const { expect } = require('chai')
const fs = require('fs')
const {
    convertToGroups,
    calculateScore
} = require('./9')

describe('Day 9', () => {
    describe('Challenge 1', () => {
        it('should convert stream to nested groups', () => {
            expect(convertToGroups('{}')).to.deep.equal({
                1: 1
            })

            expect(convertToGroups('{<{}>}')).to.deep.equal({
                1: 1
            })

            expect(convertToGroups('{{<a!>},{<a!>},{<a!>},{<ab>}}')).to.deep.equal({
                1: 1,
                2: 1
            })

            expect(
                convertToGroups('{{},{},{},{}}')
            ).to.deep.equal({
                1: 1,
                2: 4
            })

            expect(
                convertToGroups('{{},{{}},{},{}}')
            ).to.deep.equal({
                1: 1,
                2: 4,
                3: 1
            })
        })
    })

    it('should calculate score from groups', () => {
        expect(calculateScore('{}')).to.equal(1)
        expect(calculateScore('{{{}}}')).to.equal(6)
        expect(calculateScore('{{},{}}')).to.equal(5)
        expect(calculateScore('{{{},{},{{}}}}')).to.equal(16)
        expect(calculateScore('{<a>,<a>,<a>,<a>}')).to.equal(1)
        expect(calculateScore('{{<ab>},{<ab>},{<ab>},{<ab>}}')).to.equal(9)
        expect(calculateScore('{{<!!>},{<!!>},{<!!>},{<!!>}}')).to.equal(9)
        expect(calculateScore('{{<a!>},{<a!>},{<a!>},{<ab>}}')).to.equal(3)
    })

    it('should calculate score from real input', () => {
        fs.readFile('./9/input.txt', 'utf8', (err, contents) => {
            const score = calculateScore(contents)
            console.log('Stream score:', score, 'Expected: 21037');
        })
    })
})
