var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.A1method = function () {
        console.log("A1 Method Called!");
    };
    Test.prototype.A2method = function () {
        console.log("A2 Method Called!");
    };
    Test.prototype.B1method = function () {
        console.log("B1 Method Called!");
    };
    Test.prototype.B2method = function () {
        console.log("B2 Method Called!");
    };
    return Test;
}());
var t = new Test();
t.A1method();
t.A2method();
t.B1method();
t.B2method();
