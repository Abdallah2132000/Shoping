let username =document.querySelector("#username")
let password =document.querySelector("#password")
let email =document.querySelector("#email")
let registerBtn =document.querySelector("#sign_up")

registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(username.value===""||email.value===""||password.value===""){
    alert("please fill data")}

    else{
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout(function(){
            window.location = "index.html"
        }, 1500 ) 
    }

    }
    
    )