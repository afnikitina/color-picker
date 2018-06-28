// first wait for window to completely load
window.onload = function() {
	initColorPicker();
};

function initColorPicker() {
	let colorBox = document.getElementById("color-box");
	let color = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, color, colorPickers);
}

function setElementBGColor(currElement, red, green, blue) {
	let rgbVal = [red, green, blue].join(',');
	currElement.style.backgroundColor = `rgb(${rgbVal})`;
}

function setColorPickerEventListeners(element, color, pickerElements) {
	let red, green, blue;
	let pickerLen = pickerElements.length;

	for(let i = 0; i < pickerLen; i++) {
		pickerElements[i].addEventListener('change', () => {
			red = color.red.value;
			green = color.green.value;
			blue = color.blue.value;
			setElementBGColor(element, red, green, blue);
			setDisplayValues(red, green, blue);
		});
	}
}

function setDisplayValues(red, green, blue) {
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greenVal");
	let blueVal = document.getElementById("blueVal");

	redVal.textContent = red;
	greenVal.textContent = green;
	blueVal.textContent = blue;
}

/*
rgb.red.addEventListener('change', () => {
		console.log("Red value: ", rgb.red.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.green.addEventListener('change', () => {
		console.log("Green value: ", rgb.green.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.blue.addEventListener('change', () => {
		console.log("Blue value: ", rgb.blue.value);
		setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
*/