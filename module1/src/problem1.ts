// Problem 1:

// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.


const numOrString = (value:number | string) =>{
    if(typeof value === 'string'){
        return value.length
        
    }
    else{
       return value*value; 
    }
}
console.log(numOrString('Hello'));