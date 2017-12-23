Array.prototype.cyclicSlice = function(start, size) {
    let slice = []
    for (let i = 0; i < size; i++) {
        slice[i] = this[(start + i) % this.length]
    }
    return slice
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

module.exports = {
    hash, resequence
}
