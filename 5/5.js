function maze(input) {
    const steps = input.split(/\s/g)
    let offset = 0, count = 0, escaped = false
    while (!escaped) {
        const newoffset = offset + parseInt(steps[offset])
        steps[offset]++
        offset = newoffset

        if (offset === steps.length || offset < 0) {
            escaped = true
        }
        count++
    }

    return count
}

module.exports = { maze }
