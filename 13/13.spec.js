const { expect } = require('chai')
const fs = require('fs')
const {
    generateLayers,
    traverseFirewall,
    findFastestPath
} = require('./13')

describe('Day 13', () => {
    describe('Challenge 1 ', () => {
        it('should return severity', () => {
            const layers = [
                { depth: 0, range: 3, offset: 4 },
                { depth: 1, range: 2, offset: 2 },
                { depth: 4, range: 4, offset: 6 },
                { depth: 6, range: 4, offset: 6 }
            ]
            expect(traverseFirewall(layers)).to.equal(24)
        })

        it('should return severity for real input', (done) => {
            fs.readFile('./13/input.txt', 'utf8', (err, contents) => {
                expect(
                    traverseFirewall(generateLayers(contents))
                ).to.equal(632)
                done()
            })
        })
    })

    describe('Challenge 2 ', () => {
        it('should find fastest path through the firewall without getting caught', () => {
            const layers = [
                { depth: 0, range: 3, offset: 4 },
                { depth: 1, range: 2, offset: 2 },
                { depth: 4, range: 4, offset: 6 },
                { depth: 6, range: 4, offset: 6 }
            ]
            expect(findFastestPath(layers)).to.equal(10)
        })

        it('should return fastest path for real input', function(done) {
            this.timeout(0) // disable timeout, this takes a few seconds to compute
            fs.readFile('./13/input.txt', 'utf8', (err, contents) => {
                expect(
                    findFastestPath(generateLayers(contents))
                ).to.equal(3849742)
                done()
            })
        })
    })
})
