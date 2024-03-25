
//for loop

for(let i=1;i<=10;i++){
    console.log("hello");

}

//while loop

i=10
while(i>=1){
    console.log(i);
    i--;
}

//while loop with break statement

while(true){
    let num = Number(prompt("enter a number"))
    if(!isNaN(num))
    break;
}


//continoue statement

for(i=1;i<=10;i++){
    if(i%5==0)
    continue
console.log(i)
}

//for loop in (of method)

let arr = ["sk","pk","ss","pp"]
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let main of arr){
    console.log(main);                        
}













