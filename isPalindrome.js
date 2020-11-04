function isPalindrome(str){
    let arr = str.split('')
    function helper(array){
        if(array.length <= 1){return true}
        if(array.length === 2)return array[0]===array[1];
        if(array[0] === array[array.length-1]){return helper(array.slice(1,-1))}
        return false
    }
    return helper(arr)
}
console.log(isPalindrome('sasas'))
console.log(isPalindrome('fsdjfhjkdisfnjkdsfs'))
console.log(isPalindrome('tacocat'))