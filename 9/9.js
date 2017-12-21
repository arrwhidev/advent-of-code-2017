function convertToGroups(stream) {
    let lvl = 0
    let inGarbage = false
    let skipNext = false

    return stream.split('').reduce((groups, c) => {
        if (skipNext) skipNext = false
        else if (c === '!') skipNext = true
        else if (c === '>') inGarbage = false
        else if (c === '<' && !inGarbage) inGarbage = true
        else if (inGarbage) {
            groups.garbage++
            return groups
        }
        else if (c === '}') lvl--
        else if (c === '{' ) {
            lvl++
            if (!groups[lvl]) groups[lvl] = 0
            groups[lvl]++
        }

        return groups
    }, { garbage: 0 })
}

function calculateScore(stream) {
    const groups = convertToGroups(stream)
    return Object
        .keys(groups)
        .filter(key => key !== 'garbage')
        .map(key => ({ multiplier: key, value: groups[key] }))
        .reduce((score, item) => score + (item.multiplier * item.value), 0)
}

module.exports = { convertToGroups, calculateScore }
