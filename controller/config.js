// Calculator App 3
const display = document.getElementById("getInput");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function del(){
    display.value = display.value.toString().slice(0, -1);
}
function calculate(){
    display.value = eval(display.value);
}