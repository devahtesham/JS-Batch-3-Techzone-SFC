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
let newArr = nums1.join("")
console.log(newArr)



