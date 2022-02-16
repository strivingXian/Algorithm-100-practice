function distinct(arr){
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        !newArray.includes(arr[i]) ? newArray.push(arr[i]) : ''
    }
    return newArray
}

console.log(distinct([1, 3, 2, 6, 3, 10, 43, 32, 10, 6]))