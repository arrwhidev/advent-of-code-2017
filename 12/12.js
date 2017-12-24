function parsePipes(input) {
    return input
    .split('\n')
    .filter(line => line !== '')
    .map(line => {
        const [l, r] = line.split(' <-> ')
        return r.split(', ').map(n => parseInt(n))
    })
}

function isConnectedTo(map, from, to, prev, set = new Set()) {
    set.add(from)
    
    if (from == to) return true
    if (map[from].includes(to)) return true
    if (map[from].length === 1 && map[from][0] == from) return false
    let isConnected = false
    map[from]
        .filter(i => i != from)
        .filter(i => i != prev)
        .filter(i => !set.has(i))
        .forEach(i => {
            if (!isConnected) {
                isConnected = isConnectedTo(map, i, to, from, set)
            }
        })
    return isConnected
}

function numConnections(input) {
    const map = parsePipes(input)
    return Object.keys(map).reduce((connections, key) => {
        return (isConnectedTo(map, key, 0)) ? connections + 1 : connections;
    }, 0)
}

module.exports = { numConnections, isConnectedTo }
