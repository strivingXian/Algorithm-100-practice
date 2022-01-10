/**
 * 
 * 什么是二叉搜索树：二叉搜索树（又称二叉查找树、二叉排序树）。它或者是一颗空树，或者是具有下列性质的二叉树：
 * 若它的左子树不空，则左子树上所有结点的值均小于他的根节点的值；若它的右子树不空，则右子树上所有结点的值均大于
 * 它的根节点的值；他的左、右子树也分别为二叉排序树。
 * 
 * 分析一下：二叉树搜索树的特点就是左子树上的所有节点小于根节点，右子树的所有节点大于根节点。
 * 其左子树和右子树也是二叉搜索树，就莫名的符合递归的思路
 * 
 * 做完发现了问题，题中是说两个节点错误交换这个方案很繁琐，但适合全部打乱的情况
 * 
 */

import {createTree} from '../算法模板/二叉树节点.js'

let root = createTree(1, 3, null, null, 2)

var recoverTree = function(root){
    let arr = []
    let tarverse = (rootIn) => {
        rootIn.left ? tarverse(rootIn.left) : ''
        arr.push(rootIn.val)
        rootIn.right ? tarverse(rootIn.right) : ''
    }
    tarverse(root)
    arr = sort(arr)
    let i = 0
    let change = (rootIn) => {
        rootIn.left ? change(rootIn.left) : ''
        rootIn.val = arr[i]
        i++
        rootIn.right ? change(rootIn.right) : ''
    }
    change(root)
    return root
}

function sort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

recoverTree(root)

