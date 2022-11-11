
let upi_inp = document.getElementById("upi_inp");
let card_inp = document.getElementById("card_inp");
let cod_inp = document.getElementById("cod_inp");

window.onload = ()=>{
    upi_inp.style.display = "flex";
    card_inp.style.display = "none";
    cod_inp.style.display = "none";
}

let payment_upi = document.getElementById("payment_upi");
let payment_card = document.getElementById("payment_card");
let payment_cod = document.getElementById("payment_cod");
payment_upi.onclick = ()=>{
    upi_inp.style.display = "flex";
    card_inp.style.display = "none";
    cod_inp.style.display = "none";
}
payment_card.onclick = ()=>{
    upi_inp.style.display = "none";
    card_inp.style.display = "grid";
    cod_inp.style.display = "none";
}
payment_cod.onclick = ()=>{
    cod_inp.style.display = "flex";
    cod_inp.style.justifyContent = "center";
    cod_inp.style.alignSelf = "center";
    upi_inp.style.display = "none";
    card_inp.style.display = "none";
    
}

