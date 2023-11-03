let Result = document.getElementById("result")

function appendValue(value) {
  Result.value += value;
}

function clearResult() {
  Result.value = "";
}

function calculate() {
  let expression = Result.value;
  let result = eval(expression);
  Result.value = result;
}