// a super set of javascript
// console.log('hellow world')
// let age: number = 20

// console.log(age)
// if (age <50)
// age+=10;
// console.log(age)

let slaes : number =123_456_789;
let course : string = 'Typescript'
// no need to anotate if the variabe is initialized
let is_published =true

//if not initialized
let level; //any

function rednder (document: any){
    console.log(document)
}



// array


let numbers=[1,2,3] // number[] detects automatically at compile time
let numberss=[] //any

let numbersss : number[]=[]
numbersss[0]=1;
// numbersss[1]='2'
numbersss[1]=2

// numbers.forEach(n=>n.) // gives the methods related to the numbers with typescript functions


// Tuples

//1, 'Sheikh'

let user:[number, string]=[1,'Mosh'];
// user[0]. gives methods related to the numbers with typescript functions and same for user[1] with its string methods
// compiling above will give the regular js array
// user.push(1);

//enums
const small=1
const medium =2
const large=3
//PascalCase

//  when we use enum we dont need to define small, medium and large with const
//when we use const the compiler will generate more optimized code in th js
 const enum Size{Small='s', Medium='m', Large='l'}// by defaut it assign 0,1,2 to the members, if small is 1 then other will increase with it
/*
but  if we set value string then we have to initialize all the value  of the members
*/
// using enums
let mySize:Size=Size.Medium;
console.log(mySize) // output => m



//Functions


// if we dont retuen then the function retuns void 
// when we retun then it becomes of that return type
//  but we should anotate the function on its retun type
function calculateTax(income : number, taxYear=2022) : number {
                                        // the ? makes  it optiona

    if (taxYear < 2022)
    // if ((taxYear || 2022) < 2022) used for or but default argument is better for making optional

    return income * 1.2
    //undefined it will retuns if the if condition is not true
    // we have compiler options for this called noImplicitReturns
    return 1.4
}

calculateTax(10_000)


// object 

let employee :{
 readonly  id:number , // when we add readonly then it makes it unmodifiable
    // name ?:string //making it optional
    name:string,
    retire:(date:Date) => void

} = {
    id :1,
    name:'student',
    retire:(date:Date) => {
        console.log(date)
    }
   
   
}

employee.name='sheikh' // trying to access the name property and giving new value to it 
console.log(employee)
employee.retire(new Date) // accessing and passing new date  to the retire method

// employee.id=0





// Advanced types

// if we wann create another employee object then we have to repeat the employee type anotation structure
// but we should implement DRY and shapes of objects might be different

// type alias

// it gives shape of the employee object
type Employee ={
    readonly  id:number , 
    name:string,
    retire:(date:Date) => void


}

let worker : Employee = {
    id :1,
        name:'student',
        retire:(date:Date) => {
            console.log(date)
        }
}


//Union Types
//  | is used as OR

function kgToLbs(weight:number| string) : number
{
    //narrowing
    if (typeof weight ==='number')
   return weight*2.2

   else{
    return parseInt(weight)*2.2 // takes the number only and stops at string 
   }

}
kgToLbs(10)
console.log(kgToLbs('10kg'))


//Intersection Types


type Draggable ={
    drag:()=>void
}

type Resizable ={
    resize:()=>void
}

type UIWidget = Draggable & Resizable

let textBox : UIWidget ={
    drag:()=>{},
    resize:()=>{}

}



//Literal Types (exact , specific)

type Quantity= 50 | 100

// let quantity : 50 |100 =100  // 50 or 100
let quantity : Quantity =100  // 50 or 100

type Metric = 'cm' | 'inch'

// Nullable TYPES

// working with null values
function greet (name :string | null  | undefined){
    if(name)
    console.log(name.toUpperCase())
    else
    console.log('Hello')
}
// after adding union of null we can pass null value but we cant pass the undefined as it is not a valid value
// to pass undifiend as well you can use the union operator and add the undefined
greet(null) // comes from strict Null checks , if its flase in config then it wont show the null error by defaults
greet(undefined)

// Optional chaining

type Customer ={
    birthday?:Date // making the birthday property optional with ?
}
function getCustomer (id: number) : Customer | null |undefined{
    return id===0 ? null : {birthday:new Date()}
}

let customer =getCustomer(1) // undefined when 0
// if (customer!==null && customer!==undefined)
// we can remote the above statement and use 
// Optional property access operator ?
    // console.log(customer) out is object with date inside
    console.log(customer?.birthday) // accessing the value from the returned object
    console.log(customer?.birthday?.getFullYear()) // THE BIRTHDAY  property might possibly  be undefined so  ? is used


    // Optional element access operator
// useful when dealing with arrays
// if (customer!==null and customer!==undefiend) {
//         customer[0]
//         customer?.[0] alternative of above if statement

//Optional call 

// let log :any=(message :string) => console.log(message)
let log :any=null
log?.('a') // only executes when log is refrencing an actual fucntion other wise we get undefined