// OBJECT DESTRUCTURING:
let arr=[10,20,30,40,50];

//Array Destructuring
// let [value1,value2, , num2] = arr;
// console.log(value1,value2,num2);

//Object destructuring
let myobj = {
    fname:"hello",
    lname:"world",
    printName(){
        console.log(`${this.fname} ${this.lname}`);
    }
}

// console.log(myobj.fname);
// console.log(myobj.lname);

// let {fname,lname,printName} = myobj;

// console.log(fname);
// console.log(lname);
// console.log(printName);