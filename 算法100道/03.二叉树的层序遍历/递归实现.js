var levelOrder = function(root) {
    if (root === null)
        return []
    let result = [];
    let deep = 0;
    recursion(root);

    function recursion(root) {
        deep++;
        if (result[deep - 1])
            result[deep - 1].push(root)
        else
            result[deep - 1] = [root]
        if (root.left != null)
            recursion(root.left)
        if (root.right !== null)
            recursion(root.right)
        deep--
        return
    }
    return result;

};

let root = {
    value: 3,
    left: {
        value: 9,
        left: null,
        right: null
    },
    right: {
        value: 20,
        left: {
            value: 15,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
}

console.log(levelOrder(root))