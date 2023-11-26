{
    console.log('//1//')
    //1. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

    function threezero(strA) {
        let currA = 0
        let precurrA = 0
        let postcurrA = 0
        for (i = 1; i < strA.length - 2; i++) {
            currA = +strA[i]
            precurrA = +strA[i - 1]
            postcurrA = +strA[i + 1]
            if (currA === 0 && precurrA === 0 && postcurrA === 0) {
                console.log('yes')
            }
        } if (currA !== 0 && precurrA !== 0 && postcurrA !== 0) { ///sxal ka
            console.log('no')
        }
    }
    threezero('145002')
}
{
    console.log('//2//')
    /* 2. nsert a number. Remove all zeros from the number, except the last one and print the
    number. If there are at most one zero, print “Nothing to remove”.*/
    function number(a) {
        debugger
        newNum = ""
        let c = 0
        let digit = 0
        for (i = 0; i <= a.length - 1; i++) {
            digit = +a[i];
            if (digit > 0) {
                newNum += digit
            }
            if (digit === 0) {
                c++
            }
        }
        if (c === 1 || +a === 0) {
            console.log('nothing to remove')
        }
        else if (c > 1) {
            newNum += ""
            console.log(newNum)
        }
    }
    number('1405')
}///kisat e

{
    console.log('//3//')
    /*3.Insert a n positive number. Check number is prime or not. Prime numbers are numbers
    that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are
    2, 3, 5, 7, and 11.*/
    function number(a) {
        let e = +a
        let k = 0
        let d = 0
        for (i = 2; i < e; i++) {
            k = e / i
            d = k - Math.floor(k)
            if (d === 0) {
                console.log('not prime'
                )
                break;
            } else {
                console.log('prime')
                break;
            }
        }
    }

    number('17')
} 
{ //5.Insert two positive integers n and m between 1 and 10. Compute and print n m .
    console.log('//5//')
   
    function numbers(a, b) {
        let result = a ** b
        console.log(result)
    }
    numbers(6, 10)
}