// @coollapse
// If numlock is turned off the keypad should be visibly disabled.
let curNum = document.getElementById("ans");
let prevNum = document.getElementById("operation");
let operationState = "NA";
// buttons
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const multiplyBtn = document.getElementById("operator-multiply");
const divideBtn = document.getElementById("operator-divide");
const minusBtn = document.getElementById("operator-minus");
const plusBtn = document.getElementById("operator-plus");
const decimalBtn = document.getElementById("decimal");
const enterBtn = document.getElementById("enter");
const num = document.getElementById("");

function clear() {
	prevNum.innerHTML = "";
	curNum.innerHTML = "0";
	operationState = "NA";
}

function evaluate(equation) {
	return equation;
}

class Calculator {
	constructor(prevNum, curNum) {
		this.prevNum = prevNum;
		this.curNum = curNum;
		clear();
	}
}

// Button action Listeners
// Clear, delete, and enter
clearBtn.addEventListener("click", () => {
	clear();
});
deleteBtn.addEventListener("click", () => {
	curNum.innerHTML = "0";
});
enterBtn.addEventListener("click", () => {
	if (operationState == "NA") return;

	prevNum.innerHTML =
		" " + " = " + evaluate(prevNum.innerHTML) + " " + curNum.innerHTML;
	curNum.innerHTML = "0";
});
// operator buttons
multiplyBtn.addEventListener("click", () => {
	if (curNum.innerHTML == "0") return;
	operationState = multiplyBtn.innerText;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + operationState;
	curNum.innerHTML = "0";
});
divideBtn.addEventListener("click", () => {
	if (curNum.innerHTML == "0") return;

	operationState = divideBtn.innerText;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + operationState;
	curNum.innerHTML = "0";
});
plusBtn.addEventListener("click", () => {
	if (curNum.innerHTML == "0") return;
	operationState = plusBtn.innerText;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + operationState;
	curNum.innerHTML = "0";
});
minusBtn.addEventListener("click", () => {
	if (curNum.innerHTML == "0") return;
	operationState = minusBtn.innerText;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + operationState;
	curNum.innerHTML = "0";
});
// Number buttons
document.querySelectorAll(".numberBtn").forEach((item) => {
	console.log("entered logic for number");
	item.addEventListener("click", () => {
		let numVal = item.textContent;
		if (curNum.innerHTML == "0") curNum.innerHTML = numVal;
		else curNum.innerHTML += numVal;
	});
});
decimalBtn.addEventListener("click", () => {
	let decimalVal = decimalBtn.textContent;
	if (curNum.innerHTML.includes(".")) return;
	else {
		curNum.innerHTML += decimalVal;
	}
});
// Calculator Functions
const add = function (...args) {
	let j = 0;
	let sumNum = 0;
	while (j < args.length) {
		sumNum += args[j];
		j++;
	}
	return sumNum;
};

const subtract = function (...args) {
	let j = 1;
	let subNum = args[0];
	while (j < args.length) {
		subNum -= args[j];
		console.log(subNum);
		j++;
	}
	return subNum;
};

const sum = function (args) {
	let j = 0;
	let sumNum = 0;
	while (j < args.length) {
		sumNum += args[j];
		j++;
	}
	return sumNum;
};

const multiply = function (args) {
	let j = 0;
	let product = 1;
	args.forEach((element) => {
		product *= element;
	});

	return product;
};

const power = function (base, exponent) {
	baseMult = base;
	j = 0;
	if (exponent == 0) {
		return 0;
	}
	if (exponent == 1) {
		return base;
	}
	while (j < exponent - 1) {
		baseMult *= base;
		j++;
	}
	return baseMult;
};
