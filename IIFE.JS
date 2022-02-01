//a. Print odd numbers in an array 
(()=>{
    let a = [1,2,3,5,6,7,8,9,10,11];
    for (let i=0;i<a.length;i++)
    {
        if (a[i] % 2 !=0)
        {
            console.log(a[i]);
        }
    }
})()


// b. Convert all the strings to title caps in a string array
(() => {
    let b = "hi i am arun"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log(b);
})()


//c. Sum of all numbers in an array
(()=>{
    let a=[1,2,3,4,5];
    let Sum=0;
        for (let i=0;i<a.length;i++)
        {
        Sum+=a[i];
        }
        console.log(Sum);
})()


//d. Return all the prime numbers in an array
(() => {
    var arr=[1,2,3,4,5,6,7,8,9,10,11];
    var a=[];
    const prime= function() {
    for(var x of arr){
    var b=0;
    for(var i=2;i<=x/2;i++){ 
    if(x%i==0){ 
    b=1;
    break;
    }
    }
    if(b==0){
    a.push(x)
    }
    }
    return a

    }(arr)
    console.log(prime);
    })()


//e. Return all the palindromes in an array
(()=>{
    var a=["arun","eye","guvi", "madam","mam","mom"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }})()


//f. Return median of two sorted arrays of same size
const median = (a, b) => {
    let c = [...a, ...b].sort((a,b) =>a-b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
}
let a=[1,2,3];
let b=[4,5,6];
console.log(median(a,b));

//g. Remove duplicates from an array
(() => {
    let a=[1,1,5,4,5,2,3,5,3,4,7,8];
    let Duplicate = [...new Set(a)];
    console.log(Duplicate);
})();


//h. Rotate an array by k times
const rotate =(num,k)=>{
    for (let i=0;i<k;i++) {
        num.unshift(num.pop());
    }
    return num;
  }
  let num=[1,2,3,4,5];
  let k=[2];
  console.log(rotate(num,k));