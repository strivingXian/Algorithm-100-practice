let arr = [1, 2, 3, [4, 5, [6, 7], 8, [9, [[10], 11, 12]]]];


function flat(arr){
    let stack = arr
    let ret = []
    while(stack.length){
        let item = stack.pop()
        if(Array.isArray(item)){
            stack.push(...item)
        }else{
            ret.unshift(item)
        }
    }
    return ret
}

console.log(flat(arr))