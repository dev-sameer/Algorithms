//Determining wheather a string is a palindrome or not - using Array.prototype.every() Method 

function palindrome(str){

//using every() method: for each element in the array the mentioned condition is checked and return the boolean  

return str.split("").every((char,index)=>
{

      return char===str[str.length-1-index];

})

}
