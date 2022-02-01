// 3. Do the below programs in arrow functions
// a. Print odd numbers in an array
const odd=()=>{
    let a = [1,2,3,5,6,7,8,9,10,11];
    for (let i=0;i<a.length;i++)
    {
        if (a[i]%2!=0)
        {
            console.log(a[i]);
        }
    }
}
odd();

//b. Convert all the strings to title caps in a string array
const titleCase = () => {
    let b = "hi i am arun"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log(b);
}
titleCase();

//c. Sum of all numbers in an array
const sumofall=()=>{
    let a=[1,2,3,4,5];
    let Sum=0;
        for (let i=0;i<a.length;i++)
        {
        Sum+=a[i];
        }
        console.log(Sum);
}
sumofall();

//d. Return all the prime numbers in an array
const primenum=() => {
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
    }
    primenum();

//e. Return all the palindromes in an array
const palindrome=()=>{
    var a=["arun","eye","guvi", "madam","mam","mom"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }
}
 palindrome();
