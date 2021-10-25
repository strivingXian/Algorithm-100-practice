/* 
    描述：
    输入一个长度为n链表，反转链表后，输出新链表的表头。
    数据范围： n≤1000
    要求：空间复杂度 O(1)，时间复杂度 O(n) 。

    如当输入链表{1,2,3}时，
    经反转后，原链表变为{3,2,1}，所以对应的输出为{3,2,1}。
*/
function ReverseList(pHead) {
    if (pHead === null) {
        return null;
    }
    let head = pHead;
    let last

    function reverse(pNode) {
        if (pNode.next === null) {
            last = pNode
            return pNode
        } else {
            let node = reverse(pNode.next)
            node.next = pNode
            if (head === pNode) {
                pNode.next = null
                return last;
            } else {
                return pNode
            }
        }
    }
    return reverse(head)
}

const obj = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

ReverseList(obj)