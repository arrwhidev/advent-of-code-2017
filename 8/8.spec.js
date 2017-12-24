const { expect } = require('chai')
const fs = require('fs')
const {
    runInstructions
} = require('./8')

describe('Day 8', () => {
    describe('Challenge 1', () => {
        it('should run instructions', () => {
            expect(
                runInstructions([
                    'b inc 5 if a > 1',
                    'a inc 1 if b < 5',
                    'c dec -10 if a >= 1',
                    'c inc -20 if c == 10'
                ])
            ).to.deep.equal({
                a: 1,
                b: 0,
                c: -10,
                _max: 10
            })
        })

        it('should find the largest value in the register', (done) => {
            fs.readFile('./8/input.txt', 'utf8', (err, contents) => {
                const lines = contents
                    .split('\n')
                    .filter(line => line !== '')
                const register = runInstructions(lines)
                const max = Math.max(
                    ...Object.keys(register).map(key => register[key])
                );
                console.log('Max in register', max);
                done()
            })
        })
    })

    describe('Challenge 2', () => {
        it('should find the largest value in the register at any point', (done) => {
            fs.readFile('./8/input.txt', 'utf8', (err, contents) => {
                const lines = contents
                    .split('\n')
                    .filter(line => line !== '')
                const register = runInstructions(lines)
                console.log('Max in register any time', register._max);
                done()
            })
        })
    })
})
