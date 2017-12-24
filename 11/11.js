function parseMovements(input) {
    const cubePosition = input
        .split('\n')[0]
        .split(',')
        .reduce((pos, m) => {
            if (m === 'nw') {
                pos.y++
                pos.x--
            } else if (m === 'n') {
                pos.y++
                pos.z--
            } else if (m === 'ne') {
                pos.x++
                pos.z--
            } else if (m === 'se') {
                pos.x++
                pos.y--
            } else if (m === 's') {
                pos.y--
                pos.z++
            } else if (m === 'sw') {
                pos.x--
                pos.z++
            }

            return pos
        }, { x: 0, y: 0, z: 0 })

    return manhattenDistaneCube(cubePosition);
}

function manhattenDistaneCube(p) {
    return (
        Math.abs(p.x) + Math.abs(p.y) + Math.abs(p.z)
    ) / 2;
}

module.exports = { parseMovements }
