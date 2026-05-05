
n_0 = 0
n_1 = 1

console.log(n_0)
console.log(n_1)
     
while (n_1 < 50) {
    
    fib = n_0 + n_1
    n_0 = n_1
    n_1 = fib

    console.log(fib)

}

