console.log('///1///')
let a =5;
if(a%2===0){
    console.log('even')
}else{
    console.log('odd')
}
{console.log('///2///')
let a =5;
let b=15;
if(a%b===0||b%a===0){
    console.log(1)
}else{
    console.log(0)
}}
{console.log('///3///')
a=1000
b=a%10
c=Math.floor(a/10)//(a-b)/10
if(b>0){
    console.log(""+b+c)
}else{
    console.log(a)
}
}
{
    console.log('///4///')
    let a=1;
    let b=2;
    let c=3;
    let d=4;
    let e=5;
    console.log((a+b+c+d+e)/5)
}
{
    console.log('///5///')
    var n =+prompt();
    var i=0;
    var j=0;
    if(n%2===0 && !Math.floor(n/10)){// ?ինչ զույգ թվի դեպքում i+=1 չի աշխատի
        console.log(i+=1)            //!Math.floor(n/10)-ի պատճառով
    }if(n%3===0 && n%10===1){
        console.log(j+=1)
    }
}