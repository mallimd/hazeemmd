const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let totalClose = 0;
for (let i = 0; i < msftData.length; i++) {
  totalClose += msftData[i][3];
}

// Step 2: Calculate average
const averageClose = totalClose / msftData.length;

// Step 3: Output with 2 decimal places
console.log(`Average closing price of MSFT is ${averageClose.toFixed(2)}`);
