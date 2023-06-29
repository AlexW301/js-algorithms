function areThereDuplicates(...args) {
  if (args.length < 1) {
    return false;
  }

  let frequencyCounter = {};

  for (const arg of args) {
    frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
  }

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 


// Alternate solution - Multiple Pointers

// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }