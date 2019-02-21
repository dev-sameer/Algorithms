function pyramid(n)
{
for(var row=0;row<n;row++)
{
  var mid=Math.floor((2*n-1)/2);
  var str="";
    for(var column=0;column<(n*2)-1;column++)
    {
      if(mid-row <=column && mid+row>=column)
      {
        str+="#";
      }
      else
      {
        str+=" ";
      }
    }
  console.log(str);

}
}
