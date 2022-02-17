n=5;
var p="";
for(i=1; i<=n; i++)
{
    for(j=1; j<n-i+1; j++)
    {
        p += "$";
    }
    p += "\n";
}
console.log(p);