// 1)Write a program that checks if a given element e is in the array a.

const sub = 3;
const arr1 = [5, -4.2, 3, 7];
const aar2 = [5, -4.2, 18, 7];

arr1.find((e) => e === sub) ? console.log("yes") : console.log("no");
aar2.find((e) => e === sub) ? console.log("yes") : console.log("no");

// 2) Write a program that multiplies every positive element of a given array by 2.

const multFunc = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i] * 2);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const arr3 = [-3, 11, 5, 3.4, -8];
console.log(multFunc(arr3));

// 3)Write a program that finds the minimum of a given array and prints out its value and index.

const arr4 = [4, 2, 2, -1, 6];

const findEl = (arr) => {
  const indexEl = Math.min(...arr);
  return indexEl;
};

console.log(arr4.indexOf(findEl(arr4)));
console.log(arr4.findIndex((e) => e > 0));

// 4)Write a program that finds the first element larger than minimum and prints out its value.
const arr5 = [4, 2, 2, -1, 6];

const minEl = findEl(arr5);
console.log(arr5.find((e) => e > minEl));

// 5) Write a program that calculates the sum of positive elements in the array.
const arr6 = [3, 11, -5, -3, 2];

console.log(arr6.filter((el) => el > 0).reduce((a, b) => a + b));

// 6)Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.

const arrayIsSymetric = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
const arr7 = [2, 4, -2, 7, -2, 4, 2];

const arr8 = [2, 3, 2, 81, 3, 2];

console.log(arrayIsSymetric(arr8));
console.log(arrayIsSymetric(arr7));

// 7) Write a program that concatenates two arrays.

console.log(arr7.concat(arr8));

// 8). Write a program that deletes  given element 2 from the array arr8.
console.log(arr8.filter((e) => e !== 2));

// 9) Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.

const insertElement = (el, pos, arr) => {
  if (pos > arr.length) {
    return console.log("Postion doesnt exist!");
  } else {
    arr.splice(pos, 0, el);
    return console.log(arr);
  }
};

insertElement(78, 3, arr4);
insertElement(12, 88, arr8);

// 10)Write an array of months in a year. Using console.log display June, October and January
// from the array.

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function displayMonth(arr, month) {
  let momnthIndex = arr.indexOf(month);

  return console.log(arr[momnthIndex]);
}

displayMonth(monthNames, "January");
displayMonth(monthNames, "June");
displayMonth(monthNames, "October");

// 11) Print all negative elements from the array [2, -4, 5, -2, -11].

let arr9 = [2, -4, 5, -2, -11];

console.log(arr9.filter((e) => e < 0));
