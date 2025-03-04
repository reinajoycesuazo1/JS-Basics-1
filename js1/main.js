const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sum");
const productTxt = document.getElementById("product");
const differenceTxt = document.getElementById("difference");
const quotientTxt = document.getElementById("quotient");
let sum = 0;
let product = 0;
let difference = 0;
let quotient = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumTxt.innerHTML = sum;
    }
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        productTxt.innerHTML = product;
    }
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        difference = parseInt(num1Txt.value) -  parseInt(num2Txt.value);
        differenceTxt.innerHTML = difference;
    }
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        quotient = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        quotientTxt.innerHTML = quotient;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    sum = 0;
    product = 0;
    difference = 0;
    quotient = 0;

}

