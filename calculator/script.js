let output = document.getElementById("output");
let expression = "";

function appendToOutput(value) {
    expression += value;
    output.value = expression;
}

function clearOutput() {
    expression = "";
    output.value = "";
}

function calculate() {
    try {
        expression = eval(expression);
        output.value = expression;
    } catch (error) {
        output.value = "Error";
    }
}
