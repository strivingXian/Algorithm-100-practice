/**
 * 滑动窗口写法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = end = maxLen = 0
    for(let i = 0; i < s.length; i++){
        let index = s.indexOf(s[i], start)
        if(index !== -1 && index < end){
            end++
            start = index + 1
        }else{
            end++
        }
        maxLen < end - start ? maxLen = end - start : ''
    }
    return maxLen
};

// 新字符串承接子串
// var lengthOfLongestSubstring = function(s) {
//     let retStr = ''
//     let maxLen = 0
//     for(let i = 0; i < s.length; i++){
//         let index = retStr.indexOf(s[i])
//         if(index !== -1){
//             retStr+=s[i]
//             retStr = retStr.slice(index + 1, retStr.length)
//         }else{
//             retStr+=s[i]
//         }
//         maxLen < retStr.length ? maxLen = retStr.length : ''
//     }
//     return maxLen
// };

let str = "abcabcbb"
console.log(lengthOfLongestSubstring(str))