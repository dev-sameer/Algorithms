function fb(n){

var temp;
for(var i=1;i<=n;i++){

if(i%3==0&&i%5==0){
  temp="fizzbuzz";
}
else if(i%5==0){
  temp="buzz";
}
else if(i%3==0){
  temp="fizz";
}
else{
  temp=i;
}

console.log(temp);

}

}
