function averagePair(arr,num){
    if(arr.length < 2 ){return false}
    target = num *2
    let i = 0
    let j = arr.length -1
    while(i !== j){
        if(arr[i] + arr[j] > target){j--}
        else if(arr[i] + arr[j] < target){i++}
        else{return true}
    }
    return false
}
console.log(averagePair([1,2,3],2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
console.log(averagePair([-1,0,3,4,5,6],4.1))