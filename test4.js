/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [14, 9, 6, 4, 2, 3, 5, 7, 0];

function result(numbers) {
    const minNumbers = Math.min(...numbers);
    const maxNumbers = Math.max(...numbers);
    const missingNumbers = [];

    for (let i = minNumbers; i <= maxNumbers; i++) {
        if (!numbers.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

console.log(result(numbers));
