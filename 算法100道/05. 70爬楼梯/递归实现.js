var climbStairs = function(n) {
    if(n == 0 || n == 1) return 1
    let n1 = climbStairs(n - 1)
    let n2 = climbStairs(n - 2)
    return n1 + n2
};

console.log(climbStairs(10))