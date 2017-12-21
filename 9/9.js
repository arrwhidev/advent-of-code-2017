function convertToGroups(stream) {
    let lvl = 0
    let inGarbage = false
    let skipNext = false

    return stream.split('').reduce((groups, c) => {
        if (skipNext) skipNext = false
        else if (c === '!') skipNext = true
        else if (c === '>') inGarbage = false
        else if (c === '<') inGarbage = true
        else if (inGarbage) return groups
        else if (c === '}') lvl--
        else if (c === '{' ) {
            lvl++
            if (!groups[lvl]) groups[lvl] = 0
            groups[lvl]++
        }

        return groups
    }, {})
}

function calculateScore(stream) {
    const groups = convertToGroups(stream)
    return Object
        .keys(groups)
        .map(key => ({ multiplier: key, value: groups[key] }))
        .reduce((score, item) => score + (item.multiplier * item.value), 0)
}

module.exports = { convertToGroups, calculateScore }
