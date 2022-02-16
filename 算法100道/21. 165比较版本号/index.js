/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const version1Arr = version1.split('.')
    const version2Arr = version2.split('.')
    const maxLen = Math.max(version1Arr.length, version2Arr.length)

    // version1Arr = version1Arr.splice(version1Arr.length - 1, 0, )

    for(let i = 0; i < maxLen; i++){
        version1Arr[i] = parseInt(version1Arr[i]) || 0
        version2Arr[i] = parseInt(version2Arr[i]) || 0
        
        if(version1Arr[i] < version2Arr[i]){
            return -1
        }else if(version1Arr[i] > version2Arr[i]){
            return 1
        }
    }

    return 0
};

console.log(compareVersion('1.01.3', '1.001.2'))