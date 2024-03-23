let prodactsincart = localStorage.getItem("prodactsincart")
let allprodact = document.querySelector(".prodacts")


if(prodactsincart){
    let item =JSON.parse(prodactsincart) 
    drewcartprodact(item)
}

function drewcartprodact(prodact){
    
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
            <button class="add_to_cart" onclick="removefromcart(${item.id})" > remove from cart </button>
            <i class="far fa-heart"></i>

        </div>    
        

    </div>` })
     
      allprodact.innerHTML = y ;
}
// function deleteitem (id) {

    

//     var index = data.map(function(i){
//         return i.id
        
//     }).indexOf(id);
//     // console.log(index)

//     if(index !==-1){
       
//         data.splice(index ,1);
//         // console.log(data)
//         drew(data);
//     }
    

//     // data.splice(add,1);


// }
// let index =JSON.parse(prodactsincart)
function removefromcart(id){

    // console.log(id)
    
    // prodactsincart.split(id ,1)
    //  index = prodactsincart.map(function(i){
    //     return i.id
    // }).indexOf(id);
    // console.log(index)
    
}