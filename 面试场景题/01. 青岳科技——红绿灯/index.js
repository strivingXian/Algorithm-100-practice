/**
 * 题目描述
 * 
 * 实现一个红绿灯效果
 * 红灯2s 绿灯2s 黄灯1s 红灯2s...
 * 要求使用Promise特性
 */

const lampObj = [
    {
        lamp: '红灯',
        time: 2000
    },{
        lamp: '绿灯',
        time: 2000
    },{
        lamp: '黄灯',
        time: 1000
    },
]
function lamp(index){
    console.log(lampObj[index].lamp)
    new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, lampObj[index].time)
    }).then(() => {
        index <= lamp.length ? lamp(++index) : lamp(0)
    })
}

lamp(0)