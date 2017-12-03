const RIGHT = 0
const UP = 1
const LEFT = 2
const DOWN = 3

function calculateGridPosition(number) {
    let pos = { x: 0, y: 0 };
    let direction = RIGHT;
    let directionSwaps = 0
    let numStepsInDirection = 1
    let movesRemaining = 1

    for (let i = 1; i < number; i++) {
        updatePosition(pos, direction)
        movesRemaining--
        if (movesRemaining === 0) {
            direction = getNewDirection(direction)
            directionSwaps++
            if (directionSwaps % 2 == 0) {
                numStepsInDirection++
            }
            movesRemaining = numStepsInDirection
        }
    }

    return pos
}

function updatePosition(pos, direction) {
    if (direction === RIGHT) {
        pos.x++
    } else if (direction === LEFT) {
        pos.x--
    } else if (direction === UP) {
        pos.y++
    } else if (direction === DOWN) {
        pos.y--
    }
}

function getNewDirection(direction) {
    if (direction === RIGHT) {
        return UP
    } else if (direction === UP) {
        return LEFT
    } else if (direction === LEFT) {
        return DOWN
    } else if (direction === DOWN) {
        return RIGHT
    }
}

function manhattenDistance(number) {
    const origin = { x: 0, y: 0 };
    const pos = calculateGridPosition(number);
    return (Math.abs(pos.x) - Math.abs(origin.x)) + (Math.abs(pos.y) - Math.abs(origin.y))
}

module.exports = { manhattenDistance, calculateGridPosition }
