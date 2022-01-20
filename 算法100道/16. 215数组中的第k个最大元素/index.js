/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    // for()
    return nums[k - 1]
};

let nums = [3,2,3,1,5,6,4]
let k = 2
console.log(findKthLargest(nums, k))