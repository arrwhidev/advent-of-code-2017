Array.prototype.cyclicSlice = function(start, size) {
    let slice = []
    for (let i = 0; i < size; i++) {
        slice[i] = this[(start + i) % this.length]
    }
    return slice
}

function toAsciiCodes(str) {
    return str
      .split('')
      .map(c => c.charCodeAt(0))
}

function hash(size, input) {
    const seq = resequence(size, input)
    return seq[0] * seq[1]
}

function resequence(size, input) {
    let arr = generateSeq(size)
    let curr = 0
    let skip = 0
    input
        .split(',')
        .map(i => parseInt(i))
        .forEach(len => {
            let tmp = curr
            arr.cyclicSlice(curr, len).reverse().forEach(num => {
                arr[tmp] = num
                tmp = (tmp + 1) % size
            })

            curr = (curr + len + skip) % size
            skip++
        })

    return arr
}

function generateSeq(size) {
    let arr = []
    for (let i = 0; i < size; i++) arr.push(i)
    return arr
}

function knotHash(size, input) {
    const asciiCodes = toAsciiCodes(input)
    asciiCodes.push(...[17, 31, 73, 47, 23])

    let arr = generateSeq(size)
    let curr = 0
    let skip = 0

    for (let i = 0; i < 64; i++) {
        asciiCodes
            .map(i => parseInt(i))
            .forEach(len => {
                let tmp = curr
                arr.cyclicSlice(curr, len).reverse().forEach(num => {
                    arr[tmp] = num
                    tmp = (tmp + 1) % size
                })

                curr = (curr + len + skip) % size
                skip++
            })
    }

    return denseHash(16, arr).reduce(toHex, '')
}

function denseHash(size, arr) {
    const dense = []
    while(arr.length > 0) {
        const xor = arr
            .splice(0, size)
            .reduce((total, num) => (!total) ? num : total ^ num)
        dense.push(xor)
    }
    return dense
}

const toHex = (hex, num) => {
    const h = num.toString(16)
    return (h.length === 1)
        ? `${hex}0${h}`
        : `${hex}${h}`
}

module.exports = {
    hash, resequence, toAsciiCodes, knotHash, denseHash, toHex
}
