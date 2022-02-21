import React from 'react';

export function algorithms(str) {
  let finalStr = '';
  let isConsecutive = false;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 4]) {
      isConsecutive = true;
    } else {
      if (!isConsecutive) {
        finalStr += str[i];
      }
      isConsecutive = false;
    }
  }
  if (!isConsecutive) {
    finalStr += str[str.length - 1];
  }

  //console.log(finalStr);
}
