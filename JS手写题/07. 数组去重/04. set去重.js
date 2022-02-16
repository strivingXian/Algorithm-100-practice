function distinct(arr){
    return [...new Set(arr)]
}

console.log(distinct([1, 3, 2, 6, 3, 10, 43, 32, 10, 6]))