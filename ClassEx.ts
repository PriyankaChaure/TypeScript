class Product
{
private ProductId:number;
private ProductName:string;
private MfgName:string;
private Price:number;
// constructor(pid:number,pn:string,mn:string,pr:number)
// {
//     this.ProductId=pid;
//     this.ProductName=pn;
//     this.MfgName=mn;
//     this.Price=pr;
// }
constructor()
{
    this.ProductId =3;
    this.ProductName="Keyboard";
    this.MfgName= "Intex";
    this.Price =550;
  } 
 addProduct(pid:number,pn:string,mn:string,pr:number):void
 {
    this.ProductId=pid;
    this.ProductName=pn;
    this.MfgName=mn;
    this.Price=pr;
 }
 display():void
 {
    console.log(this.ProductId);
    console.log(this.ProductName);
    console.log(this.MfgName);
    console.log(this.Price);
 }
}
//let p=new Product(2,"Keyboard","Dell",800);
let p=new Product();
//p.addProduct(1,"Mouse","Intex",4500);
p.display();





