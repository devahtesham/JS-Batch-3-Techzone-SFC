// synchronous behaviour
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// asynchronous behaviour
// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("API ka response ...");
// },2000)
// console.log("4");
// console.log("5");

// we make JS code Asynchronous
/*
    - callback functions   ES5
    - promises              ES6
    - async/await           ES6
*/

// =========== Calback function
// Array.forEach(()=>{})

// let employees = [
//     { name: "hassan", designation: "Frontend Dev" },
//     { name: "akbar", designation: "Backend Dev" }
// ]

// add employee

// let newemployee = {
//     name: "ahmed", designation: "designer"
// }

// const addEmployee = (callback) => {
//     setTimeout(() => {
//         employees.push(newemployee);
//         callback()
//     }, 2000)
// }
// // get employee
// const getEmployees = () => {
//     setTimeout(() => {
//         console.log(employees);
//     }, 1000)
// }

// addEmployee(getEmployees)
// getEmployees()

// ================ PROMISES
/*
    - pending
    - fullfill
    - reject
*/

const checkUserStatus = ()=>{
    let promise = new Promise((resolve,reject)=>{
        let isUserLogin = false
        if (isUserLogin){
            resolve("Ok, Good to go !")
        }else{
            reject("Please Login to continue !")
        }
    })
    return promise
}
checkUserStatus().then((response)=>{
    console.log("response",response);
}).catch((error)=>{
    console.log('error',error);
})

// console.log(promise);