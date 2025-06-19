// Problem 4:

// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.


const mixedData = [1, 'two', 3, 'four', 5];

const FindANumber = (array: (number | string)[]): number => {
    let total: number = 0;
    for (const item of array) {
        if (typeof item === 'number') {
            total = total + item;
        }
    }
    return total;
}

console.log(FindANumber(mixedData));