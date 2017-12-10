function reallocateLargest(banks) {
    const m = {
        value: Math.max(...banks),
        index: banks.indexOf(Math.max(...banks))
    }

    banks[m.index] = 0
    for (let i = m.index; i < (m.value + m.index); i++) {
        const nextIndex = (i+1) % banks.length;
        banks[nextIndex]++
    }

    return banks;
}

function countReallocations(banks) {
    const history = []
    let running = true, count = 0
    while(running) {
        banks = reallocateLargest(banks)
        if (history.includes(banks.toString())) {
            running = false;
        } else {
            history.push(banks.toString())
        }

        count++
    }

    return count;
}

function countReallocationLoop(banks) {
    const history = []
    let running = true,
        findingLoop = false,
        count = 0,
        delta = 0

    while(running) {
        banks = reallocateLargest(banks)
        if (findingLoop) {
            if (banks.toString() === match) {
                running = false
            }
        } else {
            if (history.includes(banks.toString())) {
                findingLoop = true
                delta = count
                match = banks.toString()
                count--
            } else {
                history.push(banks.toString())
            }
        }

        count++
    }

    return (findingLoop)
        ? count - delta
        : count
}

module.exports = {
    reallocateLargest,
    countReallocations,
    countReallocationLoop
}
