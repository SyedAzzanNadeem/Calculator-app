var screen = document.getElementById("screen");
var isCalculated;

function clearAll() {
    screen.value = "";
}
function getBtnValue(val) {
    if (isCalculated && typeof val == "number"){
        clearAll();
    }
    screen.value += val;
    isCalculated = false;
}
function calculate(){
    isCalculated = true;
    var val = screen.value;
    var finalVal = eval(val);
    screen.value = finalVal;
}