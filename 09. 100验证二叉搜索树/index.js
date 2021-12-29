import {createTree} from '../算法模板/二叉树节点.js'

let root = createTree(5,3,9,-2147483648,2)

var isValidBST = function(root){
   let pver
   let ret = true
   let tarverse = (rootIn) => {
       rootIn.left ? tarverse(rootIn.left) : ''

       if(pver && rootIn.val <= pver.val){
           ret = false
       }
       pver = rootIn
       rootIn.right ? tarverse(rootIn.right) : ''
   }
   tarverse(root)
   return ret
}

console.log(isValidBST(root))