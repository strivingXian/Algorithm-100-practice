/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.maxSize = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const map = this.map
    let value = map.get(key)
    if(value !== undefined){
        map.delete(key)
        map.set(key, value)
    }else{
        value = -1
    }
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const maxSize = this.maxSize
    const map = this.map
    if(map.has(key)){
        map.delete(key)
        map.set(key, value)
    }else{
        map.set(key, value)
    }
    map.size > maxSize ? map.delete(map.keys().next().value) : ''
    return null
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2)
 console.log(obj.put(1,1), obj.put(2,2), obj.get(1), obj.put(3,3), obj.get(2), 
 obj.put(4,4), obj.get(1), obj.get(3), obj.get(4))
