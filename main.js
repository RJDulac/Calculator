var output = document.getElementById("output");

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");





function addNum() {
    var a = Number(num1.value);
    var b = Number(num2.value);
    var total = a + b;
    output.innerHTML += "<p>" + a + " + " + b + " = " + total + "</p>";
}

function subNum() {
    var a = Number(num1.value);
    var b = Number(num2.value);
    var total = a - b;
    output.innerHTML += "<p>" + a + " - " + b + " = " + total + "</p>";
}

function multNum() {
    var a = Number(num1.value);
    var b = Number(num2.value);
    var total = a * b;
    output.innerHTML += "<p>" + a + " * " + b + " = " + total + "</p>";
}

function divNum() {
    var a = Number(num1.value);
    var b = Number(num2.value);
    var total = a / b;
    output.innerHTML += "<p>" + a + " / " + b + " = " + total + "</p>";
}