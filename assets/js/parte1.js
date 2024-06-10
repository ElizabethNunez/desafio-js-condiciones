let img = document.querySelector("img")
let border = false;
img.addEventListener("click", () =>{
    if(img.style.border == "") {
        img.style.border = "solid 2px red"
    } 
        else{
        img.style.border = ""
    }
    
})