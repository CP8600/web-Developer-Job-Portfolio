"use strict";
// function for switch statement
function math() {
  let x = parseInt(document.getElementById("x").value);
  let y = parseInt(document.getElementById("y").value);
  let operator = document.getElementById("operator").value;

  let h2 = document.getElementById("h2");
  let z;

  switch (operator) { //switch statement  to get operator
    case "add":
      z = x + y; // addition
      break;

    case "subtract": //subtraction
      break;

    case "multiply": //multiply
      z = x * y;

      break;

    case "divide": //divide
      z = x / y;
      break;
    case "modulus": //modulus
      z = x % y;
      break;
    case "exponents": //exponents
      z = x **= y;
      break;

    default:
      break;
  }

  h2.textContent = z;
}

let b = ((16 + 4 - 2) / 4) ** (1 * 5); //pemadas
console.log(b);
//function to find grades
let checkGrades = () => {
  let grade = document.getElementById("grade").value;
  let gradeScore = document.getElementById("gradeScore");
  if (grade >= 90) {
    gradeScore.textContent = 'Grade is A'; //if grade is equal or greater than 90
  } else if (grade >= 80) {
    gradeScore.textContent = "Grade is B"; //if grade is equal or greater than 80
  } else if (grade >= 70) {
    gradeScore.textContent = "Grade is C"; //if grade is equal or greater than 70
  } else if (grade >= 60) {
    gradeScore.textContent = "Grade is D"; //if grade is equal or greater than 60
  } else { //if grade is les than 59
    gradeScore.textContent = "Grade is F";
  }
  console.log(grade);
};
//the rest of this is for pemdas and comparisons using =, ==, ===

let a = 3;
let aa = "3";

while (a !== aa) {
  console.log("is not equal to");
  break;
}
let two = 2
console.log(2 == "john"); //is not equal to
console.log(2 == 2) // is equal to
console.log(two = 3) // changes two variable to equal 3
console.log('2' === "2"); // both are same both are strings
console.log('james' === 'john') //both strings but not equal value
console.log('john' === 'john') // both strings and both equal value