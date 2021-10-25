function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    if (pHead1 === null || pHead2 === null) {
        return null;
    }

    let arrL = [];
    let arrS = [];
    let list1 = pHead1;
    let list2 = pHead2;
    let commonNode = null;
    let len = 0;
    let diffLen = 0;

    while (list1 !== null) {
        arrL.push(list1);
        list1 = list1.next;
    }
    while (list2 !== null) {
        arrS.push(list2);
        list2 = list2.next;
    }
    if (arrL.length < arrS.length) {
        let arr = arrL;
        arrL = arrS;
        arrS = arr;
    }

    len = arrL.length;
    diffLen = arrL.length - arrS.length;

    for (let i = len - 1; i >= diffLen; i--) {
        if (arrL[i] === arrS[i - diffLen]) {
            commonNode = arrL[i];
        } else {
            return commonNode;
        }
    }
    return commonNode;

}

let common = {
    value: 6,
    next: {
        value: 7,
        next: null
    }
}

let b = {
    value: 4,
    next: {
        value: 5,
        next: common
    }
}

let a = {
    value: 1,
    next: common
}
console.log(FindFirstCommonNode(a, b));