let button = document.getElementById("myresult")
button.addEventListener("click",output)
 
function output(){
let Qualification = document.querySelector('input[name="choose"]:checked').value
console.log(Qualification);
let final_result=0 ;
 
switch (Qualification){
    case 'UG': (final_result=" Congrats You eligible for this work")
    break
    case 'PG': (final_result="You only eligible for operator")
    break
    case 'TW': (final_result="You only eligible for stack clear man")
    break
    case 'LE': (final_result="you only eligible for writer")
    break
    case 'TN': (final_result=" Sorry! You not eligible for this work")
    break
}
 
let text=`Note :${final_result}`
let result=document.getElementById("result")
result.innerHTML=text
 
}