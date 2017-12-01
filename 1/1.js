/**
 * Advent of Code 2017 - Day 1
 *
 * Captcha 1:
 * 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
 * 1111 produces 4 because each digit (all 1) matches the next.
 * 1234 produces 0 because no digit matches the next.
 * 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
 *
 * Captcha 2:
 * 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
 * 1221 produces 0, because every comparison is between a 1 and a 2.
 * 123425 produces 4, because both 2s match each other, but no other digit has a match.
 * 123123 produces 12.
 * 12131415 produces 4.
 */

 function sumValuesWithCirculaDelta(input, delta) {
     const str = input.toString()
     let result = 0
     for (let i = 0; i < str.length; i++) {
         const currNum = str[i]
         const nextNum = str[(i + delta) % str.length]
         if (currNum === nextNum) {
             result += parseInt(currNum)
         }
     }
     return result;
 }

function captcha1(input) {
    return sumValuesWithCirculaDelta(input, 1)
}

function captcha2(input) {
    return sumValuesWithCirculaDelta(input, input.toString().length / 2)
}

module.exports = { captcha1, captcha2 }
