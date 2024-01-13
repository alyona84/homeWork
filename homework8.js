{
    console.log('1.while-for')
    function sort(arr) {
        let i = 0
        while (i < arr.length - 1) {

            for (j = 0; j < arr.length - i - 1; j++) {

                if (arr[j] > arr[j + 1]) {
                    let t = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = t

                }

            }
            i++

        }
        return arr
    }
    console.log(sort([9, 8, -7, 6, 5, 4, 0]))
}
{
    console.log('2.while-while')
    function sort(arr) {
        let i = 0
        while (i < arr.length - 1) {
            let j = 0
            while (j < arr.length - i - 1) {
                if (arr[j] > arr[j + 1]) {
                    let t = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = t

                }
                j++
            }
            i++

        }
        return arr
    }
    console.log(sort([9, 8, -7, 6, 5, 4, 0]))
}
{
    console.log('3.for-while')
    function sort(arr) {

        for (i = 0; i < arr.length - 1; i++) {
            let j = 0
            while (j < arr.length - i - 1) {

                if (arr[j] > arr[j + 1]) {


                    let t = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = t

                }
                j++
            }

        }
        return arr
    }
    console.log(sort([9, 8, -7, 6, 5, 4, 0]))
}