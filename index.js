const input = document.getElementById("teminput");
const outputlabel = document.getElementById("outputlabel");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const form = document.getElementById("Temform");
let temp;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    convert();
});


function convert(){
    temp = Number(input.value);
    if(toFah.checked){
        temp = temp * 9 / 5 + 32;
        outputlabel.textContent =  temp.toFixed(1) + "°F";
    }else if(toCel.checked){
        temp = (temp - 32) * (5 / 9);
        outputlabel.textContent = temp.toFixed(1) + "°C";
    }else{
        outputlabel.textContent = "Select one unit";
    }
}