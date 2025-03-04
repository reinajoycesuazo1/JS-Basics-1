
const firstnameTxt = document.getElementById("firstname");
const middlenameTxt = document.getElementById("middlename");
const lastnameTxt = document.getElementById("lastname");
const resultTxt = document.getElementById("result");

function generate() {
    resultTxt.innerHTML = firstnameTxt.value + " " + middlenameTxt.value + " " + lastnameTxt.value;
}

function clearEntries() {
    firstnameTxt.value = "";
    middlenameTxt.value = "";
    lastnameTxt.value = "";
    resultTxt.value = "";
   

}