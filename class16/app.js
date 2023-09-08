let myName = "ahtesham";
let num = 10;
let arr=["haris","ahsan","shamiq"]

// add data on local storage
// window.localStorage
// localStorage.setItem("data",myName)
// localStorage.setItem("data",myName)
// localStorage.setItem("num",num)

// localStorage.setItem("students",JSON.stringify(arr))


//get

let myData = JSON.parse(localStorage.getItem("students"));
// let myData = localStorage.getItem("data");
console.log(myData);

// remove
// localStorage.removeItem("num")
localStorage.clear()