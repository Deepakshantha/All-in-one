//function declaration

function ispositive(num){
    return num>0
}
console.log(ispositive(-3));

function welcomepage(){
    console.log("welcome to the world best webpage");
}

welcomepage()

console.log(sub(4,5));

function sub(a,b){
    return a-b
}

//default parameters

function main(name="there"){
    console.log("Hi",name);
}
main('shantha')
main()

//recursion function ..  function calling itself

function fact(n){
    if(n==0)
    return  1;
else
return n*fact(n-1);

}

console.log(fact(2));


let list = [1,2,3,4,5,6,7,8,9]
let addsum = function(list) {
    let sum=0
    for(let val of list){
sum += val
    }
    return sum
}

console.log(addsum(list));

//arrow function

let arr = [1,2,3,4,5]
let add = (arr) => {
    let sum=0
    for(let val of arr){
sum += val
    }
    return sum
}

console.log(addsum(arr));

let volume = (l,b,h) => l*b*h
console.log(volume(4,9,6));

console.log("--------------------------");

let morenum = (...args) => {
    let result = 1
    for(let val of args)
        result *= val
        return result;
   
}
console.log(morenum(5,5,5,6,7));




