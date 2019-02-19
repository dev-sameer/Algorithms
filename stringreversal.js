function reversal(str){

  revstr="";

  for(var char of str)
  {
    revstr=char+revstr;                                                                         
  }

  return revstr;

}



//using reduce 


function reversal(str){

  var reverse = str.split("").reduce((result,char)=>
  {
  result=char+result;
  return result;
  },"");

  return reverse;

}
