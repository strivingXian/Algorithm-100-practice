function distinct(arr){
    let newArr = []
    arr.sort((i, j) => {
        if(i < j){
            return -1
        }else if(i > j){
            return 1
        }
        return 0
    })
    for(let i = 0; i < arr.length; i++){
        arr[i] !== arr[i + 1] ? newArr.push(arr[i]) : ''
    }
    return newArr
}

console.log(distinct([1, 3, 2, 6, 3, 10, 43, 32, 10, 6]))