class Bill
{
    private BillNo:number;
    private CustomerName:string;
    private BillDate:string;
    protected AddBill( bn:number,cn:string,bdt:string):void
    {
        this.BillNo =bn;
        this.CustomerName=cn;
        this.BillDate =bdt;
    }
    protected displayBill():void
    {
        console.log("Bill No:"+this.BillNo);
        console.log("Customer Name:"+this.CustomerName);
        console.log("Bill Date:"+this.BillDate);
    }
}
class MobileBill extends Bill
{
    private MobileNo:number;
    private NoOfCalls:number;
    private CallPrRate:number;
    AddMobileBill(bn:number,cn:string,bdt:string,mn:number,noc:number,cpr:number):void
    {
        this.AddBill(bn,cn,bdt)
        this.MobileNo=mn;
        this.NoOfCalls=noc;
        this.CallPrRate=cpr;
    }
    displayMobileBill():void
    {
        this.displayBill();
        console.log("Mobile No:"+this.MobileNo);
        console.log("No Of Calls:"+this.NoOfCalls);
        console.log("Call Per Rate:"+this.CallPrRate);
        console.log("Amount:"+(this.NoOfCalls*this.CallPrRate));
    }
}
let mb=new MobileBill();
mb.AddMobileBill(1,"Priya","24/5/2024",1234567890,50,0.2);
mb.displayMobileBill();