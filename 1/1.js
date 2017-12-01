/**
 * Advent of Code 2017 - Day 1
 * 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
 * 1111 produces 4 because each digit (all 1) matches the next.
 * 1234 produces 0 because no digit matches the next.
 * 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
 */

function captcha(input) {
    const str = input.toString()
    let result = 0
    for (let i = 0; i < str.length; i++) {
        const currNum = str[i]
        const nextNum = ((str.length - 1) === i) ? str[0] : str[i + 1]
        if (currNum === nextNum) {
            result += parseInt(currNum)
        }
    }
    return result;
}

module.exports = captcha
