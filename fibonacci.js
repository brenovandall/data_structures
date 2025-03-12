let memo = []
function fibonacci(n) {
    if (memo[n] !== undefined) 
        return memo[n]
    
    if (n === 0 || n === 1) 
        return n
    
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return memo[n]
}