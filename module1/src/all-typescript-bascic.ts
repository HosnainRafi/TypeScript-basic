let ageName: [number, string] = [45, 'Rafi']
ageName[0] = 42

//object type
const user: {
    company: 'Programming Hero'; //literal type
    firstName: string;
    middleName?: string;
    lastName: string
} = {
    company: 'Programming Hero',
    firstName: 'Hosnain',
    lastName: 'Rafi',
}

const addNumber = (num1: number, num2: number) => num1 + num2;

const progUser = {
    name: "Hosnain Rafi",
    balance: 0,
    addBalance(newBalance: number): string {
        this.balance += newBalance;
        return `My new balance is : ${this.balance}`;
    }
};

console.log(progUser.addBalance(20));
console.log(progUser);

const array: number[] = [2, 5, 7];

const newArray: number[] = array.map((element: number): number => element * element);
//inside function need a first bracket to assign
//For whole function we have to define later



//spread operator
const bros1: string[] = ['Rafi', 'Ifty', 'Mehedi'];
const bros2: string[] = ['Rafi2', 'Ifty2', 'Mehedi2'];
bros1.push(...bros2)


const mentors1 = {
    name: 'Mehba',
    subject: 'dbms'
}
const mentors2 = {
    name: 'Mehba2',
    subject: 'dbms2'
}

const mentorsList = {
    ...mentors1,
    ...mentors2
}

//rest operator (Make them like array)
const friendList = (...friends: string[]) => {
    friends.forEach(friend => {
        console.log(`Hi ${friend}`)
    });
}

//destructuring
const friends: string[] = ['Rahim', 'Karim', 'Babu']

const userInfo = {
    id: 245,
    name: {
        firstName: "hello",
        middleName: "Hosnain",
        lastName: "Rafi"
    },
    contactNo: "07154854968"
}

const { contactNo, name: { middleName } } = userInfo

//array destructuring
const myFriends: string[] = ['rahim', 'karim', 'babu', 'rachel', 'ranu', 'rafi']
const [, , bestfriend, ...rest] = myFriends
//...rest will take 'rachel','ranu','rafi'




//Type alias
type Student = {
    name: String,
    Id: Number,
    contactNo?: string,
    Address: String
}

const student1: Student = {
    name: "Rafi",
    Id: 202,
    contactNo: '0178548545',
    Address: "2//12 Dhanmondi"
}
const student2: Student = {
    name: "Rakib",
    Id: 201,
    contactNo: '0178548874',
    Address: "2//12 Dhanmondi"
}

//Type Allias string
type UserName = String;

const username: UserName = "Hosnain"

//Allias function
type SumOFTwo = (num1: number, num2: number) => number
const sumOfTwo: SumOFTwo = (num1, num2) => num1 + num2

//Union type |

type FrontendDeveloper = 'Fakibaz' | 'Good'
type BackendDeveloper = 'Fakibaz' | 'Expert'

type StudentOfPog = {
    studentName: String,
    designation: FrontendDeveloper | BackendDeveloper
}

const studentOfPog: StudentOfPog = {
    studentName: 'Rafi',
    designation: 'Good'
}


type FrontDeveloper = {
    skills: String[],
    designation1: 'FrontEnd Developer'
}
type BackDeveloper = {
    skills: String[],
    designation2: 'Backend Developer'
}

type FullStackDeveloper = FrontDeveloper & BackDeveloper

const fullStackDeveloper: FullStackDeveloper = {
    skills: ['Html', 'Css', 'Javascript'],
    designation1: 'FrontEnd Developer',
    designation2: 'Backend Developer'
}


//ternary operator
const age = 22

type IsAdult = (age: number) => String

const isAdult: IsAdult = (age) => age >= 18 ? 'adult' : 'not adult'

console.log(isAdult(34))

//nullish is same like ternary opearator. But it works for null and undefined only

//const isAuthenticated = ""
//const isAuthenticated = null
const isAuthenticated = undefined
const result1 = isAuthenticated ?? 'Guest'
const result2 = isAuthenticated ? isAuthenticated : 'Guest'
console.log({ result1, result2 })

//Optional chaining

type User = {
    name: String,
    address: {
        city: String,
        district: String
    }
}
const user1: User = {
    name: 'Rafi',
    address: {
        city: 'Dhaka',
        district: 'dhamrai'
    }
}

const permanentUser = user1?.address?.permanentAdress ?? 'No permanent address'
console.log(permanentUser)

//Unknown type is used for if the type of the value is unknown
//never type is used in throw error because it will never return


type User2 = User & { role: string }
interface User3 extends User {
    area: string,
}


const user2: User2 = {
    name: 'Rafi',
    address: {
        city: 'Dhaka',
        district: 'dhamrai'
    },
    role: 'Developrt'
}
const user3: User3 = {
    name: 'Rafi',
    address: {
        city: 'Dhaka',
        district: 'dhamrai'
    },
    area: 'Dhanmondi'
}

//Generic type
type Generic<T> = Array<T>

const usernameList: Generic<string> = ['Rafi', 'Jodu', 'Modhu']
const usernumberList: Generic<number> = [2, 5, 9]

const user4: Generic<{ name: string, address: { city: string, district: string } }> = [
    {
        name: 'Rafi',
        address: {
            city: 'Dhaka',
            district: 'dhamrai'
        }
    },
    {
        name: 'Rafi2',
        address: {
            city: 'Dhaka2',
            district: 'dhamrai2'
        }
    },
];

//Generic tuple
type GenericTuple<X, Y> = [X, Y]
const manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Y']



//Array function with generic
const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
}
const res = createArrayWithGeneric<string>('Hello');
console.log(createArrayWithGeneric('Hello'));
console.log(createArrayWithGeneric(51));

const createArrayTupleWithGeneric = <P, Q>(param1: P, param2?: Q): [P, Q?] => {
    return [param1, param2];
}
const res2 = createArrayTupleWithGeneric<string, string>('Hello');
console.log(res2);

const addCourseTostudent = <T extends { name: string; id: string }>(student: T): { name: string; id: string; course: string } => {
    const course = 'Next level web development';
    return {
        ...student, 
        course
    };
};
const student4 = addCourseTostudent({
    name: 'Hosnain Rafi',
    id: 'IT20012',
    roll: 12,
})
const student5 = addCourseTostudent({
    name: 'Hosnain Rafi2',
    id: 'IT20013'
})
const student6 = addCourseTostudent({
     name: 'Hosnain Rafi2',
     id: 'IT20013'
})
console.log({ student5 }, { student4 })


//Contrints
const getPropertyValue = <X,Y extends keyof X> (obj:X,key:Y) => {
    return obj[key];
}

const student7 = {
    name: 'Hosnain Rafi',
    id: 'IT20012',
    roll: 12,
}

const propertyValue = getPropertyValue(student7,'name');
console.log(propertyValue)

//promise

// const handlePromise = ():Promise<string> => {
//     return new Promise<string>((resolve,reject) =>{
//         const data:string = "something"
//         if(data){
//             resolve(data)
//         }
//         else{
//             reject("failed to load data");
//         }
//     })
// }

// const showdata = async () => {
//     const data = await handlePromise();
//     console.log(data);
// }
// showdata()

type customData = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const fetchData = async ():Promise<customData> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data: customData = await response.json();//If I didnot metion the type it will not show any error instead of giving a false return type on the parent
    return data;
}

const showdata = async () => {
    try {
        const allData = await fetchData();
        console.log(allData);
    } catch (error) {
        console.log("error found")
    }
}
showdata()