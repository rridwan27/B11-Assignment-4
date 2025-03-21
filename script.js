CODE: TRS_25;

/* Problem 1 */

function calculateVat(price) {
  if (typeof price !== "number") {
    return "invalid";
  }
  const vatRate = 7.5 / 100;
  const vat = price * vatRate;
  return vat;
}

/* console.log(calculateVat(1500)) */

/* Problem 2 */

function validContact(contact) {
  if (typeof contact !== "string") {
    return false;
  }
  if (!contact.startsWith("01")) {
    return false;
  }
  if (contact.length !== 11) {
    return false;
  }
  return true;
}
/*
const contact = "01819234567";
console.log(validContact(contact));
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

function calculateSleepTime(times) {
  if (!times.every((item) => typeof item === "number")) {
    return "invalid";
  }

  let totalSeconds = times.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return { hour: hours, minute: minutes, second: seconds };
}

/*
const times = [1000, 2000, 725];
console.log(calculateSleepTime(times));
*/
