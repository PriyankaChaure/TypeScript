function addnum(a:number,b:number):number
{
    return a+b;
}
var r=addnum(10,30);
console.log("Addition is:"+r)

function defval(c:number=30,d:number=30):number
{
    return c+d;
}
var r1=defval();
console.log("Addition is:"+r1)


function show(a:number,b?:number):void
{
    console.log("value of A is:"+a);
    console.log("value of B is:"+b);
}
show(10);

var v=function Square(a:number):number
{
    return a*a;
}
var r=v(10);
console.log("Square is:"+r);

var c=(a:number,b:number)=> a>b?a:b
var r=c(40,20);
console.log("Greatr Number Is:"+r);

