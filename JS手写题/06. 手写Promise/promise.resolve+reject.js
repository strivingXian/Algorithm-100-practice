Promise.myResolve = content => {
    if(Object.prototype.toString.call(content) === '[Object, Promise]'){
        return content
    }else{
        return new Promise(resolve => {
            resolve(content)
        })
    }
}

Promise.myReject = content => {
    if(Object.prototype.toString.call(content) === '[Object, Promise]'){
        return content
    }else{
        return new Promise((resolve, reject) => {
            reject(content)
        })
    }
}

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2')
        resolve(2)
    }, 1000)
})

let promise = Promise.myReject(2)

console.log(promise)
