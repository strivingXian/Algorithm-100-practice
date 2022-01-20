function debounce(fn, time = 1000){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(function(){
            fn()
        }, time)
    }
}

let fun = debounce(funRun, 2000)

function funRun(){
    console.log(1)
}