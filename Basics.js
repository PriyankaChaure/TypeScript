var num = 10;
console.log("Number is:" + num);
var str = "Hello and Welcome!";
console.log(str);
var v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= v.length; i++) {
    console.log(v[i]);
}
var n = [23, 34, 45, 56, 67, 77];
for (var i = 0; i < n.length; i++) {
    console.log(n[i]);
}
var pair;
pair = ["hello", 80];
console.log(pair[0]);
console.log(pair[1]);
var cities;
(function (cities) {
    cities[cities["Pune"] = 0] = "Pune";
    cities[cities["Mumbai"] = 1] = "Mumbai";
    cities[cities["Delhi"] = 50] = "Delhi";
    cities[cities["Noida"] = 51] = "Noida";
    cities[cities["Chennai"] = 52] = "Chennai";
    cities[cities["PCMC"] = 53] = "PCMC";
})(cities || (cities = {}));
console.log(cities.Pune);
console.log(cities.Mumbai);
console.log(cities.Delhi);
console.log(cities.Noida);
console.log(cities.Chennai);
console.log(cities.PCMC);
var x = 70;
console.log("Constant No is:" + x);
//x=50;
var a = [23, 34, 45, 56, 67, 77];
for (var i = a.length; i >= 0; i--) {
    console.log(n[i]);
}
