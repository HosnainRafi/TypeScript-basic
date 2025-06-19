// Problem 2:

// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.


interface Person9{
    address?:{
        city:string;
        district: string;
    }
    phone?:string;
}
const getAddressCity = (T:Person9) =>{
    return T.address?.city;
}

console.log(getAddressCity({address:{city:'Dhanmondi',district:'Dhaka'},phone:'01745859665'}));