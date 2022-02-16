function distinct(arr){
    let len = arr.length
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1)
                len--
                j--
            }
        }
    }
    return arr
}

console.log(distinct([1, 3, 2, 6, 3, 10, 43, 32, 10, 6]))