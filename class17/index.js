//ES5
// let std1 = new Object();

//ES6
// object literals

// object creation 
let std1 = {
    // properties,(combination of key value pair)
    stdId:1,
    stdName:"hassan",
    course:"JS",

    learning(){
        console.log(`${this.stdName} is learning`);
    }
    // learning:function(){

    // }

    // functions/methods
}
// console.log(std1);

// get values from an object 
// std1.learning()
// console.log(std1.stdName);
// console.log(std1["stdName"]);
// console.log(this);

//add
// std1.fees = 5000;
// std1.writing = function(){
//     console.log("hello");
// }

//delete
// delete std1.course
// console.log(std1);

// accessing all the properties and methods
// console.log(std1.stdName,std1.stdId,);

// for(let i=0; i<)

// for of loop  ==> Array (study yourself !)
// for in loop ===> Object

for (let key in std1){
    console.log(key)
    // console.log(std1[key])
}




