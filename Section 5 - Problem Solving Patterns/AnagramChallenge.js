// My Solution

function validAnagram(a, b) {
  let first = {};
  let second = {};

  // If the strings are different lengths skip everything else and return false
  if (a.length !== b.length) {
    return false;
  }

  // Loop over the first string and keys to the object
  for (const letter of a.split("")) {
    if (!first.hasOwnProperty(letter)) {
      first[`${letter}`] = 1;
    } else {
      first[`${letter}`] += 1;
    }
  }

  // Loop over the second string and keys to the object
  for (const letter of b.split("")) {
    if (!second.hasOwnProperty(letter)) {
      second[`${letter}`] = 1;
    } else {
      second[`${letter}`] += 1;
    }
  }

  // Loop through the first object and if any of the keys don't match the second object return false
  for (const [key, value] of Object.entries(first)) {
    if (second[key] !== value) {
      return false;
    }
  }

  // If it makes it through everything return true
  return true;
}

// Teacher Solution

// Tests

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

// console.log(validAnagram("", ""));
// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("awesome", "awesom"));
// console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
// console.log(validAnagram("qwerty", "qeywrt"));
// console.log(validAnagram("texttwisttime", "timetwisttext"));
