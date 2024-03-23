let username =document.querySelector("#username")
let password =document.querySelector("#password")

let loginBtn =document.querySelector("#sign_in")

let getusername =localStorage.getItem("username")
let getpassword =localStorage.getItem("password")

loginBtn.addEventListener("click" ,function(e){
    e.preventDefault()
    if( username.value===""|| password.value===""){
        alert("please fill data")

    }else{
            if(getusername && getusername.trim() === username.value.trim() && getpassword && getpassword.trim() === password.value){

                setTimeout(function(){
                    window.location = "HOME.html"
                }, 1500 ) ;

            } else{
                alert("please fill data")
            }
        }


})