var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bill = /** @class */ (function () {
    function Bill() {
    }
    Bill.prototype.AddBill = function (bn, cn, bdt) {
        this.BillNo = bn;
        this.CustomerName = cn;
        this.BillDate = bdt;
    };
    Bill.prototype.displayBill = function () {
        console.log("Bill No:" + this.BillNo);
        console.log("Customer Name:" + this.CustomerName);
        console.log("Bill Date:" + this.BillDate);
    };
    return Bill;
}());
var MobileBill = /** @class */ (function (_super) {
    __extends(MobileBill, _super);
    function MobileBill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileBill.prototype.AddMobileBill = function (bn, cn, bdt, mn, noc, cpr) {
        this.AddBill(bn, cn, bdt);
        this.MobileNo = mn;
        this.NoOfCalls = noc;
        this.CallPrRate = cpr;
    };
    MobileBill.prototype.displayMobileBill = function () {
        this.displayBill();
        console.log("Mobile No:" + this.MobileNo);
        console.log("No Of Calls:" + this.NoOfCalls);
        console.log("Call Per Rate:" + this.CallPrRate);
        console.log("Amount:" + (this.NoOfCalls * this.CallPrRate));
    };
    return MobileBill;
}(Bill));
var mb = new MobileBill();
mb.AddMobileBill(1, "Priya", "24/5/2024", 1234567890, 50, 0.2);
mb.displayMobileBill();
