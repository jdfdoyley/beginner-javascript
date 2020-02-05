// Function Definition
// function calculateBill(billAmount, taxRate = 0.06) {
// Function Body
// return console.log('Running Calculate Bill!');

//   return billAmount * (1 + taxRate);
// }

// Function Call
// const billTotal = calculateBill(100, 0.13);
// console.log(`Bill Total $${billTotal.toFixed(2)}`);

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name) {
//   return `HEY, ${name.toUpperCase()}!!!`;
// }

// const doctorize = name => `Dr. ${name}`;
// const yell = name => `HEY, ${name.toUpperCase()}!!!`;

// const alert = yell(doctorize('Mark'));
// console.log(alert);

function calculateBill(billAmount, taxRate = 0.13, tip = 0.15) {
  return billAmount * (1 + taxRate + tip);
}

const total = calculateBill(86, undefined, 0.2);
console.log(`Your total is $${total.toFixed(2)}.`);
