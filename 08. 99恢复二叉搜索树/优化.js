/**
 * 
 * 什么是二叉搜索树：二叉搜索树（又称二叉查找树、二叉排序树）。它或者是一颗空树，或者是具有下列性质的二叉树：
 * 若它的左子树不空，则左子树上所有结点的值均小于他的根节点的值；若它的右子树不空，则右子树上所有结点的值均大于
 * 它的根节点的值；他的左、右子树也分别为二叉排序树。
 * 
 * 分析一下：二叉树搜索树的特点就是左子树上的所有节点小于根节点，右子树的所有节点大于根节点。
 * 其左子树和右子树也是二叉搜索树，就莫名的符合递归的思路
 * 
 */

 import {createTree} from '../算法模板/二叉树节点.js'

 let root = createTree(5,3,9,-2147483648,2)
 
 var recoverTree = function(root){
    let pver
    let s = null, t = null
    let tarverse = (rootIn) => {
        rootIn.left ? tarverse(rootIn.left) : ''

        if(pver && rootIn.val < pver.val){
            s === null ? s = pver : ''
            t = rootIn
        }
        pver = rootIn
        rootIn.right ? tarverse(rootIn.right) : ''
    }
    tarverse(root)
    let temp = s.val
    s.val = t.val
    t.val = temp    
    return root
 }

console.log(recoverTree(root))