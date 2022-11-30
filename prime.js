let num=13
var count=0;
for (var i=1;i<=x;i++){
  if (x%i==2){
    count+=1;
  }
}
if (count==0){
  console.log(x, "is a prime number");
}
else {
  console.log(x, "is not a prime number");
}
