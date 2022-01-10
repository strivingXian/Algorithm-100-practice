function clone(target, map = new Map){
    if(Object.prototype.isPrototypeOf(target) && typeof target !== 'function'){
        let cloneTarget = Array.isArray(target) ? [] : {}
        let mapTarget = map.get(target)
        if(mapTarget)
            return mapTarget
        map.set(target, cloneTarget)
        Object.setPrototypeOf(cloneTarget, Object.getPrototypeOf(target))
        for(let key in target){
            target.hasOwnProperty(key) ? cloneTarget[key] = clone(target[key], map) : ''
        }
        return cloneTarget
    }else{
        return target
    }
}

let Person = function(name, age){
    this.name = name
    this.age = age
}
let person = new Person()
let man = Object.create(person)
man.game = 'wu'
let objCreate = Object.create({name: 'name'})
objCreate.self = 'self'

let obj = {
    a: man,
    n: {
        a: objCreate,
        c: null
    },
    m: {
        a: {
            f: 'er'
        }
    },
    g: function fun() {
        return 2
    }
}

obj.obj = obj

let copy = clone(obj)

obj.a.game = 111

console.log(copy)
console.log(obj)