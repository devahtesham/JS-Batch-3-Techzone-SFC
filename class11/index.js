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
    // const heading = document.getElementById("myHeading");
    // update text:
    // textContent      // ES5
    // innerText        // ES6
    // console.log(heading.textContent);
    // heading.innerText = "Changing Text"

    // dynamic element


    // const container = document.querySelector(".container");

    //ES5
    // let text = "I am Heading 2"
    // const h2 = document.createElement("h2");
    // h2.innerText = text;
    // // console.log(h2);

    // container.append(h2)

    //ES6
    // container.innerHTML = "<h2>I am Heading 2</h2>"

    // ========= get Attribute and set Attribute

    // const container = document.querySelector(".container")
    // const ans = container.getAttribute("id");
    // console.log(ans);

    // const ul = document.getElementById("ul");
    // ul.setAttribute("class","ul-class")

    const container = document.querySelector(".container");
    // container.className = "my_new_class"
    // container.setAttribute("class","ul-class")
    // console.log(container);

    // ======= classList
    // container.classList.add("ul-div")
    // container.classList.remove("parent-div");
    // container.classList.toggle()

    // ========= remove   ES5
    // document.getElementById("myHeading").remove();

    // ========= css modification via JS
    const heading = document.getElementById("heading-1");
    heading.style.backgroundColor = "red";
    heading.style.fontSize = "60px"
// ============== END: MODIFY





