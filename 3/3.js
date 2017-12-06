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
}

function manhattenDistance(number) {
    const { x, y } = calculateGridPosition(number);
    return Math.abs(x) + Math.abs(y);
}

function spiralSum(number) {
    const grid = createEmptyGrid(130)
    let pos = { x: 100, y: 100 }
    let i = 1, delta = 1, movesRequired = 2
    while (true) {
        for (let movesRemaining = movesRequired; movesRemaining > 0; movesRemaining--) {
            const { x, y } = pos;
            grid[x][y] = (i === 1) ? 1 : totalNear(grid, x, y)

            if (movesRemaining > (movesRequired / 2)) {
                pos.x += delta
            } else {
                pos.y += delta
            }

            if (i === number) return grid[x][y]
            i++
        }

        delta *= -1 // flip direction mode (right+up or left+down)
        movesRequired += 2
    }
}

function createEmptyGrid(gridSize) {
    let grid = [];
    for (let i = 0; i < gridSize; i++) {
        grid[i] = Array(gridSize)
    }
    return grid;
}

function totalNear(grid, x, y) {
    let total = 0;
    total += grid[x+1][y] || 0
    total += grid[x+1][y+1] || 0
    total += grid[x][y+1] || 0
    total += grid[x-1][y+1] || 0
    total += grid[x-1][y] || 0
    total += grid[x-1][y-1] || 0
    total += grid[x][y-1] || 0
    total += grid[x+1][y-1] || 0
    return total
}

module.exports = { manhattenDistance, calculateGridPosition, spiralSum }
