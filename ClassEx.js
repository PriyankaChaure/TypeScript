var Product = /** @class */ (function () {
    // constructor(pid:number,pn:string,mn:string,pr:number)
    // {
    //     this.ProductId=pid;
    //     this.ProductName=pn;
    //     this.MfgName=mn;
    //     this.Price=pr;
    // }
    function Product() {
        this.ProductId = 3;
        this.ProductName = "Keyboard";
        this.MfgName = "Intex";
        this.Price = 550;
    }
    Product.prototype.addProduct = function (pid, pn, mn, pr) {
        this.ProductId = pid;
        this.ProductName = pn;
        this.MfgName = mn;
        this.Price = pr;
    };
    Product.prototype.display = function () {
        console.log(this.ProductId);
        console.log(this.ProductName);
        console.log(this.MfgName);
        console.log(this.Price);
    };
    return Product;
}());
//let p=new Product(2,"Keyboard","Dell",800);
var p = new Product();
//p.addProduct(1,"Mouse","Intex",4500);
p.display();
