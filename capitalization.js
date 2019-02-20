function capitalize(str)
{

var words=str.split(" ");
var capital_words=[];

for(let item of words)
{
  capital_words.push(item[0].toUpperCase()+item.slice(1))
}

return capital_words.join(" ");

}
