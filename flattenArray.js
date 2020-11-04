function flattenArray(arr){
    let newArr = []
    for(let i =0; i<arr.length;i++){
        if(Array.isArray(arr)){
            newArr = newArr.concat(flattenArray(arr[i]))
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}