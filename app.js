// @colllapse
// If numlock is turned off the keypad should be visibly disabled.
let curNum = document.getElementById("ans");
let prevNum = document.getElementById("operation");
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
	eqArray = [];
	multOrDivide = 0;
}

function evaluate() {
	answer = 0;

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

	let num2 = Number(curNum.innerHTML);
	eqArray.push(num2);
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "x";
	curNum.innerHTML = "0";
});
divideBtn.addEventListener("click", () => {
	operationState = divideBtn.innerText;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "/";
	eqArray.push(Number(curNum.innerHTML));

	curNum.innerHTML = "0";
});
plusBtn.addEventListener("click", () => {
	if (curNum.innerHTML == "0") return;

	addToArray(Number(curNum.innerHTML), eqArray.pop());
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "+";

	curNum.innerHTML = "0";
});
minusBtn.addEventListener("click", () => {
	let num = Number(curNum.innerHTML);
	if (multOrDivide == 1) {
		let num2 = eqArray.pop();
		num = multiply(num2, Number(curNum.innerHTML));
		multOrDivide = 0;
	}
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "-";
	eqArray.push(num);

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
