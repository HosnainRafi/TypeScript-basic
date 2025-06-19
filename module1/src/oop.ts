class Animal {
    constructor(public name:string,private sound:string) {}

    makeSound(){
        console.log(`The ${this.name} sounds like ${this.sound}`);
    }
}
const dog = new Animal("dog","ghew ghew");
const cat = new Animal("cat","mew mew");
cat.makeSound();


//inheritence
class Parent {
    name:string;
    designation:string;
    address:string;

    constructor(name:string,designation:string,address:string) {
        this.name = name;
        this.designation= designation;
        this.address = address;
    }
     getSleep(numOfHour:number){
        console.log(`${this.name} will take sleep for ${numOfHour} hour`)
    }
}

class Student6 extends Parent {
    

    constructor(name:string,designation:string,address:string) {
        super(name,designation,address);
        
    }

    
}
class Teacher extends Parent{
    salary:number;
     constructor(name:string,designation:string,address:string,salary:number) {
        super(name,designation,address);
        this.salary = salary;
    }
}
const teacher = new Parent("Rafi","Professor","Dhaka");
teacher.getSleep(5);


//typeof and in guard
type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result12 = add("2", "3");
  console.log(result12);

  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin",
  };

  getUser(adminUser);

//instance of
  class User7 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    accessDashboard() {
        console.log(`${this.name} can access the user dashboard.`);
    }
}

class Admin extends User7 {
    accessAdminPanel() {
        console.log(`${this.name} can access the admin panel.`);
    }
}

class Guest {
    viewPublicContent() {
        console.log("Guest can view public content only.");
    }
}


function handlePerson(person: User7 | Admin | Guest) {
    if (person instanceof Admin) {
        person.accessAdminPanel();      // ✅ Type-safe
        person.accessDashboard();       // ✅ inherited from User
    } else if (person instanceof User7) {
        person.accessDashboard();       // ✅ Only access dashboard
    } else if (person instanceof Guest) {
        person.viewPublicContent();     // ✅ Guest-specific
    }
}
const user7 = new User7("Alice");
const admin = new Admin("Bob");
const guest = new Guest();

// Call the function with each instance
handlePerson(user7);  
handlePerson(admin);  
handlePerson(guest);  


//Public,private and protected
class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance; //private always follows this convention
    }

   public addDeposit(amount:number){
    this._balance = this._balance + amount;
   }

     //getter and setter
  //  public getBalance() {
  //     return this._balance;
  //   }
    
    public get getBalance() : number {
      return this._balance;
    }
   
    public set balance(amount : number) {
      this._balance = this._balance + amount;
    }
    
    
  }

  const goribManush = new BankAccount(202,"Rafi",20000);
  goribManush.addDeposit(50);

  class Student8 extends BankAccount {
    constructor(id: number, name: string, balance: number) {
      super(id,name,balance)
    }
  }

  const student8 = new Student8(204,"Hola",200);
  student8.addDeposit(500);
  student8.balance = 70
  //console.log(student8.getBalance()) // for function
  console.log(student8.getBalance) //For getter we can use function just like property




class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  // 1 -> different memory

  // const instance2 = new Counter();
  console.log(Counter.increment()); // 1  --> different memory
  // 1  --> different memory

  // const instance3 = new Counter();
  console.log(Counter.increment());

    console.log(Counter.increment());

//Polymorphism
class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student9 extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  const getSleepHours = (param: Person):void => {
    param.getSleep();
  }

  const person = new Person();
  const student9 = new Student9();
  const developer = new Developer();
  getSleepHours(person);
  getSleepHours(student9);
  getSleepHours(developer);



  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape{
    radius: number;
    constructor(radius:number) {
      super()
      this.radius = radius;
    }

    getArea(){
      return Math.PI*this.radius*this.radius
    }
  }

  class Rectangle extends Shape{
    height: number;
    width: number;
    constructor(height:number,width:number) {
      super()
      this.height = height;
      this.width = width;
    }

    getArea(){
      return Math.PI*this.height*this.width
    }
  }


  const shape = new Shape();
  const circle = new Circle(25);
  const rectangle = new Rectangle(10,15);
   const getShapeArea = (param:Shape) =>{
      console.log(param.getArea());

   }

   getShapeArea(circle);




   // abstraction  : 1. interface 2. abstract

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car  engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving  the car");
    }
  }

  // const hondaCar = new Car2();
  // hondaCar.startEngine();