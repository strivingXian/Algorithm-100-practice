function FindFirstCommonNode(pHead1, pHead2) {
    // write code here

    if (pHead1 === null || pHead2 === null) {
        return null;
    }

    let listL = pHead1;
    let listS = pHead2;
    let len1 = 0;
    let len2 = 0;
    let diff = 0;

    while (listL.next !== null) {
        listL = listL.next;
        len1++;
    }
    while (listS.next !== null) {
        listS = listS.next;
        len2++;
    }
    if (listL !== listS) {
        return null
    }

    if (len1 >= len2) {
        listL = pHead1;
        listS = pHead2;
        diff = len1 - len2;
    } else {
        listS = pHead1;
        listL = pHead2;
        diff = len2 - len1;
    }
    for (let i = 1; i <= diff; i++) {
        listL = listL.next;
    }
    while (listL !== listS) {
        listL = listL.next;
        listS = listS.next;
    }

    return listL;
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
    next: {
        value: 2,
        next: {
            value: 3,
            next: common
        }
    }
}

console.log(FindFirstCommonNode(a, b));