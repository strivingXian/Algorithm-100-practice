function HeapSort(arr){
    let heapSize = arr.length
    HeapBuild(arr)

    for(let i = heapSize - 1; i >= 0; i--){
        swap(0, heapSize - 1, arr)
        Heapfiy(--heapSize, arr, 0)
    }
    return arr
}

function HeapBuild(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        Heapfiy(arr.length, arr, i)
    }
}

function Heapfiy(heapSize, arr, i){
    let left = 2*i+1
    let right = 2*i+2

    while(left < heapSize){
        let largest = left < heapSize && arr[right] > arr[left] ? right : left
        if(arr[i] < arr[largest]){
            swap(i, largest, arr)
            i = largest
            left = 2*i+1
            right = 2*i+2
        }else{
            return
        }
    }
}

function swap(i, j, arr){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(HeapSort([4, 6, 8, 1, 6, 3, 0, 29, 12, 5]))