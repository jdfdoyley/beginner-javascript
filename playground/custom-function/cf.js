// Sales Tax = 6%
const SALES_TAX = 0.06;

// Function Definition
function calculateBill(amount) {
  // Function Body
  // return console.log('Running Calculate Bill!');

  return amount * (1 + SALES_TAX);
}

// Function Call
const billTotal = calculateBill(100);
console.log(`Bill Total $${billTotal.toFixed(2)}`);
