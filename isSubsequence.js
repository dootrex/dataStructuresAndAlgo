function isSubsequence(str1,str2){
    let first = str1.split('')
    let second = str2.split('')
    if(first.length > second.length){return false}
    let i = 0
    let j = 0
    while(i< first.length+1 & j < second.length ){
        if(first[i] === second[j]){
            second[i] = first[i]
            i++
            j++
        }else{j++}
    }
    if(i === first.length){return true}
    else{return false}
}

console.log(isSubsequence('hello', 'hello there general'))
console.log(isSubsequence('abc','acb'))