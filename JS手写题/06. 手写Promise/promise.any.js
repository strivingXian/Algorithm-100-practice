Promise.myAny = (promises) => {
    let result = []
    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(res => {
                resolve(res)
            }).catch(() => {
                if(i === promises.length - 1){
                    reject('AggregateError: All promises were rejected')
                }
            })
        });
    })
}

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise1')
        reject(1)
    }, 2000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2')
        reject(2)
    }, 1000)
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2')
        reject('error')
    }, 3000)
})

let promise = Promise.myAny([promise1, promise2, promise3])
console.log(promise)