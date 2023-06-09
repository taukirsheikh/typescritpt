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
function calculateTax(income : number) : number{

    if (income < 50_000)

    return 0
    //undefined it will retuns if the if condition is not true
    // we have compiler options for this called noImplicitReturns

}