let arr = [1, 2, 3, [4, 5, [6, 7], 8, [9, [[10], 11, 12]]]];


function flat(arr){
    while(arr.some(item => {
       return Array.isArray(item)
    })){
        arr = [].concat(...arr)
    }
    return arr
}

console.log(flat(arr))