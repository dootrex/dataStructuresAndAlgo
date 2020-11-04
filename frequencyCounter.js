function sameFreq(num1,num2){
    let first = num1.toString()
    let second = num2.toString()

    if(first.length !== second.length || first.length === 0){
        return false
    }
    let obj1 = {}
    let obj2 = {}

    for(let i = 0;i<first.length;i++){
        obj1[first[i]] = obj1[first[i]] +1
    }
    for(let i = 0;i<second.length;i++){
        obj1[second[i]] = obj1[second[i]] +1
    }
    for (let keys in obj1){
        if(obj1[keys] !== obj2[keys]){return false}
    }
    return true
}
console.log(sameFreq(269,357))