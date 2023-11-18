const toF = document.getElementById(`toF`);
const toC = document.getElementById(`toC`);
const txt = document.getElementById(`txt`);
const input = document.getElementById(`temp`);
const roundoff = document.getElementById(`round`);
let temp;
let result;
// °C × (9/5) + 32, C to F
// (32°F − 32) × 5/9 = 0°C, F to C
function convert(){
    temp = input.value;
    if(toF.checked){
        if(temp === ``){
            txt.textContent = `Please enter a temperature`;
        }
        else if(isNaN(temp)){
            txt.textContent = `Please enter a valid temperature`
        }
        else{
            result = temp * 9/5 + 32;
            if (roundoff.checked) {
                txt.textContent = Math.round(result);
            } else {
                txt.textContent = result;
            }
        }
    }
    else if(toC.checked){
        if(temp === ``){
            txt.textContent = `Please enter a temperature`;
        } 
        else if (isNaN(temp)){
            txt.textContent = `Please enter a valid temperature`
        } 
        else {
            result = (temp - 32) * (5/9);
            if (roundoff.checked) {
                txt.textContent = Math.round(result);
            } else {
                txt.textContent = result;
            }
        }
    }
    else {
        txt.textContent =  `Please select a unit`
    }
}