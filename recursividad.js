function factorial_rec(num){
    if (num===1) return 1
    return num*factorial_rec(num-1)
}

console.log(factorial_rec(5))