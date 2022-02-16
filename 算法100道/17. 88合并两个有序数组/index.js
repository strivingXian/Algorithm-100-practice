var merge = function(nums1, m, nums2, n){
    for(let i = 0; i < nums1.length; i++){
        if(m){
            if(nums1[i] >= nums2[0]){
                nums1.splice(i, 0, nums2.shift())
                nums1.pop()
            }else{
                m--
            }
        }else{
            nums1[i] = nums2.shift()
        }
    }
    return nums1
}

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]

console.log(merge(nums1, 3, nums2, 3))