////////////////### 1 ###//////////////////////////////
//Write the sumSliceArray(arr, first, second) function, which takes the array and two numbers
//(first and second) - the positions of the array elements that must be added.For example,
//if you entered 3 and 5, the 3rd and 5th elements are added.
//The function should throw exceptions if non - numbers are entered, and if one or both of the
//numbers are larger or smaller than the length of the array.Use the appropriate error types in each case.

function sumSliceArray(arr, first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Both positions must be numbers.");
  }

  if (first < 1 || second < 1 || first > arr.length || second > arr.length) {
    throw new RangeError("Positions must be within the range of the array.");
  }

  return arr[first - 1] + arr[second - 1];
}

// Examples
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(sumSliceArray(arr, 3, 5)); // 8

try {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  sumSliceArray(arr, 8, "five");
} catch (e) {
  console.log("Error"); // Error
}

//У цій функції sumSliceArray:

//Спочатку перевіряється, чи є обидва індекси числами.
//Потім перевіряється, чи входять обидва індекси в допустимий діапазон масиву.
//Якщо обидві умови виконуються, то функція повертає суму елементів масиву, розташованих на зазначених позиціях.
//Якщо хоча б одна з умов не виконується, відповідне виключення кидається з відповідним типом помилки (TypeError або RangeError).

/////////////////////////////### 2 ###///////////////////////