// If numlock is turned off the keypad should be visibly disabled.

let numberSelected = document.getElementById("number");
// const updateDisplay = function (...args) {
// 	document.getElementByClass(operation).innerHTML = args;
// };

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
