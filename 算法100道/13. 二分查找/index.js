function find(nums, target){
    let start = 0
    let end = nums.length - 1
    while(start <= end){
        let index = parseInt((end - start) / 2 + start)
        if(nums[index] < target){
            start = index + 1
        }else if(nums[index] > target){
            end = index - 1
        }else{
            return index
        }
    }
    return -1
}

let arr = [1,3,5,6,12,32,52,69,109,123]
let target = 123

console.log(find(arr, target))