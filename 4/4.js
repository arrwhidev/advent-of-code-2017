function passphraseValidator (passphrase) {
    const set = new Set()
    return passphrase.split(/\s/g).reduce((isValid, item) => {
        if (!isValid || set.has(item)) return false;
        set.add(item)
        return true;
    }, true)
}

module.exports = { passphraseValidator }
