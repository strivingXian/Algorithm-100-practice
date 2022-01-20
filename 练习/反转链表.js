// 迭代法
// var reverseList = function(head){
//     if(!head.val){
//         return head
//     }
//     let p = head
//     let q = p.next
//     p.next = null
//     while(q){
//         let temp = q.next
//         q.next = p
//         p = q
//         q = temp
//     }
//     return p
// }   

// 递归法
var reverseList = function(head){
    if(!head.val){
        return head
    }
    let fzHead = null
    function recurs(nowHead){
        if(nowHead.next){
            recurs(nowHead.next)
        }else{
            fzHead = nowHead
            return
        }
        nowHead.next.next = nowHead
    }
    recurs(head)
    head.next = null
    return fzHead
}

let arr = [1, 3, 6, 7]

class Node{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

function createListNode(arr){
    if(!arr.length){
        return {}
    }
    let head = new Node(arr[0])
    let p = head
    for(let i = 1; i < arr.length; i++){
        let node = new Node(arr[i])
        p.next = node
        p = node
    }
    return head
}

let head = createListNode(arr)

console.log(reverseList(head))