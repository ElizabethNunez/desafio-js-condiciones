let verificar = document.getElementById("verificar")

verificar.addEventListener("click" , () =>{
    let h2 = document.querySelector("h2")
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    let input3 = document.getElementById("input3").value

    input1 = parseInt(input1) || 0
    input2 = parseInt(input2) || 0
    input3 = parseInt(input3) || 0

    let suma = input1 + input2 + input3
    console.log(suma)
    if(suma > 10) {
        h2.innerHTML = "Llevas demasiados stickers"
    }
    else {
        h2.innerHTML = "Llevas " + suma + " stickers"
    }


})