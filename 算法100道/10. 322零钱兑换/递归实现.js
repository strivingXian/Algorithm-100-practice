/**
 * 
 * 遍历多叉树的思路，将每到一个节点遍历所有硬币情况，记录当前硬币兑换数与余额。
 * 当不可兑换的情况出现不用处理，如果兑换成功余额为0，则判断当前最小次数与当前层的count谁最小
 * 如果当前最小次数小则不处理，如果count小，说明当前方案小于之前的所有方案，替换最小次数ret
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if(!coins.length || !amount) return 0
    let ret
    for(let coin of coins){
        exchange(coin, amount, 0)
    }
    function exchange(coin ,amount, count){
        count++
        let balance;
        if(amount - coin < 0){
            return -1
        }else if(amount - coin === 0){
            ret =  ret ? Math.min(ret, count) : count
            return 0
        }
        for(let item of coins){
            balance = exchange(item, amount - coin, count)
        }
    }
    return ret ? ret : -1
};
console.log(coinChange([1, 2, 5], 100))