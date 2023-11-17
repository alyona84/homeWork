//  1.Given a number print its digits count. Use both loops (for, while)
    {console.log("//1.1//")
    let a=1234
    let c=0
    for(let n = a;a!==0;a=(a-a%10)/10){
        e=a%10
        c++
       
    }
    console.log(c)
}
{console.log("//1.2//")
let a=1234
let c=0
while (a!==0){
    a=(a-a%10)/10
    e=a%10
    c++
   
}
console.log(c)}
//  2.Count numbers of digit 9 in a number. Use both loops (for, while)
{console.log("//2.1//")
    let a=129939994
    let c=0
    for(let n = a;a!==0;a=(a-a%10)/10){
        e=a%10
        if(e===9){
            c++
        }
       
    }
    console.log(c)
}
{console.log("//2.2//")
    let a=1299939994
    let c=0
    while(a!==0/10){
        a=(a-a%10)/10
        e=a%10
        if(e===9){
            c++
        }
       
    }
    console.log(c)
}
{// Given two numbers. Print ony odd numbers between that numbers.
    console.log('///3///')
    let a=11
    let b=21
    for(let i=a+1;i<b;i++){
        if(i%2===1){
            console.log(i)
        }
    }

}
//Given a number as input, insert dashes (-) between each two even numbers.
console.log('///4///')
let a=223568
a=''+a
let b='-'
let res=''
for(let i=0;i<a.length;i++){
e=a[i]
if(a[i]%2===0 && a[i+1]%2===0){
res=res+a[i]+b

}else{res=res+a[i]}

}
console.log(res)
//Given a positive number. Print it in reverse order.
{console.log('///5///')
let a=1234
let newA=''
for(let n=a;a!==0;a=(a-a%10)/10){
    e=a%10
    newA=newA+e
   
}
console.log(newA)

}



