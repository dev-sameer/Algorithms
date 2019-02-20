function chunck(arr,size)
{

var chunkedarray=[];

for(let element of arr)
{

  var last=chunkedarray[chunkedarray.length-1];

  if(!last || last.length==size)
  {
    chunkedarray.push([element])
  }
  else
  {
  last.push(element);
  }
  
}

return chunkedarray;


}

//Using while loop and SLICE method

function chunk(arr,size)
{
var chunkedarr=[];
var i=0;
var increment=size;
while(i<arr.length)
{
  chunkedarr.push(arr.slice(i,size));
  i=i+increment;
  size=size+increment;
}
return chunkedarr;

}
