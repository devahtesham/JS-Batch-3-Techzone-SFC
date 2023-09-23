/*
    - GET
    - POST
    - PUT
    - DELETE
*/

// fetching GithHub API
    // fetch("url",{})
const fetchApi = ()=>{
    fetch("https://api.github.com/users/devahtesham")
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data);
        })
        .catch((error)=>{console.log(error)})
}
fetchApi()
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputVal = e.target.input.value;
    
    if (!inputVal){
        alert("Required Fields are missing !")
    }else{
        console.log("form is submitted");
        form.reset()
    }
})


