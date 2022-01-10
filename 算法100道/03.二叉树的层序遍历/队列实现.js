var levelOrder = function(root) {
    let result = []
    if (!root) return result
    let queue = [root]

    let res = []
    let items = []
    while (queue.length != 0 || items.length != 0) {
        if (!queue.length) {
            queue = items
            result.push(res)
            items = []
            res = []
        }
        let nowRoot = queue.shift()
        if (nowRoot) {
            res.push(nowRoot.val);
            items.push(nowRoot.left)
            items.push(nowRoot.right)
        }
    }
    return result
};
let root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

console.log(levelOrder(root))