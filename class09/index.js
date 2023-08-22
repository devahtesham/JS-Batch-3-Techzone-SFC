/*
    lines of code place in a block once and utilize multiple times 
    - code reuse
    - to avoid code duplication

   - simple function                // ES5
   - function expression            // ES6
   - arrow/flat arrow function      // ES6

STEPS:
    1. function declaration
    2. function body
    3. function calling
*/

//simple function
// function sumNums(){   // declaration
//     // body
//     let num1 = 5;
//     let num2 = 5;
//     console.log(num1+num2);
// }

// sumNums(){}   // function declare
// sumNums()   // function call



// sumNums() 



// sumNums() 

// function expression
// let numFunc = function sumNums(){   // declaration
//     // body
//     let num1 = 5;
//     let num2 = 5;
//     console.log(num1+num2);
// }
// numFunc()

//arrow function
// let sumNums = ()=>{   // declaration
//     // body
//     let num1 = 5;
//     let num2 = 5;
//     console.log(num1+num2);
// }
// sumNums()

// re declaration of function in using let and const is not allowed

// ====== parameter and arguements
// let sumNums = (num1,num2)=>{   // declaration    parameters
//     console.log(num1);
//     console.log(num2);
//     // body
//     // let num1 = a;
//     // let num2 = b;
//     // console.log(num1+num2);
// }
// sumNums(5,10)  // arguements

// ============ return
// - terminate code and through response outside the function or at function calling time
// let sumNums = (num1,num2)=>{   // declaration    // parameters
//     // console.log(num1);
//     // console.log(num2);
//     let res = num1+num2
//     return res
//     // body
//     // let num1 = a;
//     // let num2 = b;
//     // console.log(num1+num2);
// }
// let ans =  sumNums(10,10)

// let newum = 20 + ans
// console.log(newum);

// lambda function
let sumNums = (num1,num2) => num1+num2;
let ans = sumNums(10,10);
console.log(ans);









