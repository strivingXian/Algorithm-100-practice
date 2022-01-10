/**
 * 先说说call的核心作用
 * 1. 将函数设为对象的属性
 * 2. 执行和删除这个函数
 * 3. 指定this到函数并传入给定参数执行函数
 * 4. 如果不传参数，默认指向window
 */
Function.prototype.call = function(content){
    content === undefined || content === null ? content = window : ''
    let args = [...arguments].slice(1)
    content.fn = this
    let result = content.fn(...args)
    delete content.fn
    return result
}

function demo(name, age){
    this.name = name
    this.age = age
    return this
}

function Use(name, age){
    console.log(demo.call(this, name, age))
}

let use = new Use('demo', 10)