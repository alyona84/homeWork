console.log('find')
{
    function myFind(arr, fn) {
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                return arr[i]
            }
        }
        return undefined
    }
    console.log(
        myFind([5, 7, 1, 2, -1, -3], function fn(el) {
            if (el < 3) {
                return myFind
            }

        }))
}

console.log('filter')
function myFilter(arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i])

        }

    }
    return newArr
}

console.log(
    myFilter([1, 55, 8, 7, 10], function fn(el) {
        if (el > 9) {
            return myFilter
        }

    }))
console.log('some')
{
    function mySome(arr, fn) {
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                return true
            }
        }
        return false
    }
    console.log(
        mySome([-5, 1, 2, 5, 7, 9], function fn(el, i, arr) {

            if (el > 5) {
                return mySome
            }

        }
        )
    )
}
console.log("Every")
function myEvery(arr, fn) {
    for (let i = 0; i <= arr.length; i++) {
        if (!fn(arr[i])) {
            return false
        } else {
            return true
        }
    }

}
console.log(
    myEvery([1, 2, 3, 5, 4, 15], function fn(el, i, arr) {
        if (el > 10) {
            return myEvery
        }
    }
    )
)
console.log('map')// Չի աշխատում

function myMap(arr, fn) {

    let arrNew = []
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(fn(arr[i]))

    }
    return arrNew

} console.log(
    myMap([1, 3, 5, 7], function fn(el) {
        el *= el
        return myMap


    }))
    console.log("reduce")// Չի աշխատում
   { function myReduce(arr,initial,fn){
        let i
        let acc
        if(initial===undefined){
            acc=arr[0]
            i=1
        }else{
            acc=initial
            i=0
        }
        for(i;i<arr.length;i++){
            let el=arr[i]
            acc=fn(acc,el,i,arr)
        }
        return acc
    }
    console.log(
    myReduce([1,5,7,-3,15],initial=0,function fn(acc,el,i,arr){
        acc+=el
        return myReduce

    }))
}
    
    


