// Problem 5:

// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.


interface Car{
    make:string;
    model: string;
    year: number
}

interface Driver{
    name:string;
    licenseNumber: string;
   
}

function Vehicle<X,Y>(param1:X,param2:Y): X & Y {
    return {...param1, ...param2}
}

const myCar: Car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};

const myDriver: Driver = {
  name: 'Hosnain Rafi',
  licenseNumber: 'LIC123456'
};

const VehicleInfo = Vehicle(myCar,myDriver)
console.log(VehicleInfo);