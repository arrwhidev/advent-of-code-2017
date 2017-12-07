const { expect } = require('chai')
const fs = require('fs')
const {
    passphraseValidator,
    anagramPassphraseValidator,
    isAnagram
} = require('./4')

describe('Day 4', () => {
    describe('Passphrase challenge 1', () => {
        it('should return true when no repetitions', () => {
            expect(passphraseValidator('aa bb cc dd ee')).to.be.true
            expect(passphraseValidator('aa bb cc dd aa')).to.be.false
            expect(passphraseValidator('aa bb cc dd aaa')).to.be.true
        })

        it('should count number of valid passphrases', () => {
            fs.readFile('./4/passphrases.txt', 'utf8', (err, contents) => {
                const total = contents
                    .split('\n')
                    .filter(line => line !== '')
                    .reduce((totalValid, line) => (passphraseValidator(line)) ? totalValid + 1 : totalValid, 0)
                console.log('total valid passphrases:', total);
            });
        })
    })

    describe('Passphrase challenge 2', () => {
        it('should return true when words are anagrams', () => {
            expect(isAnagram('hello', 'world')).to.be.false
            expect(isAnagram('q', 'qq')).to.be.false
            expect(isAnagram('hello', 'llheo')).to.be.true
            expect(isAnagram('iiii', 'oiii')).to.be.false
            expect(isAnagram('oiii', 'oooi')).to.be.false
        })

        it('should return true when no phrases are anagrams', () => {
            expect(anagramPassphraseValidator('abcde fghij')).to.be.true
            expect(anagramPassphraseValidator('abcde ecdab')).to.be.false
            expect(anagramPassphraseValidator('a ab abc abd abf abj')).to.be.true
            expect(anagramPassphraseValidator('iiii oiii ooii oooi oooo')).to.be.true
            expect(anagramPassphraseValidator('oiii ioii iioi iiio')).to.be.false
        })

        it('should count number of valid passphrases', () => {
            fs.readFile('./4/passphrases.txt', 'utf8', (err, contents) => {
                const total = contents
                    .split('\n')
                    .filter(line => line !== '')
                    .reduce((totalValid, line) => (anagramPassphraseValidator(line)) ? totalValid + 1 : totalValid, 0)
                console.log('total valid passphrases:', total);
            });
        })
    })
})
