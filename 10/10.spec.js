const { expect } = require('chai')
const fs = require('fs')
const {
    resequence,
    hash
} = require('./10')

describe('Day 10', () => {
    describe('Challenge 1', () => {
        it('should resequence numbers', () => {
            expect(
                resequence(5, '3,4,1,5')
            ).to.deep.equal([3, 4, 2, 1, 0])
        })

        it('should should compute the hash', () => {
            expect(
                hash(5, '3,4,1,5')
            ).to.equal(12)
        })

        it('should compute hash for real input', () => {
            console.log('The hash is',
                hash(256, '157,222,1,2,177,254,0,228,159,140,249,187,255,51,76,30')
            )
        })
    })
})
