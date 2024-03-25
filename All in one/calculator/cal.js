const display = document.getElementById("Display")

function appendtodisplay(input){
    display.value += input;
}



function calculate(){
    try{
        display.value = eval(display.value);
}

catch{
    display.value = "error"
}
}

function cleardisplay(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0,-1);
}