/**
 * Promise.allSettled()方法接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，
 * 并返回一个新的 Promise 对象。只有等到参数数组的所有 Promise 对象都发生状态变更（不管是fulfilled还是rejected），
 * 返回的 Promise 对象才会发生状态变更,一旦发生状态变更，状态总是fulfilled，不会变成rejected
 * 
 * 返回值是一个Promise,result为一个数组对象，按顺序存放了每一个promise的状态和返回值，fulfilled值为value,rejected为reason
 * 
 * 不是promise对象，封装为fulfilled状态的promise,value为其本身值
 */

Promise.myAllSettled = (promises) => {
    let result = []
    return new Promise(resolve => {
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(res => {
                result[i] = {
                    status: 'fulfilled',
                    value: res
                }
            }).catch(err => {
                result[i] = {
                    status: 'rejected',
                    reason: err
                }
            }).finally(err => {
                if(i === promises.length - 1){
                    resolve(result)
                }
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
let promise = Promise.myAllSettled([promise1, promise2, {a: 2}, promise3])

console.log(promise)