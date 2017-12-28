const {
    knotHash
} = require('../10/10')

function hexToBinary(hex) {
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}

// All this spreading is slow, but it's clean. Not going for speed here...
function calculateUsed(input) {
    return [...Array(128)]
        .map((_, i) => knotHash(256, `${input}-${i}`))
        .reduce((acc, h) => [...acc, ...h.split('')], [])
        .map(c => hexToBinary(c))
        .reduce((acc, b) => [...acc, ...b.split('')], [])
        .map(Number)
        .reduce((total, n) => total + n)
}

function calculateRegions(input) {
    return [...Array(4)]
        .map((_, i) => knotHash(256, `${input}-${i}`))
        .map(h => h.split(''))
        .map(h => h.map(hh => hexToBinary(hh)))
        .reduce((acc, row) => {
            return [...acc, ...row.map(n => n.split(''))]
        }, [])
        .reduce((regions, row) => {
            console.log(row);
            return regions
        }, [])
}

module.exports = { calculateUsed, calculateRegions }
