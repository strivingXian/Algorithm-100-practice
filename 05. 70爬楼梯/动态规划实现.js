// var climbStairs = function(n) {
//     let ret = new Array()
//     ret[0] = 1
//     ret[1] = 1
//     for(let i = 2; i <= n; i++){
//         ret[i] = ret[i - 1] + ret[i - 2]
//     }
//     return ret[n]
// };

// 空间优化
var climbStairs = function(n) {
    let ret = 1
    let arr = []
    arr[0] = 1
    arr[1] = 1
    for(let i = 2; i <= n; i++){
        ret = arr[0] + arr[1]
        arr[0] = arr[1]
        arr[1] = ret
    }
    return ret
};