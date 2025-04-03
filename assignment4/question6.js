// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

//let data = ()
//for price in data:
	//if price < 3:
    //data.push(price)


const sortedPrices = amdPrices.slice().sort((a, b) => a - b);

// lowest 3 prices
const lowestThree = sortedPrices.slice(0, 3);

console.log(`The three lowest prices are ${lowestThree.join(', ')}`);