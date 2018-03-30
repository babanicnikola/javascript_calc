function btnce() {
	var duz = document.calculator.display.value.length;
	var last = document.calculator.display.value[duz-1];
	if (last == undefined){
		document.calculator.display.value = "";
	}
	else {
		document.calculator.display.value = document.calculator.display.value.slice(0, duz-1);
	}
	document.calculator.tacka.removeAttribute("disabled", "");
}
function btnc() {
	document.calculator.display.value = "";
	document.calculator.tacka.removeAttribute("disabled", "");
}
function btnplus() {
	var duz = document.calculator.display.value.length;
	var last = document.calculator.display.value[duz-1];
	if (document.calculator.display.value != ""){
		document.calculator.display.value += "+";
	}
	if (last == "+" || last == "-" || last == "×" || last == "÷" || last == "."){
		document.calculator.display.value = document.calculator.display.value.slice(0, duz-1);
		document.calculator.display.value += "+";
	}
	document.calculator.tacka.removeAttribute("disabled", "");
}
function btnminus() {
	var duz = document.calculator.display.value.length;
	var last = document.calculator.display.value[duz-1];
	if (document.calculator.display.value != ""){
		document.calculator.display.value += "-";
	}
	if (last == "+" || last == "-" || last == "×" || last == "÷" || last == "."){
		document.calculator.display.value = document.calculator.display.value.slice(0, duz-1);
		document.calculator.display.value += "-";
	}
	document.calculator.tacka.removeAttribute("disabled", "");
}
function btntimes() {
	var duz = document.calculator.display.value.length;
	var last = document.calculator.display.value[duz-1];
	if (document.calculator.display.value != ""){
		document.calculator.display.value += "×";
	}
	if (last == "+" || last == "-" || last == "×" || last == "÷" || last == "."){
		document.calculator.display.value = document.calculator.display.value.slice(0, duz-1);
		document.calculator.display.value += "×";
	}
	document.calculator.tacka.removeAttribute("disabled", "");
}
function btndivide() {
	var duz = document.calculator.display.value.length;
	var last = document.calculator.display.value[duz-1];
	if (document.calculator.display.value != ""){
		document.calculator.display.value += "÷";
	}
	if (last == "+" || last == "-" || last == "×" || last == "÷" || last == "."){
		document.calculator.display.value = document.calculator.display.value.slice(0, duz-1);
		document.calculator.display.value += "÷";
	}
	document.calculator.tacka.removeAttribute("disabled", "");
}
function btndot() {
	var duz = document.calculator.display.value.length;
	var last = document.calculator.display.value[duz-1];
	if (last != "."){
		document.calculator.display.value += ".";
		document.calculator.tacka.setAttribute("disabled", "");
	}
}
function btnequal() {
	var inputString = document.calculator.display.value;
	var numbers = inputString.split(/\+|\-|\×|\÷/g);
	var operators = inputString.replace(/[0-9]|\./g, "").split("");
	var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  	document.calculator.display.value = numbers[0];
	document.calculator.tacka.removeAttribute("disabled", "");
}
