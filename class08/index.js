// Es5
// let arr = new Array("kazim", "hassan", "arif","ammar");

//ES6
let students = ["kazim", "hassan", "arif","ammar"];
// console.log(students[1]);
// let ans = arr.length
// ========= addition(push, unshift, splice)
// students.push("adil")
// students.unshift("adil")

// students.splice(2,0,"adil")      // splice(position,deleteCount,"add")

// ========= remove (pop, shift, splice)
// let el=  students.pop();
// students.pop();
// console.log(el);
// let el = students.shift()
// students.splice(1,2)
// console.log(students);
// console.log(typeof arr);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

// for(let i=0; i<=students.length; i++){
//     console.log(students[i]);
// }

// forEach (loop on array)
// students.forEach(function(element,index){
//     console.log(element,index);
// })

// map  ======> ES6
// let response = students.map(function(element,index){
//     return element+2
// })
// console.log(response);
// console.log(students);

// filter  ======>ES6
let nums1 = [10,20,30,40,50]
let nums2 = [60,70,80,90,100]
// let res = nums.filter(function(element){
//     return element > 40
// })

// concat
// let newArr = nums1.concat(nums2)
// let newArr = [nums1,nums2]

// join
// let newArr = nums1.join("")   // given the final response in string 
// console.log(newArr)

// indexOf
// let myNewArr = ['a','b','c','d','e','a','b','a'];
// console.log(myNewArr.indexOf("a"));

// lastIndexOf
// console.log(myNewArr.lastIndexOf('ajjjk'));

// reduce
// let numsArr = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;

// for(let i=0; i<numsArr.length; i++){
//     sum = numsArr[i]+sum
// }
// console.log(sum);

// to sum array
// let ans = numsArr.reduce(function(prev,next){
//     return prev+next
// },0);
// console.log(ans);

// reverse
// console.log(numsArr.reverse());

// slice
// let myNewArr = ['a','b','c','d','e','a','b','a'];
// console.log(myNewArr.slice(2,7));    // array.slice(startingIndex,endingIndex+1)

// sort
let numsArr = [101,21,6,7,8,9,32,4,5];
let ans = numsArr.sort(function(a,b){
    // return a-b    // ascending order (low to high)
    return b-a   // descending order (low to high)
})
// console.log(ans);

// toString()
// console.log(numsArr.toString());

// =========== ARRAY DESTRUCTURING =======
/*
    to extract values from array with respect to its index/position
*/
// let names = ['ali','kasim','hassan','aslam','arif','kamran'];
// const newAns = names[0]
// console.log(names[0],names[1]); 

// const [a,b, , ,c] = names;
// console.log(a,b,c)

// ========= MULTI DIMENSIONAL ARRAY
let twoDim = [1,2,3,4,5,6,7,8,9,[10,20,30,40]];
let myans = twoDim[9]
myans.push(50)
console.log(twoDim);




