const { expect } = require('chai')
const fs = require('fs')
const {
    passphraseValidator
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
})
