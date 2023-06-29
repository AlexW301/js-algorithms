function countUniqueValues(arr) {
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  console.log(`There are ${i + 1} unique values`);
}

countUniqueValues([1, 1, 1, 3, 3, 4, 5, 6, 6, 6]);
