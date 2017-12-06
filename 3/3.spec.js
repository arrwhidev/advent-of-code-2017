const { expect } = require('chai')
const {
    calculateGridPosition,
    manhattenDistance,
    spiralSum
} = require('./3')

describe('Day 3', () => {
    describe('Spiral Memory Challenge 1', () => {
        it('should generate position in spiral grid', () => {
            expect(calculateGridPosition(1)).to.deep.equal({ x: 0, y: 0 })
            expect(calculateGridPosition(2)).to.deep.equal({ x: 1, y: 0 })
            expect(calculateGridPosition(3)).to.deep.equal({ x: 1, y: 1 })
            expect(calculateGridPosition(4)).to.deep.equal({ x: 0, y: 1 })
            expect(calculateGridPosition(5)).to.deep.equal({ x: -1, y: 1 })
            expect(calculateGridPosition(6)).to.deep.equal({ x: -1, y: 0 })
            expect(calculateGridPosition(7)).to.deep.equal({ x: -1, y: -1 })
            expect(calculateGridPosition(8)).to.deep.equal({ x: 0, y: -1 })
            expect(calculateGridPosition(9)).to.deep.equal({ x: 1, y: -1 })
            expect(calculateGridPosition(13)).to.deep.equal({ x: 2, y: 2 })
            expect(calculateGridPosition(25)).to.deep.equal({ x: 2, y: -2 })
            expect(calculateGridPosition(37)).to.deep.equal({ x: -3, y: 3 })
        })

        it('should return the number of steps back to the origin using the manhatten distance algorithm', () => {
            [
                { input: 1, expected: 0 },
                { input: 12, expected: 3 },
                { input: 23, expected: 2 },
                { input: 1024, expected: 31 },
                { input: 312051, expected: 430 }
            ].forEach(test => {
                expect(manhattenDistance(test.input)).to.equal(test.expected)
            });
        })
    })

    describe('Spiral Memory Challenge 2', () => {
        it('should incrementally sum all neighbours', () => {
            [
                { input: 1, expected: 1 },
                { input: 2, expected: 1 },
                { input: 3, expected: 2 },
                { input: 4, expected: 4 },
                { input: 5, expected: 5 },
                { input: 6, expected: 10 },
                { input: 7, expected: 11 },
                { input: 8, expected: 23 },
                { input: 9, expected: 25 },
                { input: 10, expected: 26 },
                { input: 11, expected: 54 }
            ].forEach(test => {
                expect(spiralSum(test.input)).to.equal(test.expected)
            });
        })

        it('should find the largest value above 312051', () => {
            let i = 1
            while (spiralSum(i) < 312051) {
                i++
            }
            console.log('answer is:', spiralSum(i));
        })
    })
})
