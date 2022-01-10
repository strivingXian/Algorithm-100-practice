function fun(str) {
    let arrNum = str.split(',')
    let ret = []
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i].indexOf('~') === -1){
            ret.push(Number.parseInt(arrNum[i]))
        }else{
            ret = ret.concat(isHaveX(arrNum[i]))
        }
    }
    sort(ret)
    output(ret)
}

/**
 * 是否存在x,如果不存在返回对应数据
 * 
 * @param {*} str 
 * @returns 
 */
function isHaveX(str){
    let ret = []
    if(str.indexOf('x') === -1){
        let range = str.split('~')
        for(let i = Number.parseInt(range[0]); i <= Number.parseInt(range[1]); i++){
            ret.push(i)
        }
    }else{
        ret = haveX(str)
    }
    return ret
}

/**
 * 获得存在x的式子对应数据
 * @param {*} str 
 * @returns 
 */
function haveX(str){
    let ret = []
    let strArr = str.split('~')
    let stepArr = strArr[1].split('x')
    let startNum = Number.parseInt(strArr[0]), 
        endNum = Number.parseInt(stepArr[0]),
        stepNum = Number.parseInt(stepArr[1])
    for(let i = startNum; i <= endNum; i += stepNum){
        ret.push(i)
    }
    return ret
}

/**
 * 对数组进行排序并去重
 * @param {*} arr 
 */
function sort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] < arr[j - 1]){
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }else if(arr[j] === arr[j - 1]){
                arr.splice(j, 1)
            }
        }
    }
}

/**
 * 打印规则
 * @param {*} arr 
 */
function output(arr){
    let str = arr[0]
    let count = 1
    for(let i = 1; i < arr.length; i++){
        if((arr[i] - arr[i - 1]) === 1 && count < 3){
            str += ',' + arr[i]
            count ++
        } else{
            console.log(str)
            str = arr[i]
            count = 1   
        }
        i === arr.length - 1 ? console.log(str) : ''
    }
}

fun('2,-3~2,2~10x3')