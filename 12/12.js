function parsePipes(input) {
    return input
    .split('\n')
    .filter(line => line !== '')
    .map(line => {
        const [l, r] = line.split(' <-> ')
        return r.split(', ').map(n => parseInt(n))
    })
}

function isConnectedTo(map, from, to, set = new Set()) {
    set.add(from)
    if (from == to) return true
    return map[from]
        .filter(i => !set.has(i))
        .reduce((isConnected, i) => {
            return (!isConnected) ? isConnectedTo(map, i, to, set) : true
        }, false)
}

function numConnections(input) {
    const map = parsePipes(input)
    return Object.keys(map).reduce((connections, key) => {
        return (isConnectedTo(map, key, 0)) ? connections + 1 : connections;
    }, 0)
}

module.exports = { numConnections, isConnectedTo }
