/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  }
  if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(king.y - queen.y) === Math.abs(king.x - queen.x)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) {
    return false;
  }
  if (a === b) {
    return c <= a + b;
  }
  if (a === c) {
    return b <= a + c;
  }
  if (b === c) {
    return a <= b + c;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const repeat = (length, symbol) => {
    let str = '';
    for (let i = 0; i < length; i += 1) {
      str += symbol;
    }
    return str;
  };
  let strResult = '';
  strResult += repeat(Math.floor(num / 10), 'X');
  if (num % 10 > 8) {
    strResult += 'IX';
    return strResult;
  }
  if (num % 10 >= 5) {
    strResult += 'V';
  }
  if (num % 5 > 3) {
    strResult += 'IV';
    return strResult;
  }
  strResult += repeat(num % 5, 'I');
  return strResult;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let strResult = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        strResult += 'zero';
        break;
      case '1':
        strResult += 'one';
        break;
      case '2':
        strResult += 'two';
        break;
      case '3':
        strResult += 'three';
        break;
      case '4':
        strResult += 'four';
        break;
      case '5':
        strResult += 'five';
        break;
      case '6':
        strResult += 'six';
        break;
      case '7':
        strResult += 'seven';
        break;
      case '8':
        strResult += 'eight';
        break;
      case '9':
        strResult += 'nine';
        break;
      case ',':
        strResult += 'point';
        break;
      case '.':
        strResult += 'point';
        break;
      case '-':
        strResult += 'minus';
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) {
      strResult += ' ';
    }
  }
  return strResult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = true;
  for (let i = 0, j = str.length - 1; i <= j; i += 1, j -= 1) {
    if (str[i] !== str[j]) {
      result = false;
      break;
    }
  }
  return result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let indexLetter = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      indexLetter = i;
      break;
    }
  }
  return indexLetter;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  let number = num;
  while (number !== 0) {
    if (number % 10 === digit) {
      result = true;
      break;
    }
    number = Math.floor(number / 10);
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (
    let indexBalanceElement = 1;
    indexBalanceElement < arr.length - 1;
    indexBalanceElement += 1
  ) {
    let rightSum = 0;
    let leftSum = 0;
    for (let leftIndex = 0; leftIndex < indexBalanceElement; leftIndex += 1) {
      leftSum += arr[leftIndex];
    }
    for (
      let rightIndex = indexBalanceElement + 1;
      rightIndex < arr.length;
      rightIndex += 1
    ) {
      rightSum += arr[rightIndex];
    }
    if (leftSum === rightSum) {
      return indexBalanceElement;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  let leftSideIndex = 0;
  let rightSideIndex = size - 1;
  let topSideIndex = 0;
  let bottomSideIndex = size - 1;
  let counter = 1;
  while (counter <= size ** 2) {
    for (let i = leftSideIndex; i <= rightSideIndex; i += 1) {
      arr[topSideIndex][i] = counter;
      counter += 1;
    }
    topSideIndex += 1;
    for (let i = topSideIndex; i <= bottomSideIndex; i += 1) {
      arr[i][rightSideIndex] = counter;
      counter += 1;
    }
    rightSideIndex -= 1;
    for (let i = rightSideIndex; i >= leftSideIndex; i -= 1) {
      arr[bottomSideIndex][i] = counter;
      counter += 1;
    }
    bottomSideIndex -= 1;
    for (let i = bottomSideIndex; i >= topSideIndex; i -= 1) {
      arr[i][leftSideIndex] = counter;
      counter += 1;
    }
    leftSideIndex += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arrResult = JSON.parse(JSON.stringify(matrix));
  const resultMatrix = matrix;
  for (let i = 0; i < arrResult.length; i += 1) {
    for (let j = 0; j < arrResult[i].length; j += 1) {
      resultMatrix[j][arrResult.length - 1 - i] = arrResult[i][j];
    }
  }
  return resultMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr) {
  function pushElement(array, element) {
    const resultArr = array;
    if (array.length === 0) {
      resultArr[0] = element;
    } else {
      resultArr[array.length] = element;
    }
  }

  function mergeSortArr(firstArr, secondArr) {
    const resultArr = [];
    let pointerForFirstArr = 0;
    let pointerForSecondArr = 0;
    for (let i = pointerForFirstArr; i < firstArr.length; i += 1) {
      pointerForFirstArr = i;
      for (let j = pointerForSecondArr; j < secondArr.length; j += 1) {
        if (firstArr[i] <= secondArr[j] && i !== firstArr.length - 1) {
          pushElement(resultArr, firstArr[i]);
          break;
        }
        if (
          firstArr[i] <= secondArr[j] &&
          pointerForFirstArr === firstArr.length - 1
        ) {
          pointerForFirstArr += 1;
          pushElement(resultArr, firstArr[i]);
        }
        pushElement(resultArr, secondArr[j]);
        pointerForSecondArr += 1;
      }
      if (
        pointerForSecondArr === secondArr.length &&
        pointerForFirstArr !== firstArr.length
      ) {
        pushElement(resultArr, firstArr[i]);
      }
    }
    return resultArr;
  }

  if (arr.length < 2) {
    return [arr[0]];
  }
  const leftArr = [];
  const rightArr = [];
  for (let l = 0; l < Math.ceil(arr.length / 2); l += 1) {
    pushElement(leftArr, arr[l]);
  }
  for (let r = Math.ceil(arr.length / 2); r < arr.length; r += 1) {
    pushElement(rightArr, arr[r]);
  }
  const leftHalf = sortByAsc(leftArr);
  const rightHalf = sortByAsc(rightArr);
  const arrResultAfterMerge = arr;
  const arrResultMerge = mergeSortArr(leftHalf, rightHalf);
  for (let index = 0; index < arrResultAfterMerge.length; index += 1) {
    arrResultAfterMerge[index] = arrResultMerge[index];
  }
  return arrResultAfterMerge;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function shuffle(string) {
    let oddString = '';
    let evenString = '';
    for (let i = 0; i < string.length; i += 1) {
      if (i % 2 === 0) {
        evenString = `${evenString}${string[i]}`;
      } else {
        oddString = `${oddString}${string[i]}`;
      }
    }
    return `${evenString}${oddString}`;
  }
  let stringForShuffle = str;
  for (let counter = 1; counter <= iterations; counter += 1) {
    stringForShuffle = shuffle(stringForShuffle);
  }
  return stringForShuffle;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arrNum = Array.from(`${number}`, Number);
  const arrOst = [];
  for (let i = arrNum.length - 1; i >= 0; i -= 1) {
    if (arrNum[i] > arrNum[i - 1]) {
      const currentEl = arrNum.pop();
      const nextEl = arrNum.pop();
      arrOst.push(currentEl, nextEl);
      const findElement = arrOst
        .sort((a, b) => a - b)
        .find((el, index) => {
          if (el > nextEl) {
            arrOst.splice(index, 1);
            return true;
          }
          return false;
        });
      arrNum.push(findElement);
      return Number([...arrNum, ...arrOst].join(''));
    }
    arrOst.push(arrNum.pop());
  }
  return -1;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
