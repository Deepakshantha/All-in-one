let buttton = document.getElementById("seeresult")
buttton.addEventListener("click",foodcalorie)

function foodcalorie() {
let input = document.getElementById("input").value
let cal =0 ,fat =0 , sugar = 0

switch(input){
    
                     case 'Biriyani' : fat = 10
                                       cal =20
                                       sugar = 0
                                        break
                    case 'egg rice' : fat = 20
                                       cal = 40
                                       sugar = 0  
                                        break
                    case 'sambar' : fat = 5
                                         cal = 10
                                        sugar = 1 
                                         break
                    case 'veg biriyani' : fat = 50
                                          cal = 56
                                          sugar = 0   
                                          break  
                                                                   

}
let text = `you selected food${input} calori is ${cal} and the fat is${fat} and the sugar content is ${sugar}`
let result = document.getElementById("result")
result.innerHTML = text

}
