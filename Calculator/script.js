let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function backspace() {
    let current = display.innerText;
    display.innerText = current.length > 1 ? current.slice(0, -1) : "0";
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace("x", "*"));
    } catch (error) {
        display.innerText = "Error";
    }
}