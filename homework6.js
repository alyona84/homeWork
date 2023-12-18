console.log('1 includes')

function includes(arr, isIncluded, fromElement) {
    for (i = fromElement; i < arr.length; i++) {
        if (arr[i] === isIncluded) {
            return true


        }
    }
    return false
}
includes([1, 2, 3, -1, 5], -1, 3)

console.log('2 charAt')
function charAt(str, charAt) {
    for (i = 0; i <= str.length; i++) {
        if (i === charAt) {
            console.log(str[i])
        }
    }
    console.log("_")
}
charAt('asds', 5)

console.log('3 endsWith')

function endsWith(str, searchingStr, endIndex) {
    let revSerchingStr=""
    for(j=searchingStr.length-1;j>=0;j--){
        revSerchingStr+=searchingStr[j]

    }
    let res = ""
    for (i = endIndex; i >= 0; i--) {
        if (str[i] === " ") {
            for (i = endIndex; i >= 0; i--) {
                res += str[i - 1]
                if (revSerchingStr === res) {
                    return true
                }
            }
        }
    }
    return false
   
}
endsWith('My name is Alyona', 'is', 10)
console.log('4 startsWith')

function endsWith(str, searchingStr, startIndex) {
    debugger
    
    let res = ""
    for (i =startIndex; i<=str.length; i++) {
        if (str[i] === " ") {
            for (i =startIndex; i<=str.length; i++) {
                res += str[i]
                if (res ===searchingStr) {
                    return true
                }
            }
        }
    }
   return false
   
}
endsWith('My name is Alyona', 'My', 0)
console.log('5 slice.1')
function slice(arr, startIndex) {
    debugger
    let newArr = []
    if (startIndex >= 0) {
        for (i = startIndex; i < arr.length; i++) {
            if (i >= startIndex) {
                newArr.push(arr[i])
            }
        }

    }
    else {
        for (i = arr.length; i < arr.length - startIndex; i++) {
            newArr.push(arr[i + startIndex])
        }
    }
    console.log(newArr)
}
slice([9, 7, 3, 5, 6], 3)
console.log('5 slice.2')

function slice(arr, startIndex,endIndex) {
    debugger
    let newArr = []
    if (startIndex >= 0) {
        for (i = startIndex; i <endIndex; i++) {
            if (i >= startIndex) {
                newArr.push(arr[i])
            }
        }

    }
    else {
        for (i = arr.length; i < arr.length - startIndex+endIndex; i++) {
            newArr.push(arr[i + startIndex])
        }
    }
    console.log(newArr)
}
slice([9, 7, 3, 5, 6,7,8], -2,-1 )
console.log('6 indexOf')
function indexOf(arr,index){
    for(i=0;i<arr.length;i++){
    if(arr[i]===index){
    return i
    }
    }
    return-1
    }
    indexOf([7,8,9,19],8)
