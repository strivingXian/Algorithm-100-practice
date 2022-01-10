
Function.prototype.bind = function(content){
    let _this = this;
    let args = [...arguments].slice(1);
    return function F() {
        // 判断是否被当做构造函数使用
        if(this instanceof F) {
           return _this.apply(this, args.concat([...arguments]))
        }
        return _this.apply(content, args.concat([...arguments]))
     }
}

function demo(name, age){
    this.name = name
    this.age = age
    return this
}

function Use(name, age){
    let bindFun = demo.bind(this, name, age)
    console.log(bindFun(12))
}

let use = new Use('demo', 10)