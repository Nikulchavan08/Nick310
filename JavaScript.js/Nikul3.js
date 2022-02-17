var n = 5;
var valueToprint = "";
for(var i =1; i <=n; i++)
{
    for(var j = 0; j < n - i; j++){
        valueToprint += " ";

    }
     for(var k =1; k <= i; k++){
         valueToprint += "1";
     }
     valueToprint += "\n";
}
    console.log(valueToprint);