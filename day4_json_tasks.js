1)* Print odd numbers in an array 

//Anonymous 
var odd=function(arr)
{
    for(var i in arr)
    {
        if(arr[i]%2!==0)
        console.log(arr[i]);
    }
}
odd([1,2,3,4,5]);
//IIFE

(function(arr){ 
    for(var in in  arr)
    {
        if(arr[i]%2!==0)
        console.log(arr[i]);
    }
})([1,2,3,4,5,6,7])

=====================================================================



8) Rotate an array by k times and return the rotated array


var arr=[1,2,3,4,5];
var rotate=function(arr, k)
{
for(let i=1;i<=k;i++)
{

arr.push(arr.shift());
 
}
return arr;
}
var result=rotate(arr,5);
console.log(result);


========================================================

let givenArray = ["a","b","c","d","e","f","g"];

let rotateArray = function(array,times){
    for(let i=0;i<times;i++){
        let key = array.shift();
        givenArray.push(key)
    }
    return givenArray
}
console.log("Anonymous: "+rotateArray(givenArray,3))