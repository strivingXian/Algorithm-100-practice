let arr = [1, 2, 3, [4, 5, [6, 7], 8, [9, [[10], 11, 12]]]];

/*

function flat(arr){
    let ret = []
    for(let key in arr){
        if(Array.isArray(arr[key])){
            ret = ret.concat(flat(arr[key]))
        }else{
            ret.push(arr[key])
        }
    }
    return ret
}

 */

function flat(arr){
    let ret = []
    for(let key in arr){
        Array.isArray(arr[key]) ? 
            ret = [...ret, ...flat(arr[key])] : 
            ret.push(arr[key])
    }
    return ret
}


