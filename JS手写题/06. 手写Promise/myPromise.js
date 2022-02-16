const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = (promise, ret, resolve, reject) => {
    if(promise === ret){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    let called = false
    if(ret !== null && (typeof ret === 'object' || typeof ret === 'function')){
        try{
            let then = ret.then
            if(typeof then === 'function'){
                then.call(ret, arg => {
                    if(called) return
                    called = true
                    resolvePromise(promise, arg, resolve, reject)
                }, err => {
                    if(called) return
                    called = true
                    reject(err)
                })
            }else{
                resolve(ret)
            }
        }catch(e) {
            if(called) return
            called = true
            reject(e)
        }
    }else{
        resolve(ret)
    }
}

class myPromise{
    constructor(executor){
        this.status = PENDING
        this.value = null
        this.reason = null
        this.onResolveCallBacks = []
        this.onRejectCallBacks = []

        let resolve = (value) => {
            if(this.status === PENDING){
                this.status = FULFILLED
                this.value = value
                this.onResolveCallBacks.forEach(fn => fn())
            }
        }
    
        let reject = (reason) => {
            if(this.status === PENDING){
                this.status = REJECTED
                this.reason = reason
                this.onRejectCallBacks.forEach(fn => fn())
            }
        }

        try {
           executor(resolve, reject) 
        } catch(error) {
            reject(error)
        }
    }

    then(onResolveCallBack, onRejectCallBack){
        onResolveCallBack = typeof onResolveCallBack === 'function' ? onResolveCallBack : value => value
        onRejectCallBack = typeof onRejectCallBack === 'function' ? onRejectCallBack : reason => {throw reason}
        
        return new myPromise((resolve, reject) => {
            if(this.status === FULFILLED){
                let ret = onResolveCallBack(this.value)
                resolvePromise(this, ret, resolve, reject)
            }else if(this.status === REJECTED){
                let ret = onRejectCallBack(this.value)
                resolvePromise(this, ret, resolve, reject)
            }else if(this.status === PENDING){
                this.onResolveCallBacks.push(() => {
                    let ret = onResolveCallBack(this.value)
                    resolvePromise(this, ret, resolve, reject)
                })
                this.onRejectCallBacks.push(() => {
                    let ret = this.onRejectCallBack(this.reason)
                    resolvePromise(this, ret, resolve, reject)
                })
            }
        })
    }
}
let a = new myPromise((resolve) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
})

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
  }).then(value => {
    console.log(value)
    return new myPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000)
    })
  }).then(value => {
    console.log(value)
  })