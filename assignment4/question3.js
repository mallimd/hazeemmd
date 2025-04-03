const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Calculate the 7-day SMA
const total = amdPrices.reduce((sum, price) => sum + price, 0);
const sma = total / amdPrices.length;

// Count how many days price > SMA
let count = 0;
for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > sma) {
    count++;
  }
}

console.log(`Number of days AMD was above the 7-day SMA is: ${count}`);