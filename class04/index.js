// ============ Decesion making in javascript =======
// if
// type casting
// let age = Number(prompt("Enter your age:- "));  // ES5

/*
syntax
if(condition){
    // main code
}
*/
let age = +prompt("Enter your age(only number is allowed):- ");
// if(age>=15 && age<18){
//     console.log("They are ready to be eligible");
// }else if(age>=18 && age <= 50){
//     console.log("Eligible");
// }else if (age>=51 && age<100){
//     console.log("Re Develop your NIC");
// }
// else{
//     console.log("Not Eligible");
// }

// ============ switch ==========
switch(age){
    case 15:
        console.log("age is 15");
        break;
    case 16:
        console.log("age is 16");
        break;
    case 17:
        console.log("age is 17");
        break;
    default:
        alert("Invalid Input !")

}

