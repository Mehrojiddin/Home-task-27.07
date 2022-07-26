

// function fuctorial(a) {
//     if (a==1){  
// return 1
// }

// else 
// return a * fuctorial(a-2)
// }

// console.log(fuctorial(9));



// Task 2
function fib(a) {
    if (a<0){  
return Math.abs(a)
}
if(a==0){
    return 1
}

else 
return (a-2)+fib(a-1)
}

console.log(fib(8));