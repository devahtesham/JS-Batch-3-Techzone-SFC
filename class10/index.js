/*
    DOM(Document heading.textContent Model)
    - Dom is a tree like structure of HTML Elements


    Note:- first we will access the target element then perform other things 
    1. querySelector(class/id/tagName) (single element)
    2. querySelectorAll()
    3. getElementById

*/

// =============START: ACCESSING 
    // let heading = document.querySelector("h1");
    // let heading = document.querySelector(".heading-1");
    // let heading = document.querySelector(".heading-1");
    // let heading = document.querySelectorAll(".heading-1");
    // heading.forEach((element)=>{
    //     console.log(element);
    // })
    // console.log(heading);
    // let heading = document.getElementById("heading-1");
    // console.log(heading);

    // const ul = document.getElementById("ul");
    // const box2 = document.getElementById("box-2")
    // console.log(ul.children.length);;
    // console.log(ul.firstElementChild)
    // console.log(ul.lastElementChild)
    // console.log(box2.previousElementSibling);
    // console.log(box2.nextElementSibling);
    // // console.log(box2.nextElementSibling.parentElement.firstElementChild);
    // const ul = document.querySelector("ul");
    // console.log(ul.firstElementChild.nextElementSibling.firstElementChild.parentElement);
// ============= END: ACCESSING 

// ============== START: MODIFY
const heading = document.getElementById("myHeading");

// textContent      // ES5
// innerText        // ES6
// console.log(heading.textContent);
heading.innerText = "Changing Text"
// ============== END: MODIFY




