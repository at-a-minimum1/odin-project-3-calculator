// @collapse
// If numlock is turned off the keypad should be visibly disabled.
let curNum = document.getElementById("ans");
let prevNum = document.getElementById("operation");
// let operationState = "NA";
// let numbers = [];
// let equations = [];
let multOrDivide = 0;
let eqArray = [];

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
	numbers = [];
	equations = [];
	eqArray = [];
	multOrDivide = 0;
}

function evaluate() {
	let num1 = 0;
	// let num2 = 0;
	answer = 0;
	for (let i = 0; i < eqArray.length; i++) {
		if (eqArray[i] != NaN) {
			num1 = Number(eqArray[i]);
		}
		if (eqArray[i] == "+") {
			answer += sum(num1, Number(eqArray[i + 1]));
		}
	}

	return answer;
}
function addToArray(varOne, varTwo) {
	//Accepts two variables. If it's subtracted one of the variables will be a negative value (varTwo). Otherwise it should be just two regular old values.

	if (varTwo == NaN) {
		eqArray.push(varOne);
		return;
	}
	if (multOrDivide == 1) {
		eqArray.push(varOne * varTwo);
		multOrDivide = 0;
	}
	if (multOrDivide == 2) {
		eqArray.push(varOne / varTwo);
		multOrDivide = 0;
	} else {
		eqArray.push(varOne);
		eqArray.push(varTwo);
	}
}

// class Calculator {
// 	constructor(prevNum, curNum) {
// 		this.prevNum = prevNum;
// 		this.curNum = curNum;
// 		clear();
// 	}
// }

// Button action Listeners
// Clear, delete, and enter
clearBtn.addEventListener("click", () => {
	clear();
});
deleteBtn.addEventListener("click", () => {
	curNum.innerHTML = "0";
});
enterBtn.addEventListener("click", () => {
	prevNum.innerHTML = " " + prevNum.innerHTML + " " + curNum.innerHTML + " = ";
	let num = Number(curNum.innerHTML);
	if (multOrDivide == 1) {
		let num2 = eqArray.pop();
		num = multiply(num2, Number(curNum.innerHTML));
	}

	eqArray.push(num);
	curNum.innerHTML = "0";
	console.log(eqArray);
});
// operator buttons
multiplyBtn.addEventListener("click", () => {
	multOrDivide = 1;
	// let num1 = 0;

	// let num1 = eqArray[eqArray.length];
	let num2 = Number(curNum.innerHTML);
	// let ans = 0;
	// ans = multiply(num1, num2);
	// // if (curNum.innerHTML == "0") return;
	eqArray.push(num2);
	// eqArray.push("x");
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "x";
	curNum.innerHTML = "0";
});
divideBtn.addEventListener("click", () => {
	if (curNum.innerHTML == "0") return;

	operationState = divideBtn.innerText;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "/";
	eqArray.push(Number(curNum.innerHTML));
	// eqArray.push("/");

	curNum.innerHTML = "0";
});
plusBtn.addEventListener("click", () => {
	// let num = Number(curNum.innerHTML);
	if (curNum.innerHTML == "0") return;

	addToArray(Number(curNum.innerHTML), eqArray.pop());
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "+";
	// eqArray.push(num);
	// eqArray.push("+");

	curNum.innerHTML = "0";
});
minusBtn.addEventListener("click", () => {
	let num = Number(curNum.innerHTML);
	if (multOrDivide == 1) {
		let num2 = eqArray.pop();
		num = multiply(num2, Number(curNum.innerHTML));
		multOrDivide = 0;
	}
	if (curNum.innerHTML == "0") return;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "-";
	// num = num * -1;
	eqArray.push(num);
	// eqArray.push("-");

	curNum.innerHTML = "0";
});
// Number buttons
document.querySelectorAll(".numberBtn").forEach((item) => {
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
		// console.log(sumNum);
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

const multiply = function (num1, num2) {
	return num1 * num2;
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
