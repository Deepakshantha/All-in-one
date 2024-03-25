let buttton = document.getElementById("getanswer")
buttton.addEventListener("click",finalresult)

function finalresult(){
    console.log('triggered');

    let input0= Number(document.getElementById("input0").value)
    let input2 = Number(document.getElementById("input2").value)
    
    let input1 = document.getElementById("input1").value
    let final_result=0 ;

   
    switch (input1){
        case 'add': {(final_result=input0 + input2) 
            console.log('add');}
        break
        case 'sub': (final_result=input0 - input2)
        break
        case 'multi': (final_result=input0 * input2)
        break
        case 'divide': (final_result=input0/input2)
        break
    } 
    let text = `and your answer is ${final_result}`
    let result = document.getElementById("result")
    result.innerHTML = text

    
}
