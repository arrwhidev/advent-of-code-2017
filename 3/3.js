function calculateGridPosition(number) {
    let pos = { x: 0, y: 0 }
    let i = 1, delta = 1, movesRequired = 2
    while (true) {
        for (let movesRemaining = movesRequired; movesRemaining > 0; movesRemaining--) {
            if (i === number) return pos
            if (movesRemaining > (movesRequired / 2)) {
                pos.x += delta
            } else {
                pos.y += delta
            }

            i++
        }

        delta *= -1 // flip direction mode (right+up or left+down)
        movesRequired += 2
    }

    return pos
}

function manhattenDistance(number) {
    const origin = { x: 0, y: 0 };
    const pos = calculateGridPosition(number);
    return (Math.abs(pos.x) - Math.abs(origin.x)) + (Math.abs(pos.y) - Math.abs(origin.y))
}

module.exports = { manhattenDistance, calculateGridPosition }
