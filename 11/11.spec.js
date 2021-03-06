const { expect } = require('chai')
const fs = require('fs')
const {
    parseMovements
} = require('./11')

describe('Day 11', () => {
    describe('Challenge 1 & 2', () => {
        it('should return the distance', () => {
            expect(parseMovements('ne,ne,ne')).to.equal(3)
            expect(parseMovements('ne,ne,sw,sw')).to.equal(0)
            expect(parseMovements('ne,ne,s,s')).to.equal(2)
            expect(parseMovements('se,sw,se,sw,sw')).to.equal(3)
        })

        it('should parse input', (done) => {
            fs.readFile('./11/input.txt', 'utf8', (err, contents) => {
                expect(
                    parseMovements(contents)
                ).to.equal(715)
                done()
            })
        })
    })
})
