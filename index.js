function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/
function hasTargetSum(array, target) {
  // Create a set to store the numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (const number of array) {
    // Calculate the complement
    const complement = target - number;

    // Check if the complement is already in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair is found, return false
  return false;
}

// Test cases to verify the solution
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([-7, 10, 4, 8], 3)); // true
console.log(hasTargetSum([1, 2, 3, 4], 5)); // true
console.log(hasTargetSum([2, 2, 3, 3], 4)); // true
console.log(hasTargetSum([4], 4)); // false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
