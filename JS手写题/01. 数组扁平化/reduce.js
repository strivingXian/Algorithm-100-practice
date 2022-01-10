let arr = [1, 2, 3, [4, 5, [6, 7], 8, [9, [[10], 11, 12]]]];

function flat(arr){
    return arr.reduce((total, item) => {
       return total.concat(Array.isArray(item) ? flat(item) : item)
    }, [])
}

console.log(flat(arr))