const { expect } = require('chai')
const fs = require('fs')
const {
    toAsciiCodes,
    resequence,
    hash,
    denseHash,
    knotHash
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

    describe('Challenge 2', () => {
        it('should convert to ascii codes', () => {
            expect(
                toAsciiCodes('1,2,3')
            ).to.deep.equal([
                49,44,50,44,51
            ])
        })

        it('should reduce the sparse hash into a dense hash', () => {
            expect(
                denseHash(4, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
            ).to.deep.equal([
                4, 12, 4, 28
            ])

            expect(
                denseHash(16, [65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22])
            ).to.deep.equal([
                64
            ])
        })

        it('should produce a hash', () => {
            expect(
                knotHash(256, '1,2,3')
            ).to.equal('3efbe78a8d82f29979031a4aa0b16a9d')

            expect(
                knotHash(256, 'AoC 2017')
            ).to.equal('33efeb34ea91902bb2f59c9920caa6cd')

            expect(
                knotHash(256, '1,2,3')
            ).to.equal('3efbe78a8d82f29979031a4aa0b16a9d')

            expect(
                knotHash(256, '1,2,4')
            ).to.equal('63960835bcdc130f0b66d7ff4f6a5a8e')
        })

        it('should compute hash for real input', () => {
            console.log('The knot hash is',
                knotHash(256, '157,222,1,2,177,254,0,228,159,140,249,187,255,51,76,30')
            )
        })
    })
})
