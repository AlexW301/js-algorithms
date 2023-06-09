function averagePair(arr, target) {
  if (arr.length < 1) {
    return false;
  }
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
    if ((arr[pointer1] + arr[pointer2]) / 2 === target) {
      return true;
    } else if ((arr[pointer1] + arr[pointer2]) / 2 < target) {
      pointer1++;
    } else if ((arr[pointer1] + arr[pointer2]) / 2 > target) {
      pointer2--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
