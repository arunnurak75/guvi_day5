//Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
var d1 = (x2-x1)*(x2-x1);d2=(y2-y1)*(y2-y1);
return d1+d2
}
console.log(getDistance(100, 100, 400, 300));

//Write a function called “getNthElement”.
function getNthElement(array,n){
    return array[n]
  }
  var nthElement=  getNthElement([1,3,5],1)
     console.log(nthElement)

//Write a function called “getLastElement”.
function getLastElement(array){
    return array[array.length-1]
   }
   var lastele=getLastElement([1, 2, 3, 4])
   console.log(lastele)

// where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
  function countPositivesSumNegatives(arr) {
    if (arr && arr.length) {
        let positiveSum = 0
        let negativeSum = 0
        arr.forEach(num => num > 0 ? positiveSum++ : negativeSum += num)
        return [positiveSum, negativeSum]
    } else {
        return []
    }
}

//Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar2 = countPositivesSumNegatives(arr)
console.log(ar2);

function getPositives(array)
{
    return array.filter(i => i >= 0);
}
var array = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var array1 = getPositives(array);
console.log(array1);

//Find the maximum number in an array of numbers
function findMax(ar)
{
  return Math.max(... ar)
}
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var maxx = findMax(arr);
console.log('Max:' , maxx);

//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   var data = s.split('').reverse().join('');
   return data
}

//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
{const ar = ar1.concat(ar2);
return ar;
}}

//Calculate the sum of numbers received in a comma delimited string
function sumCSV(s)
{
        let string = s.split(",");
        let sum = string.reduce(function(total, num){
          return parseFloat(total) + parseFloat(num);
        });

        return sum;
    }
    console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));


