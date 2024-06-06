import{Engine} from "./Engine";
import{Break} from "./Break";
import{Accelator} from "./Accelator";
class Car
{
e:Engine;
b:Break;
a:Accelator;
constructor()
{
    this.e=new Engine();
    this.b=new Break();
    this.a=new Accelator();
}
     Run():void
     {
        this.e.start();
        this.b.Break();
        this.a.Accelator();
        console.log("Car Is Running!");
     }

}
let c=new Car()
c.Run();