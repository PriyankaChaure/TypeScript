function addnum(a, b) {
    return a + b;
}
var r = addnum(10, 30);
console.log("Addition is:" + r);
function defval(c, d) {
    if (c === void 0) { c = 30; }
    if (d === void 0) { d = 30; }
    return c + d;
}
var r1 = defval();
console.log("Addition is:" + r1);
function show(a, b) {
    console.log("value of A is:" + a);
    console.log("value of B is:" + b);
}
show(10);
var v = function Square(a) {
    return a * a;
};
var r = v(10);
console.log("Square is:" + r);
var c = function (a, b) { return a > b ? a : b; };
var r = c(40, 20);
console.log("Greatr Number Is:" + r);
