const { expect } = require('chai')
const fs = require('fs')
const {
    generateLayers,
    traverseFirewall
} = require('./13')

describe('Day 13', () => {
    describe('Challenge 1 ', () => {
        it('should return severity', () => {
            const layers = [
                { range: 3 },
                { range: 2 },
                { range: 0 },
                { range: 0 },
                { range: 4 },
                { range: 0 },
                { range: 4 }
            ]
            expect(traverseFirewall(layers)).to.equal(24)
        })

        it('should return severity for real input', (done) => {
            fs.readFile('./13/input.txt', 'utf8', (err, contents) => {
                const layers = generateLayers(contents);
                console.log(layers);
                expect(
                    traverseFirewall(layers)
                ).to.equal(632)
                done()
            })
        })
    })
})
