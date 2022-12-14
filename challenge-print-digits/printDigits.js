// Print Digits Backwards

// Difficulty: Medium
// Concepts: Logic, Math

// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

// printDigits(314)
// 4
// 1
// 3

// printDigits(12)
// 2
// 1

////////// CODE HERE //////////
////////// GOOGLE ANSWER //////////

const printDigits = (num) => {
    let numRev = 0;
    let rem = 0;

    while (num > 0) {
        numRev *= 10
        rem = num % 10
        num = (num - rem) / 10

        numRev += rem
    }
    return numRev;
}
console.log(printDigits(23849));