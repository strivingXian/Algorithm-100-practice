/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < nums1.length; i++){
        if(m){
            if(nums1[i] > nums2[0]){
                nums1.splice(i, 0, nums2.shift())
                nums1.pop()
            }else{
                m--
            }
        }else{
            nums1[i] = nums2.shift()
        }
    }
};

const arr1 = [4,5,6,0,0,0]
const arr2 = [1,2,3]

merge(arr1, 3, arr2, 4)

console.log(arr1)