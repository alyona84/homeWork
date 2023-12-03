
console.log("///1///")
/*Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that
its digits product is equal to n.*/
function number(n) {
   
    let art = 1
    for (let i = 10; i < 100; i++) {
        let istr = i + ''
        let k = 0
        for (j = 0; j < istr.length; j++) {
            k = +istr[j]
            art = art * k
        }
        art=1
    }
    if (art === n) {
        console.log(i)
    }
    
number(10)
}              //կիսատ է

console.log("///2///")
//Find the biggest common divisor of two inserted numbers.
function comonDiv(b, a) {
    for (i = 2; i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            console.log(i)
        }
    }

}
comonDiv(12, 21)


{
    console.log("///4///")
    //Enter a positive number. Calculate and print its factorial.
    function comonDiv(a) {
        let factorial = 1
        let i
        for (i = 1; i <= a; i++) {
            factorial = factorial * i
        }
        console.log(factorial)

    }
    comonDiv(4)
}
console.log("///5///")
//Given a number n ( n &gt;= 0 ). Print n Fibonacci number. 
{
    function comonDiv(a) {
        let fib1 = 0
        let fib2 = 1
        let fib = 0
        for (i = 1; i < a; i++) {

            fib = fib1 + fib2
            fib1 = fib2
            fib2 = fib
        }
        console.log(fib1)
    }
    comonDiv(5)
}
{
    console.log("///6///")
    //Given a number n(n & gt; 0 ). Print Fibonacci series up to n.

    function comonDiv(a) {
        let fib1 = 0
        let fib2 = 1
        let fib = 0
        for (i = 1; i <= a; i++) {
            console.log(fib1)
            fib = fib1 + fib2
            fib1 = fib2
            fib2 = fib
        }
    }
    comonDiv(5)
}