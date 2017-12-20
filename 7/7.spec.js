const { expect } = require('chai')
const fs = require('fs')
const {
    convertRow,
    findRoot,
    convertToTree,
    findUnbalance
} = require('./7')

describe('Day 7', () => {
    describe('Challenge 1', () => {
        it('should convert a simple row to details', () => {
            expect(
                convertRow('pbga (66)')
            ).to.deep.equal({
                name: 'pbga',
                weight: 66,
                items: []
            })
        })

        it('should convert a complex row to details', () => {
            expect(
                convertRow('cctmov (71684) -> ixwae, bxdgmn, jyphghz, hxvtdmo')
            ).to.deep.equal({
                name: 'cctmov',
                weight: 71684,
                items: ['ixwae', 'bxdgmn', 'jyphghz', 'hxvtdmo']
            })
        })

        it('should find the root node', () => {
            expect(
                findRoot([
                    'three (3)',
                    'one (1) -> two, three',
                    'two (2) -> four, five',
                    'five (5)',
                    'four (4)',
                ])
            ).to.equal('one')
        })

        it('should find the root node for the real input', () => {
            fs.readFile('./7/input.txt', 'utf8', (err, contents) => {
                const rows = contents
                    .split('\n')
                    .filter(line => line !== '')
                expect(findRoot(rows)).to.equal('qibuqqg')
            })
        })
    })

    describe('Challenge 2', () => {
        it('should convert to tree correctly', () => {
            expect(
                convertToTree([
                    'three (3)',
                    'one (1) -> two, three',
                    'two (2) -> four, five',
                    'five (5)',
                    'four (4)',
                ])
            ).to.deep.equal({
                one: {
                    name: 'one',
                    weight: 1,
                    items: {
                        two: {
                            name: 'two',
                            weight: 2,
                            items: {
                                four: {
                                    name: 'four',
                                    weight: 4,
                                    items: {}
                                },
                                five: {
                                    name: 'five',
                                    weight: 5,
                                    items: {}
                                }
                            }
                        },
                        three: {
                            name: 'three',
                            weight: 3,
                            items: {}
                        }
                    }
                }
            })
        })

        it('should find unbalance', () => {
            fs.readFile('./7/input.txt', 'utf8', (err, contents) => {
                const rows = contents
                    .split('\n')
                    .filter(line => line !== '')
                findUnbalance(
                    convertToTree(rows)['qibuqqg']
                )
            })
        })
    })
})
