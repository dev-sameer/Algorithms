//how to find the max sum of consecutive numbers present in the array

//step 1 is to calculate the sum of the first n(example 3 elements) numbers and assume it to be the max i.e sum of 1st 2nd and 3rd elements

//step 2 is loop over the array starting from the (n+1)th number in the array till the end of the array

//Objective is to calculate the sum of 2nd 3rd and 4th elements and compare with the previous max and update the max value accordingly 

//In the first iteration the sum of 2nd 3rd and 4th elements is determined --> this can be done by subtracting the 1st element and adding the 4th element to the temp value

//As we loop over the elements we will determine the max

function maxsum(arr,n){

var temp=0;
var max=0;
for(var i=0;i<n;i++){
temp+=arr[i];
}//Till this point the sum of n consecutive numbers is calculated and placed in a temp variable

max=temp;//assuming that the first n consecutive numbers sum is the max 

for(var i=n;i<arr.length;i++){
  temp=temp+arr[i]-arr[i-n];
  max=Math.max(temp,max);
}

return max;
}


maxsum([3,9,4,7,9],2)
