// 1) Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. Print output in console.

let day = "";

switch (day) {
  case 1:
    console.log("pon");
    break;
  case 2:
    console.log("uto");
    break;
  case 3:
    console.log("sre");
    break;
  case 4:
    console.log("cet");
    break;

  default:
    console.log("invalid");
    break;
}

// 2) Write a program that for a 1-7 number input (representing a day in a week) shows if that day
// is a weekday or weekend. All other cases output a message explaining that input must be a
// number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

let dayOfTheWeek = 6;
// dayOfTheWeek = 2;
// dayOfTheWeek = 12;

switch (dayOfTheWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("it's weekday");
    break;

  case 6:
  case 7:
    console.log("it's weekend");
    break;

  default:
    console.log("Input must be between 1 and 7");
    break;
}

// 3) Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//     ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

function makeTheResult(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 != 0) {
        result = num1 / num2;
      } else {
        console.log("Error:Division by zero!");
        return;
      }
      break;

    default:
      console.log("Error operator");
      return;
  }

  console.log("Resulr:", result);
}

makeTheResult(2, 4, "+");
makeTheResult(32, 16, "-");
makeTheResult(0, 56, "/");

// 4)Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

for (let i = 0; i < 15; i++) {
  if (i % 2 === 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}

// 5)Write a program to sum the multiples of 3 and 5 under 1000.

let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

// 5) Write a program to compute the sum and product of an array of integers.
const arr1 = [2, 4, 6, 7, 9];
const arr2 = [2, 6, 86, 0, 19];
const arr3 = [2, 6, 86, -55, 19];

function sumAndProduct(array) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    product *= array[i];
  }

  return { sum, product };
}

sumAndProduct(arr1);
sumAndProduct(arr2);
sumAndProduct(arr3);

//6) Write a program which prints the elements of the following array as a single string.
// let x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];
let arr4 = ["1", "A", "B", "C", "R", true, NaN, undefined];

function printString(array) {
  let newString = "";

  for (let i = 0; i < array.length; i++) {
    newString += array[i];
  }
  return newString;
}

printString(arr4);

// 7) Write a program that prints the elements of the following array.
let arr5 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];

function printElem(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {}
  }
}

printElem(arr5);

// 8) Write a program that outputs the sum of squares of the first 20 numbers.
let suma = 0;
for (let i = 0; i <= 20; i++) {
  suma += i * i;
}

// 10) Write a program that computes average marks of the following students.

const students = [
  { name: "David", marks: 23 },
  { name: "Marko", marks: 58 },
  { name: "Dany", marks: 15 },
  { name: "John", marks: 95 },
  { name: "Thomas", marks: 68 },
];

let totalMarks = 0;

for (let i = 0; i < students.length; i++) {
  totalMarks += students[i].marks;
}

const averageMarks = totalMarks / students.length;

function assessment(array) {
  let grade;

  if (averageMarks < 60) {
    grade = "F";
  } else if (averageMarks < 70) {
    grade = "D";
  } else if (averageMarks < 80) {
    grade = "C";
  } else if (averageMarks < 90) {
    grade = "B";
  } else {
    grade = "A";
  }

  array.map((student) => {
    if (student.marks < Math.round(0.2 * averageMarks)) {
      student.grade = "F";
    } else if (
      student.marks < Math.round(0.3 * averageMarks) &&
      student.marks > Math.round(0.2 * averageMarks)
    ) {
      student.grade = "D";
    } else if (
      student.marks < Math.round(0.4 * averageMarks) &&
      student.marks > Math.round(0.3 * averageMarks)
    ) {
      student.grade = "C";
    } else if (
      student.marks < Math.round(0.5 * averageMarks) &&
      student.marks > Math.round(0.4 * averageMarks)
    ) {
      student.grade = "B";
    } else if (student.marks >= Math.round(0.9 * averageMarks)) {
      student.grade = "A";
    }

    return student;
  });
}

assessment(students);
console.log(students);

// 11) Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(i, "Buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "fizz buzz");
  }
}
