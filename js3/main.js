let arr = [];

function insertNumber() {
    const numberInput = document.getElementById("numberInput");
    const num = parseFloat(numberInput.value.trim());

    if (!isNaN(num)) {
        arr.push(num);
        numberInput.value = ""; 
        updateDisplay();
    } else {
        alert("Please enter a valid number.");
    }
}

function deleteAll() {
    arr = [];
    updateDisplay();
}

function updateDisplay() {
    const numbersList = document.getElementById("numbersList");
    const sumTxt = document.getElementById("sum");
    const highestTxt = document.getElementById("highest");
    const lowestTxt = document.getElementById("lowest");

    numbersList.innerHTML = arr.join("<br>");

    let sum = arr.reduce((acc, num) => acc + num, 0);
    let highest = arr.length > 0 ? Math.max(...arr) : 0;
    let lowest = arr.length > 0 ? Math.min(...arr) : 0;

    sumTxt.innerHTML = sum;
    highestTxt.innerHTML = highest;
    lowestTxt.innerHTML = lowest;
}
