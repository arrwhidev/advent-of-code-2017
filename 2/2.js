/**
 * Advent of Code 2017 - Day 2
 *
 * Checksum 1:
 *  5 1 9 5
 *  7 5 3
 *  2 4 6 8
 *
 * The first row's largest and smallest values are 9 and 1, and their difference is 8.
 * The second row's largest and smallest values are 7 and 3, and their difference is 4.
 * The third row's difference is 6.
 * In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.
 *
 * Checksum 2:
 *  5 9 2 8
 *  9 4 7 3
 *  3 8 6 5
 *
 * In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
 * In the second row, the two numbers are 9 and 3; the result is 3.
 * In the third row, the result is 2.
 * In this example, the sum of the results would be 4 + 3 + 2 = 9.
 */

const SORT = (a, b) => a - b
const lineToNumbers = line => line.split(/\s/g).map(Number)

function checksum1(lines) {
    return lines.reduce((total, line, i) => {
        const { min, max } = lineToNumbers(line)
            .reduce((minMax, num) => {
                if (num < minMax.min) minMax.min = num
                if (num > minMax.max) minMax.max = num
                return minMax
            }, { min: Number.MAX_SAFE_INTEGER, max: 0 })
        return total + (max - min)
    }, 0)
}

function checksum2(lines) {
    return lines.reduce((total, line, i) => {
        const numbers = lineToNumbers(line)
        toUniqueSortedPairs(numbers).forEach(pair => {
            if (pair[0] % pair[1] === 0) {
                total += pair[0] / pair[1]
            }
        })
        return total
    }, 0)
}

function toUniqueSortedPairs(numbers) {
    return numbers.reduce((pairs, num, i) => {
        for (let j = i + 1; j < numbers.length; j++) {
            const pair = [numbers[i], numbers[j]]
            pairs.push(pair.sort(SORT).reverse())
        }
        return pairs
    }, [])
}

module.exports = { checksum1, checksum2 }
