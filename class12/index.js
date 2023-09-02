const displayName = (myname) => {
    console.log("I am " + myname);
}
const clickBtn = document.getElementById("click-btn")
// console.log(clickBtn);

//ES6
// 1. click
// clickBtn.addEventListener("click", displayName()) // function calling
// clickBtn.addEventListener("click", displayName) // function pointing
clickBtn.addEventListener("click", ()=>{
    displayName("ahtesham")
}) // function pointing
// displayName()

// submit
// form handling
const form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const emailText = e.target.email.value
    const passwordText = e.target.password.value
    // console.log(emailText,passwordText);

    // validation
    if (!emailText || !passwordText ){
        alert("Invalid Input !!")
    }else{
        console.log("FORM SUBMITTED SUCCESSFULLY");
        form.reset()

    }
    // e.target.email.value = ""
    // e.target.password.value = ""




})