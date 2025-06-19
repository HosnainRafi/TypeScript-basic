// Problem 6:

// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

const numberData:number[] = [1, 2, 3, 8, 5];

const numberFunction = (numberList: unknown): void => {
    if (Array.isArray(numberList)) {
        let countNumber = 0
        for (let i = 0; i < numberList.length; i++) {
            if (typeof numberList[i] === 'number') {
                countNumber += numberList[i];
                
            }
            else {
                console.log('Error Occured');

            }

        }
        console.log(countNumber);
    }
    else{

        console.log('Not an array');
    }


} 
numberFunction(numberData);