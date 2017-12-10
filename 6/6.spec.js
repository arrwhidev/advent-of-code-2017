const { expect } = require('chai')
const {
    reallocateLargest,
    countReallocations,
    countReallocationLoop
} = require('./6')

describe('Day 6', () => {
    describe('Reallocation challenge 1', () => {
        it('should reallocate largest block', () => {
            expect(
                reallocateLargest([0, 2, 7, 0])
            ).to.deep.equal([2, 4, 1, 2])
        })

        it('should count reallocations', () => {
            expect(
                countReallocations([0, 2, 7, 0])
            ).to.equal(5)
        })

        it('should count relocations', () => {
            expect(
                countReallocations([2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14])
            ).to.equal(3156)
        })
    })

    describe('Rellocation challenge 2', () => {
        it('should count number of steps in reallocation loop', () => {
            expect(
                countReallocationLoop([0, 2, 7, 0])
            ).to.equal(4)

            expect(
                countReallocationLoop([2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14])
            ).to.equal(1610)
        })
    })
})
