function maxSubarraySum(array, length) {
    if (array.length < length) {
        return null
    }

    let currentSum = 0;
    let maxSum = 0;

    for (let i = 0; i < length; i++) {
        currentSum = currentSum + array[i]
    }

    maxSum = currentSum;

    for (let i = length; i < array.length; i++) {
        currentSum = currentSum - array[i - length] + array[i]
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39