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
