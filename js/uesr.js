let userInfo = document.querySelector("#user-info") 
let userData = document.querySelector("#user") 
let links = document.querySelector("#links") 


if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex";
    


    userData.innerHTML =localStorage.getItem("username");

}


let logoutbtn = document.querySelector("#logout")
logoutbtn.addEventListener("click" , function (){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="index.html";
    },1500);

 }  )

