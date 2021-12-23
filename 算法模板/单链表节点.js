class ListNode{
    constructor(val, ListNode){
        this.val = val
    }
}

// 构造一个单链表
let createListNode = function(array){
    let p;
    let head;
    for(item in array){
        if(p){
            p.next = new ListNode(item)
            p = p.next
        }else{
            p = new ListNode(item)
            head = p
        }
    }
    return head
}

//   遍历单链表
let traverse = function(head){
    for(let p = head; p != null; p = p.next){
        console.log(p.val)   
    }
}

let traverse2 = function(head){
    head.next ? traverse2(head.next) : ''
    console.log(head)
}

let array = [1, 2, 3, 4, 5, 6, 7]

traverse2(createListNode(array))