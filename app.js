// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let boofer = 0;
    for (let j = i + 1; j < nums.length; j++) {
      boofer = nums[i] + nums[j];
      if (boofer === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
