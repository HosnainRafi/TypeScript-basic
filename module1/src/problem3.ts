// Problem 3:

// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
{
///


class Cat {
    name: string ;
    constructor(name:string) {  
    this.name = name;
    }
    Meow(){
        console.log('Meow');
        
    }
}

function isCat(obj:unknown) :obj is Cat{
    return obj instanceof Cat;
}

const cat4 = new Cat('Billi');
const notCat = new Cat('not a cat');

function checkAnimal(animal:unknown) {
    if(isCat(animal)){
        console.log(`yes, it's a cat.`);
        animal.Meow()
    }
    else{
        console.log(`no, it's not a cat.`);
        
    }
}

checkAnimal(cat4)
///
}