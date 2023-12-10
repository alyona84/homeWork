//1. Given a string. Check whether the string is palindrome or not.

function palindrome(n){
    let res=""
    
    for(i=n.length-1;i>=0;i--){
    res+=n[i]
    
    }
    if(res===n){
    console.log("yes")
    }else{console.log("No")}
    }
    palindrome("assa")



   // 3. Insert a string. Create new string which is the mirror reverse of the inserted one around
   // its center.
   {

function halfReverce(string) {
    let s = ''
    let v = ''

    for (i = 0; i < string.length / 2; i++) {
        s += string[i]
        v += string[string.length / 2 + i]

    }

    console.log(v + s)
}
halfReverce('stranger')}
//2 Given a string and symbols. Change first symbol by the second one in the string.
{
function changeLetter(string,a,b){
    let newString=''
    let e=''
    for(i=0;i<string.length;i++) {
      newString+=e
        e=string[i]
        if(e===a){
            newString+=b

        }
    }
    console.log(newString)
 }changeLetter('The results are not recorded yet', 't','w')
} 
{
//5 Given an object. Invert it (keys become values and values become keys).
function invert(obj){

     for( let i in obj){
        console.log(i)
     }

}
invert({ a: '1', b: '2' })
}
//4. Print the following number pattern: function will take argument (in this case it is 5)

function tarsTonacar(a) {
    let k = ''
    let c = 0

    for (i = 1; i <= a; i++) {
        k += '' + i
                    
       
        if (c > 0) {
         
            
            c = c - 1
        }
        console.log(k)
    } 

   
}   

tarsTonacar(5)