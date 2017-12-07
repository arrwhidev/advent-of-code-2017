function passphraseValidator(passphrase) {
    const set = new Set()
    return passphrase.split(/\s/g).reduce((isValid, item) => {
        if (!isValid || set.has(item)) return false;
        set.add(item)
        return true;
    }, true)
}

function countDistinctChars(dic, c) {
    return Object.assign(dic, { [c]: (dic[c] || 0) + 1 })
}

function isAnagram(word1, word2) {
    if (word1.length !== word2.length) return false
    const d1 = word1.split('').reduce(countDistinctChars, {})
    const d2 = word2.split('').reduce(countDistinctChars, {})
    return Object.keys(d1).reduce((isMatch, k) => isMatch | (d1[k] != d2[k]), false) === 0
}

function anagramPassphraseValidator(passphrase) {
    let isValid = true
    const words = passphrase.split(/\s/g)
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if (i === j) continue
            if (isAnagram(words[i], words[j])) isValid = false
        }
    }
    return isValid
}

module.exports = { passphraseValidator, isAnagram, anagramPassphraseValidator }
