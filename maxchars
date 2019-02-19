//To find the character which repeated max number of times in the string 


function maxchars(str){

  var obj1={};

  for(var item of str)
  {
    (obj1[item])?(obj1[item]++):(obj1[item]=1)
  }

  var max=0;
  var k='';

  for(var key in obj1)
  {
    if(obj1[key]>max)
    {
      max=obj1[key];
      k=key;
    }
  }

 return k;
 
}
