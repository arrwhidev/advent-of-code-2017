const { expect } = require('chai')
const fs = require('fs')
const {
    maze,
    maze2
} = require('./5')

describe('Day 5', () => {
    describe('Maze challenge 1', () => {
        it('should return number of steps to escape the maze', () => {
            expect(maze('0 3 0 1 -3')).to.equal(5)
        })

        it('should count number of moves to escape the maze', () => {
            fs.readFile('./5/maze.txt', 'utf8', (err, contents) => {
                const input = contents
                    .split('\n')
                    .filter(line => line !== '')
                    .join(' ')

                console.log('number of steps to escape the maze:', maze(input));
            });
        })
    })

    describe('Maze challenge 2', () => {
        it('should return number of steps to escape the maze', () => {
            expect(maze2('0 3 0 1 -3')).to.equal(10)
        })

        it('should count number of moves to escape the maze', () => {
            fs.readFile('./5/maze.txt', 'utf8', (err, contents) => {
                const input = contents
                    .split('\n')
                    .filter(line => line !== '')
                    .join(' ')

                console.log('number of steps to escape the maze:', maze2(input));
            });
        })
    })
})
