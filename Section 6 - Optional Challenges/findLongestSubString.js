function findLongestSubstring(string) {
    const stringArr = string.split("");
    let longestUniqueVals = [];
    let uniqueVals = [];

    for (let i = 0; i < stringArr.length; i++) {
        const index = uniqueVals.findIndex((letter) => letter === stringArr[i])

        if (index !== -1) {
            uniqueVals.splice(0, index + 1);
        }

        uniqueVals.push(stringArr[i]);

        if (uniqueVals.length >= longestUniqueVals.length) {
            longestUniqueVals = [...uniqueVals]
        }
    }

    return longestUniqueVals.length;
}

console.log(findLongestSubstring("rithmschool"))
console.log(findLongestSubstring("thisishowwedoit"))
console.log(findLongestSubstring("thecatinthehat"))

