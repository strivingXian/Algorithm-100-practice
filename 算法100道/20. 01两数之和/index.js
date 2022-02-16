/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tempIndex
    for(let i = 0; i < nums.length; i++){
        tempIndex = nums.indexOf(target - nums[i])
        if(tempIndex !== -1 && tempIndex !== i){
            return [i, tempIndex]
        }
    }
};

var twoSum2 = function(nums, target) {
    map = new Map()
    for(let i = 0; i < nums.length; i++) {
        x = target - nums[i]
        if(map.has(x)) {
            return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
}

console.log(twoSum([2, 7, 11, 15], 13))