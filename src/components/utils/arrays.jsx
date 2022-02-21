import React from 'react';

export function arrays(arr) {
  let modifiedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let digits = arr[i].toString().split('');
    let splittedDigits = digits.map(Number);
    let sumOfSplittedDigits = splittedDigits.reduce((a, b) => a + b, 0);
    modifiedArr.push(sumOfSplittedDigits);
  }

  let oddSums = modifiedArr.filter((number) => number % 2);

  let totalSumOddNumbers = oddSums.reduce((a, b) => a + b, 0);

  //console.log(totalSumOddNumbers)
  return totalSumOddNumbers;
}
