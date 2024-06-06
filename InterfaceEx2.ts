interface AInt
{
    A1method():void;
    A2method():void;
}
interface BInt
{
    B1method():void;
    B2method():void;
}
class Test implements AInt,BInt
{
    A1method(): void 
    {
        console.log("A1 Method Called!");
    }
    A2method(): void 
    {
        console.log("A2 Method Called!");
    }
    B1method(): void 
    {
        console.log("B1 Method Called!");
    }
    B2method(): void 
    {
        console.log("B2 Method Called!");
    }
}
var t=new Test();
t.A1method();
t.A2method();
t.B1method();
t.B2method();