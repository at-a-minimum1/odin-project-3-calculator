// @collapse
// If numlock is turned off the keypad should be visibly disabled.
let curNum = document.getElementById("ans");
let prevNum = document.getElementById("operation");
let pemdasNum = 0;
let numbers = [];
let multiplyNum = null;
let sign = 1;

// buttons
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const multiplyBtn = document.getElementById("operator-multiply");
const divideBtn = document.getElementById("operator-divide");
const minusBtn = document.getElementById("operator-minus");
const plusBtn = document.getElementById("operator-plus");
const decimalBtn = document.getElementById("decimal");
const enterBtn = document.getElementById("enter");

function clear() {
	prevNum.innerHTML = "";
	// curNum.innerHTML = "0";
	numbers = [];
	pemdasNum = 0;
	multiplyNum = null;
	sign = 1;
}
function evaluate() {
	answer = sum(numbers);

	return answer;
}
function enterFunction() {
	if (prevNum.innerHTML.includes("=")) {
		prevNum.innerHTML = "";
		clear();
		return;
	}
	if (multiplyNum != null && pemdasNum == 1) {
		numbers.push(multiplyNum * (sign * Number(curNum.innerHTML)));
		sign = 1;
		pemdasNum = 0;
	}

	if (multiplyNum != null && pemdasNum == 2) {
		numbers.push(multiplyNum / (sign * Number(curNum.innerHTML)));
		sign = 1;
		pemdasNum = 0;
	}
	if (multiplyNum == null) {
		numbers.push(sign * Number(curNum.innerHTML));
		sign = 1;
	}
	let answer = sum(numbers);

	prevNum.innerHTML =
		" " + prevNum.innerHTML + " " + curNum.innerHTML + " = " + answer;

	curNum.innerHTML = "0";

	console.log(numbers);
}
function multiplyFunction() {
	if (prevNum.innerHTML.includes("=")) {
		prevNum.innerHTML = "";
		clear();
		return;
	}
	pemdasNum = 1;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "x";
	console.log(multiplyNum);
	if (multiplyNum != null) {
		multiplyNum *= Number(curNum.innerHTML);
		sign = 1;
	}
	if (multiplyNum == null) {
		multiplyNum = Number(curNum.innerHTML);
		sign = 1;
	}
	curNum.innerHTML = "0";
}
function divideFunction() {
	if (prevNum.innerHTML.includes("=")) {
		prevNum.innerHTML = "";
		clear();
		return;
	}
	pemdasNum = 2;
	prevNum.innerHTML += " " + curNum.innerHTML + " " + "/";

	multiplyNum = Number(curNum.innerHTML);

	curNum.innerHTML = "0";
}
function additionFunction() {
	if (prevNum.innerHTML.includes("=")) {
		prevNum.innerHTML = "";
		clear();
		return;
	}
	if (curNum.innerHTML == "0") return;
	if (multiplyNum == null) {
		numbers.push(sign * Number(curNum.innerHTML));
		sign = 1;
	}
	if (multiplyNum != null && pemdasNum == 1) {
		numbers.push(multiplyNum * (sign * Number(curNum.innerHTML)));
		multiplyNum = null;
		pemdasNum = 0;
		sign = 1;
	}
	if (multiplyNum != null && pemdasNum == 2) {
		numbers.push(multiplyNum / (sign * Number(curNum.innerHTML)));
		multiplyNum = null;
		pemdasNum = 0;
		sign = 1;
	}

	prevNum.innerHTML += " " + curNum.innerHTML + " " + "+";

	curNum.innerHTML = "0";
}
function minusFunction() {
	if (prevNum.innerHTML.includes("=")) {
		prevNum.innerHTML = "";
		clear();
		return;
	}
	if (curNum.innerHTML == "0") return;
	if (multiplyNum == null) {
		numbers.push(Number(curNum.innerHTML));
		sign = -1;
	}
	if (multiplyNum != null && pemdasNum == 1) {
		numbers.push(multiplyNum * Number(curNum.innerHTML));
		multiplyNum = null;
		pemdasNum = 0;
		sign = -1;
	}
	if (multiplyNum != null && pemdasNum == 2) {
		numbers.push(multiplyNum / Number(curNum.innerHTML));
		multiplyNum = null;
		pemdasNum = 0;
		sign = -1;
	}

	prevNum.innerHTML += " " + curNum.innerHTML + " " + "-";

	curNum.innerHTML = "0";
}
const sum = function (args) {
	let j = 0;
	let sumNum = 0;
	while (j < args.length) {
		sumNum += args[j];
		j++;
	}
	return sumNum;
};

// Button action Listeners
// Clear, delete, and enter
clearBtn.addEventListener("click", () => {
	clear();
	curNum.innerHTML = "0";
});
deleteBtn.addEventListener("click", () => {
	curNum.innerHTML = "0";
});
enterBtn.addEventListener("click", () => {
	enterFunction();
});
// operator buttons
multiplyBtn.addEventListener("click", () => {
	multiplyFunction();
});
divideBtn.addEventListener("click", () => {
	divideFunction();
});
plusBtn.addEventListener("click", () => {
	additionFunction();
});
minusBtn.addEventListener("click", () => {
	minusFunction();
});
// Number buttons
document.querySelectorAll(".numberBtn").forEach((item) => {
	item.addEventListener("click", () => {
		if (prevNum.innerHTML.includes("=")) {
			clear();
		}
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
// Keydown events
// window.addEventListener("keydown", handleKeyPress());
document.addEventListener("keydown", (e) => {
	if (e.key == "NumLock" && e.getModifierState("NumLock")) {
		document.getElementById("numLock").style.backgroundColor = "red";
	}
	if (e.getModifierState("NumLock") == false) {
		document.getElementById("numLock").style.backgroundColor = "red";
	} else {
		document.getElementById("numLock").style.backgroundColor = "#f5fff1";
	}
	if (Number(e.key) >= 0 && Number(e.key) <= 9) {
		if (prevNum.innerHTML.includes("=")) {
			clear();
		}
		let numVal = e.key;
		if (curNum.innerHTML == "0") curNum.innerHTML = numVal;
		else curNum.innerHTML += numVal;
	} else {
		if (e.key == "Enter") {
			enterFunction();
		}
		if (e.key == "/") {
			divideFunction();
		}
		if (e.key == "*") {
			multiplyFunction();
		}
		if (e.key == "+") {
			additionFunction();
		}
		if (e.key == "-") {
			minusFunction();
		}
		if (e.key == ".") {
			let decimalVal = e.key;
			if (curNum.innerHTML.includes(".")) return;
			else {
				curNum.innerHTML += decimalVal;
			}
		}
		return;
	}
});

