// 二叉树节点
class TreeNode{
    constructor(value){
        this.value = value
        this.left = this.right = null
    }
}

// 构建二叉树
let createTree = function(...nodes){
    let root = new TreeNode(nodes[0])
    let result = [], i = 1
    result.push(root)
    while(result.length != 0){
        let node = result.shift()
        if(node != null){
            if(i < nodes.length){
                result.push(insertLNode(node,nodes[i]));
                result.push(insertRNode(node,nodes[i+1]));
            }
            i+=2
        }
    }
    return root
}

// 插入左节点
let insertLNode = function(root, data){
    if(data != null){
        root.left = new TreeNode(data)
        return root.left
    }
}

// 插入右节点
let insertRNode = function(root, data){
    if(data != null){
        root.right = new TreeNode(data)
        return root.right
    }
}
let maxPathSum = function(root){
    let ret
    getMax(root)
    function getMax(r){
        if(r === null) return 0
        let left = Math.max(0, getMax(r.left))
        let right = Math.max(0, getMax(r.right))
        ret = ret ? Math.max(ret, left + right + r.value) : left + right + r.value
        return Math.max(left, right) + r.value
    }
    return ret
}

let root = createTree(1, 2, 3, 4, 5, null, 6, null, 7)

console.log(maxPathSum(root))