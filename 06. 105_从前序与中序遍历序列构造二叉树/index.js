// 二叉树节点
class TreeNode{
    constructor(val){
        this.val = val
        this.left = this.right = null
    }
}

var buildTree = function(before, cont) {
    let root = buildTreeFun(before, cont)
    return root
}



function buildTreeFun(before, cont){
    if(before.length === 1 && cont.length === 1 && before[0] === cont[0]){
        return new TreeNode(before[0])
    }

    let leftCont = {}
    let rightCont = {}
    let leftBefore = {}
    let rightBefore = {}

    for(let i = 0; i < cont.length; i++){
        if(cont[i] === before[0]){

            leftCont = cont.slice(0, i)
            rightCont = cont.slice(i+1, cont.length)
            leftBefore = before.slice(1, 1 + leftCont.length)
            rightBefore = before.slice(1 + leftCont.length, 1 + before.length)

            let leftTree = buildTreeFun(leftBefore, leftCont, 0)
            let rightTree = buildTreeFun(rightBefore, rightCont, 1)

            let root = new TreeNode(before[0])
            root.left = leftTree
            root.right = rightTree
            return root
        }
    }
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))