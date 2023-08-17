function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5))
// 3 * 2 * 1