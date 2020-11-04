function areThereDuplicates(...args){
    let arr = [...args]
    if(arr.length < 2){return false}
    let check = {}
    for(let i = 0; i<arr.length; i++){
        check[arr[i]] = (check[check[i]] || 0) + 1    
    }
    for(let key in check){
        if(check[key]>1){
            return true
        }
    }
    console.log(check)
    return false
}
console.log(areThereDuplicates('a','k','f','e'))
console.log(areThereDuplicates(1,5,3,6,3,9,6))