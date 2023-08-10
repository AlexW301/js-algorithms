function isSubsequence(stringA, stringB) {
    let i = 0;
    let j = 0;
    
    while(j < stringB.length) {
        if(stringA[i] === stringB[j]) {
            i++
            j = 0
        } else {
            j++
        }
    }

    if(i === stringA.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isSubsequence("siung", "usting"))