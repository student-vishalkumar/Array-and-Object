const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find median age
let medianAge;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[mid - 1] + ages[mid]) / 2;
} else {
    medianAge = ages[mid];
}

// Find average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare the value of (min - average) and (max - average)
const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge}`);
console.log(`Age Range: ${ageRange}`);
console.log(`Min-Average Difference: ${minAvgDiff}`);
console.log(`Max-Average Difference: ${maxAvgDiff}`);
