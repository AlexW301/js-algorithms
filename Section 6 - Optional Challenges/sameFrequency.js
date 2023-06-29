function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }

  num1 = String(num1).split("");
  num2 = String(num2).split("");

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const number of num1) {
    frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1;
  }

  for (const number of num2) {
    frequencyCounter2[number] = (frequencyCounter2[number] || 0) + 1;
  }

  if (String(frequencyCounter1) == String(frequencyCounter2)) {
    return true;
  } else {
    return false;
  }
}

console.log(sameFrequency(182, 281));

// Notes

// Converted to strings at the bottom to compare if equal or not
