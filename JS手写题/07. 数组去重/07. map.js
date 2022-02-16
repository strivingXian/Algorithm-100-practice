function distinct(arr){
    let map = new Map()
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i], 0)
    }
    return Array.from(map.keys())
}

console.log(distinct([1, 3, 2, 6, 3, 10, 43, 32, 10, 6]))
