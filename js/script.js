// localStorage.setItem("first car","bmw")
// console.log(localStorage.getItem("first car"))

// localStorage.setItem("first car2","bmw2")
// localStorage.removeItem("first car2")

let userInfo = document.querySelector("#user-info") 
let userData = document.querySelector("#user") 
let links = document.querySelector("#links") 


if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    // userDat.style.text_decoration ="none"


    userData.innerHTML =localStorage.getItem("username")

}


let logoutbtn = document.querySelector("#logout")
logoutbtn.addEventListener("click" , function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="index.html";
    },1500)

 }  )



// ...................................

let allprodact = document.querySelector(".prodacts")
let prodact =[
    {
        id:1,
        color:"red",
        title:"ONE DAY 1",
        urlimg:"img/1.jpg"
    },
    {
        id:2,
        color:"yelow",
        title:"asd",
        urlimg:"img/2.jpg"
    },
    {
        id:3,
        color:"blue",
        title:"fahd",
        urlimg:"img/3.jpg"
    },
    {
        id:4,
        color:"green",
        title:"asdasd",
        urlimg:"img/4.webp"
    }
    

] 

function drewItems(){

    let y = prodact.map( (item)=> {
        return `

    <div class="prodact_itme">  
        <img class="prodact_item_img" src="${item.urlimg}" alt="" >
        <div class="prodact_item_desc">
            <h2>${item.title}</h2>
            <p>that one task please help me</p>
            <span>${item.color}:1</span>
        </div>
        <div class="prodact_itme_action">
            <button class="add_to_cart" onclick="addtocard(${item.id})" >add to cart</button>
            <i class="far fa-heart"></i>

        </div>    
        

    </div>` })
     
      allprodact.innerHTML = y 
}

drewItems()

// ...........
let cartdiv = document.querySelector(".cart_prodacts div")

let counter =document.querySelector(".badge")



let addeditem =localStorage.getItem("prodactsincart") ? JSON.parse(localStorage.getItem("prodactsincart")) :[];
    // addeditem =[]
    if(addeditem){
        addeditem.map( item => {
            cartdiv.innerHTML += `<p>${item.title}</p>`

        })
        counter.style.display="block";
        counter.innerHTML = addeditem.length
    }



    if(localStorage.getItem=("username")){
    // e.preventDefault()
    function addtocard(id){
        let choosenitem =prodact.find((item)=>item.id===id); 
        cartdiv.innerHTML += `<p>${choosenitem.title}</p>`  

        localStorage.setItem("prodactsincart",JSON.stringify(addeditem)  )
        addeditem =[...addeditem ,choosenitem]

        let cardlength = document.querySelectorAll(".cart_prodacts div p")
        counter.style.display="block";
        counter.innerHTML=cardlength.length
    
    } 
}else{
    window.location="HOME.html"
}





let shoppindcarticon =document.querySelector(".shopping_cart")
let cart_prodacts =document.querySelector(".cart_prodacts") 
shoppindcarticon.addEventListener("click", opencart)

function opencart(){
    if(cartdiv.innerHTML !="" ){
        if(cart_prodacts.style.display=="block"){
            cart_prodacts.style.display="none"
        }else{cart_prodacts.style.display="block"}
    }
}

// let counter =document.querySelector(".badge")

// function checkitem(){
//     if(cartdiv.innerHTML !=""){
//         counter.style.display=="block"
//         return cartdiv.length
//     }

//     counter.innerHTML = checkitem 
// }
// checkitem()