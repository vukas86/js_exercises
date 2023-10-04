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

console.log(`The sum of the multiples of 3 and 5 is ${sum}`);
