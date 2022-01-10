function FindFirstCommonNode(pHead1, pHead2) {
    if (pHead1 === null || pHead2 === null) {
        return null
    }
    // write code here
    let plist1 = pHead1;
    let plist2 = pHead2;
    while (plist1 !== plist2) {
        plist1 = plist1 ? plist1.next : pHead2;
        plist2 = plist2 ? plist2.next : pHead1;
    }
    return plist1;
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