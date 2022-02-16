/**
 * Promise.all()方法用于将多个Promise实例包装成一个新的Promise实例。
 * 
 * const a = Promise.all([p1, p2, p3])
 * 
 * 最终a的状态由p1,p2,p3决定
 * 
 * 只有状态都为fulfilled时a的状态才为fulfilled,此时,p1,p2,p3的返回值组成一个数组，传递给p的回调函数
 * 
 * 只要有一个为rejected,a的状态就会变成rejected，此时第一个被rejectd的实力的返回值会被传递给a的回调函数
 * 
 * 如果传入的数组中有不是promise实例的值或者对象，fulfilled状态下会被原本返回
 */

Promise.myAll = (promises) => {
    return new Promise((resolve, reject) => {
        let result = []

        if(promises.length === 0){
            return resolve([])
        }

        promises.forEach((promise, i) => {
            Promise.resolve(promise).then((res) => {
                result[i] = res
                if(i === promises.length - 1){
                    resolve(result)
                }
            }).catch((err) => {
                reject(err)
            })
        });
    })
}

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise1')
        resolve(1)
    }, 2000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2')
        resolve(2)
    }, 1000)
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2')
        reject('error')
    }, 3000)
})
let b = Promise.myAll([promise1, promise2, {a: 2}, promise3])

console.log(b)

