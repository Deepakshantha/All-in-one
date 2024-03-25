let arr=["shantha","karthik","sarath","vishwa","saran"]
let main = document.getElementById("enter")

for(i=0;i<arr.length;i++){
let listready = arr[i]
let option = document.createElement("option")
option.innerHTML=listready
main.appendChild(option)
}



