const { expect } = require('chai')
const fs = require('fs')
const {
    isConnectedTo,
    numConnections
} = require('./12')

describe('Day 12', () => {
    describe('Challenge 1 ', () => {
        it('should return connections', () => {
            const map = [
                [2],
                [1],
                [0, 3, 4],
                [2, 4],
                [2, 3]
            ]

            expect(isConnectedTo(map, 3, 0)).to.equal(true)
            expect(isConnectedTo(map, 4, 0)).to.equal(true)
            expect(isConnectedTo(map, 1, 0)).to.equal(false)
        })

        it('should parse input', (done) => {
            fs.readFile('./12/input.txt', 'utf8', (err, contents) => {
                expect(numConnections(contents)).to.equal(288)
                done()
            })
        })
    })
})
