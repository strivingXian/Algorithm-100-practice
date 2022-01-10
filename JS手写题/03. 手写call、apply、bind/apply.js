
 Function.prototype.apply = function(content){
    content === undefined || content === null ? content = window : ''
    content.fn = this
    let result = arguments[1] ? content.fn(...arguments[1]) : content.fn()
    delete content.fn
    return result
}

function demo(name, age){
    this.name = name
    this.age = age
    return this
}

function Use(name, age){
    console.log(demo.apply(this, [name, age]))
}

let use = new Use('demo', 10)