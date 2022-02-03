//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
function addfive(a,b,c){
    a=a+5;
    b=b+5;
    c=c+5;
    console.log(a,b,c);
    return +5
}
addfive(5,0,-5);

//Fill in your code that takes an number minutes and converts it to seconds.
function toSeconds(mins) {
    return mins*60
}
var sec = toSeconds(5)
var sec1 = toSeconds(3)
var sec2 = toSeconds(2)
console.log(sec)
console.log(sec1)
console.log(sec2)

//Create a function that takes a string and returns it as an integer.
function toInteger(mystr) {
    return Number(mystr)
}
var mystr = toInteger("6")
var mystr1 = toInteger("1000")
var mystr2 = toInteger("12")
console.log(mystr)
console.log(mystr1)
console.log(mystr2)

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myNextint = nextNumber(0)
var myNextint1 = nextNumber(9)
var myNextint2 = nextNumber(-3)
function nextNumber(myint) {
    return myint+1
}
console.log(myNextint)
console.log(myNextint1)
console.log(myNextint2)

//Create a function that takes an array and returns the first element
var data = getFirstElement([1,2,3])
var data1 = getFirstElement([80,5,100])
var data2 = getFirstElement([-500,0,50])
function getFirstElement(arr) {
    return arr[0]
}
console.log(data)
console.log(data1)
console.log(data2)

//Write a function that converts hours into seconds
var arr = [2, 10, 24];
function hourToSeconds(arr) {
    for(i=0;i<arr.length;i++){
    arr[i] = 3600*arr[i];
    }
    return arr
    }
    var data = hourToSeconds(arr)
    console.log(data);

//Create a function that takes height and width and finds the perimeter of a rectangle.
var perimeter = findPerimeter(6,7)
var perimeter1 = findPerimeter(20,10)
var perimeter2 = findPerimeter(2,9)
function findPerimeter(num1,num2) {
    return 2* (num1+num2)
}
console.log(perimeter)
console.log(perimeter1)
console.log(perimeter2)

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
let less1 = lessThan100(22,15)
let less2 = lessThan100(83,34)
function lessThan100(num1,num2) {
    if((num1+num2) < 100){
        return true
    }
    else{
        return false
    }
}
console.log(less1)
console.log(less2)

// remainder of a division operation.
function remainder(num1,num2) {
    return num1%num2
}
var res = remainder(1,3)
var res1 = remainder(3,4)
var res2 = remainder(-9,45)
var res3 = remainder(5,5)
console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)

//Old macdonald had a farm: MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
function CountAnimals(turkey,horse,pigs) {
    var a = 2*turkey;
    var b = 4*(horse+pigs);
    return a+b
    }
    var legs = CountAnimals(2,3,5)
    var legs1 = CountAnimals(1,2,3)
    var legs2 = CountAnimals(5,2,8)
    console.log(legs);
    console.log(legs1);
    console.log(legs2);

//Frames Per Second
function frames(num1,num2) {
    return (num1*num2)*60
}
var fps = frames(1,1)
var fps1 = frames(10,1)
var fps2 = frames(10,25)
console.log(fps)
console.log(fps1)
console.log(fps2)

//Check if an Integer is Divisible By Five
function divisibleByFive(num) {
    if(num%5 == 0)
    {
        return true
    }
    else{
        return false
    }
}
var div = divisibleByFive(5)
var div1 = divisibleByFive(-55)
var div2 = divisibleByFive(37)
console.log(div)
console.log(div1)
console.log(div2)

//Write a function called “isEven”.
function isEven(num){
    if(parseInt(num)==num){
    if(num%2===0){
        return true
    }
    else{
        return false
    }
    }
    else{return -1} 
    }
    var even = isEven(12)
   var even1 = isEven(0)
   var even2 = isEven(11)
   var even3= isEven("11h")
   console.log(even) 
   console.log(even1)
   console.log(even2)
   console.log(even3)

   //Write a function called “areBothOdd”.
function areBothOdd(num1, num2){
    if(num1%2 !==0 && num2%2 !== 0){
        return true
     }
    else{
        return false
    }
 }
 var Odd = areBothOdd(1,3)
 var Odd1 = areBothOdd(1,4)
 var Odd2 = areBothOdd(2,3)
 var Odd3 = areBothOdd(0,0)
 console.log(Odd)
 console.log(Odd1)
 console.log(Odd2)
 console.log(Odd3)

 //Write a function called “getFullName”.
function getFullName(firstName, lastName){
    return firstName+" "+lastName
   }
   var fullName=getFullName("GUVI","GEEK")
   var fullName1=getFullName("GUVI","")
   var fullName2=getFullName("","GEEK")
   var fullName3=getFullName("","")
   console.log(fullName)
   console.log(fullName1.toString())
   console.log(fullName2.toString())
   console.log(fullName3.toString())

//ERROR//Write a function called “getLengthOfWord”.
function getLengthOfWord(word1){
    if(typeof(word1)===String){return word1.length}
    else{return -1}
   }
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));

//Write a function called “isSameLength”.
function isSameLength(word1, word2){
    if(word1.length == word2.length){
        return true
    }else{
        return false
    }
   }
   var word=isSameLength("GUVI","GEEK")
   var word1=isSameLength("ARUN","CLASS")
   console.log(word)
   console.log(word1)




