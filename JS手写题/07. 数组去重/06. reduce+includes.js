function distinct(arr){
    return arr.reduce((res, item) => {
        res.includes(item) ? '' : res.push(item)
        return res
    }, [])
}

console.log(distinct([1, 3, 2, 6, 3, 10, 43, 32, 10, 6]))