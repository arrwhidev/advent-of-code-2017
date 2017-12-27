function parseInput(input) {
    return input.trim()
        .split('\n')
        .map(l => {
            const [depth, range] = l.split(': ').map(Number)
            return { depth, range }
        })
}

function generateLayers(input) {
    return parseInput(input)
        .map(({ depth, range }) => {
            return { depth, range, offset: (range - 1) * 2 }
        })
}

function traverseFirewall(layers, delay = 0) {
    let severity = 0
    layers.forEach(({ depth, range, offset }) => {
        if ((depth + delay) % offset === 0) {
            severity += (depth + delay) * range
        }
    })
    return severity
}

function findFastestPath(layers) {
    let delay = 0
    while (true) {
        if (traverseFirewall(layers, delay) === 0) {
            return delay
        }
        delay++
    }
}

module.exports = { generateLayers, traverseFirewall, findFastestPath }
