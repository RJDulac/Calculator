var output = document.getElementById("output");

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");



function callOut(a,b,c,call){
    var result = call(Number(a),Number(b));
    output.innerHTML += "<p>" + a + " " + c + " " + b + " = " + result + "</p>";

}

function addNum() {
    callOut(num1.value,num2.value,"+", function(a,b){
        return a + b;
    })
}

function subNum() {
    callOut(num1.value,num2.value,"-", function(a,b) {
        return a - b;
    })
}

function multNum() {
    callOut(num1.value,num2.value,"*", function(a,b) {
        return a * b;
    })
}

function divNum() {
    callOut(num1.value,num2.value,"/",function(a,b) {
        return a / b;
    })
}

function clearAll() {
    output.innerHTML = "";
    num1.value = "";
    num2.value = "";
}