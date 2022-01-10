let arr = [1, 3, [3, 4, 12, [21, 34, 4], 2], 10]

function fun1(arr){
    return arr.flat(Infinity)
}

function fun2(arr){
    return arr.reduce((total, item) => {
        total = Array.isArray(item) ? total.concat(...item) : total.concat(item)
        return total
    },[])
}

function fun3(arr){
    let ret = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            ret = ret.concat(fun3(arr[i]))
        }else{
            ret.push(arr[i])
        }
    }
    return ret
}

function fun4(arr) {
    while(arr.some(item => {
        return Array.isArray(item)
    })){
        arr = [].concat(...arr)
    }
    return arr
}

function fun5(arr) {
    let stack = [...arr]
    let ret = []
    while(stack.length){
        let item = stack.pop()
        if(Array.isArray(item)){
            stack.unshift(...item)
        }else{
            ret.push(item)
        }
    }
    return ret
}

function fun(arr){
    arr = fun5(arr)
    return arr
}

console.log(fun(arr))