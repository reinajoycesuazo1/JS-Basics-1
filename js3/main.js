const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");
const numTxt = document.getElementById("num");

function Calculate(){
    let arr = [
        parseFloat(numTxt.value) ];
        let sum = 0;

        arr.push(numTxt.value);
}

for(let i=0; i<arr.length; i++ ) {
    sum += arr[i];
}

elementTxt.innerHTML = arr.join("<br>");
sumTxt.innerHTML = sum;
console.log(arr);
}

function clearEntries(){
    numTxt.value ="";
    resultTxt.innerHTML = "";
}