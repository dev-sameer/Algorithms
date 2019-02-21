function steps(n)
{

  for(let row=0;row<=n;row++)
  {
    var str="";

    for(let col=0;col<=n;col++)
    {
      if(col>row)
      {
        str=str+" ";
      }
      else
      {
        str+="#";
      }
    }
    
    console.log(str);
  }


}

//USING RECURSION


function steps(n,row=0)
{
var str="";
  if(n===0)
  {
    return;
  }

  for(var i=0;i<=row;i++)
  {
    str+="#";
  }
  
console.log(str);
steps(n-1,row+1);


}
