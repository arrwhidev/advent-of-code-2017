function parsePipes(input) {
    return input
    .split('\n')
    .filter(line => line !== '')
    .map(line => {
        const [l, r] = line.split(' <-> ')
        return r.split(', ').map(n => parseInt(n))
    })
}

function isConnectedTo(map, from, to, prev) {
    if (from == to) return true
    if (map[from].length === 1 && map[from][0] == from) return false
    if (map[from].includes(to)) return true
    let isConnected = false
    map[from]
        .filter(i => i != from)
        .filter(i => i != prev)
        .forEach(i => {
            if (!isConnected) {
                isConnected = isConnectedTo(map, i, to, from)
            }
        })
    return isConnected
}

function numConnections(input) {
    const map = parsePipes(input)
    return Object.keys(map).reduce((connections, key) => {
        const yn = isConnectedTo(map, key, 0)
        console.log('key:', key, '=', yn);ions;
    }, 0)
}

module.exports = { numConnections, isConnectedTo }
