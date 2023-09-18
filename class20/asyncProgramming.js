// synchronous behaviour
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// asynchronous behaviour
console.log("1");
console.log("2");
setTimeout(()=>{
    console.log("API ka response ...");
},2000)
console.log("4");
console.log("5");

// we make JS code Asynchronous
/*
    - callback functions   ES5
    - promises              ES6
    - async/await           ES6
*/