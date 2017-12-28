const { expect } = require('chai')
const fs = require('fs')
const {
    calculateUsed,
    calculateRegions
} = require('./14')

describe('Day 14', () => {
    xdescribe('Challenge 1', () => {
        it('should count number of used squares', function(done) {
            this.timeout(0) // disable timeout, this takes a few seconds to compute
            expect(calculateUsed('flqrgnkx')).to.equal(8108)
            done()
        })

        it('should count number of used squares for real input', function(done) {
            this.timeout(0) // disable timeout, this takes a few seconds to compute
            expect(calculateUsed('ugkiagan')).to.equal(8292)
            done()
        })
    })

    describe('Challenge 2', () => {
        it('should count number of regions', function(done) {
            this.timeout(0) // disable timeout, this takes a few seconds to compute
            expect(calculateRegions('flqrgnkx')).to.equal(1242)
            done()
        })
    })
})
