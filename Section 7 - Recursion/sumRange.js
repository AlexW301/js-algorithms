function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(3))

// sumrange(3)
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1