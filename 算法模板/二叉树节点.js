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

// 递归遍历
function tarverse(root){
    // 前序遍历
    root.left?tarverse(root.left):''
    //中序遍历
    root.right?tarverse(root.right):''
    //后序遍历
    console.log(root)

}
let root = createTree(1,2,4,23,null,23,45,3,124,346,null,1,0,124,null)

tarverse(root)