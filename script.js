CODE: TRS_25;

/* Problem 1 */

function calculateVat(amount) {
  if (typeof amount !== "number") {
    return "invalid";
  }
  const vatRate = 7.5 / 100;
  const vat = amount * vatRate;
  return vat;
}

/* console.log(calculateVat(1500)) */

/* Problem 2 */

function validContact(number) {
  if (typeof number !== "string") {
    return false;
  }
  if (!number.startsWith("01")) {
    return false;
  }
  if (number.length !== 11) {
    return false;
  }
  return true;
}
/*
const number = "01819234567";
console.log(validContact(number));
*/

/* Problem 3 */

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return false;
  }

  let pass = 0;
  let fail = 0;

  for (let mark of marks) {
    if (typeof mark !== "number") {
      return false;
    }

    if (mark >= 50) {
      pass++;
    } else {
      fail++;
    }
  }
  return pass > fail;
}

/*
const marks = [55, 75, 41, 33, 0, 87, 91, 30];
console.log(willSuccess(marks));
*/

/* Problem 4 */

function validProposal(person1, person2) {
  if (!person1 || !person2) {
    return "Invalid";
  }

  if (person1.gender === person2.gender) {
    return false;
  }
  if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  }
  return true;
}

/*
console.log(
  validProposal(
    { name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }
  )
);
*/

/* Problem 5 */

function calculateSleepTime(array) {
  if (!array.every((item) => typeof item === "number")) {
    return "invalid";
  }

  let totalSeconds = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return { hour: hours, minute: minutes, second: seconds };
}

/*
const array = [3600, 1800, 4003];
console.log(calculateSleepTime(array));
*/
