document.querySelector("#password1").value 

let verificar = document.getElementById("verificar")

verificar.addEventListener("click" , () =>{
    let h2 = document.querySelector("h2")
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let password3 = document.getElementById("password3").value;

    let contraseña = password1 + password2 + password3;

    if(contraseña === "911") {
        h2.innerHTML = "password 1 correcto"
    }
    else if (contraseña ==="714") {
        h2.innerHTML = "password 2 correcto"   
    }
    else {
        h2.innerHTML = "password incorrecto"
    }

});