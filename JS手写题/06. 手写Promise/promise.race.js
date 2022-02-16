Promise.myRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
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

let promise = Promise.myRace([promise1, promise2, promise3])
console.log(promise)