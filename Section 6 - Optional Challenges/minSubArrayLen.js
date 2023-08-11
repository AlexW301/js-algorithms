function minSubArrayLen(array, targetSum) {
    let minLength = Infinity;
    let windowStart = 0;
    let windowSum = 0;

    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        windowSum += array[windowEnd]

        while (windowSum >= targetSum) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1)
            windowSum -= array[windowStart]
            windowStart++
        }
    }

    return minLength !== Infinity ? minLength : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 for [4, 3]