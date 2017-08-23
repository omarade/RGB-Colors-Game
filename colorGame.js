let squares = document.querySelectorAll(".square")
let squares3 = document.querySelectorAll(".square3")
let squaresHidden = document.querySelectorAll(".squareH")
let colorDisplay = document.querySelector("#colorDisplay")
let reBtn = document.querySelector("#newColors")
let h1 = document.querySelector("h1")
let result = document.querySelector("#result")
let hardModebtn = document.querySelector("#hardMode")
let easyModebtn = document.querySelector("#easyMode")
let rightColor;

init()

function init() {
	hardModebtn.addEventListener("click", hardMode)
	easyModebtn.addEventListener("click", easyMode)
	giveColors(squares)
	rightColorPicker(squares)
	squares.forEach(function(square){
		square.addEventListener("click", checkPressedColor)
	})
	reBtn.addEventListener("click", function(){
		if (hardModebtn.classList.value === "active") {
			giveColors(squares)
			rightColorPicker(squares)		
		}
		else{
			giveColors(squares3)
			rightColorPicker(squares3)
		}
		refresh()
	})	
}

function makeRandomColor() {
	var r = "rgb(" + Math.floor(Math.random() * 256)
	var g = ", " + Math.floor(Math.random() * 256)
	var b = ", " + Math.floor(Math.random() * 256) + ")"
	var color = r + g + b
	return color	
}

function giveColors (mode) {
	mode.forEach(function(square){
		square.style.backgroundColor = makeRandomColor()
	})	
}

function rightColorPicker(mode) {
	rightColor = mode[Math.floor(Math.random() * mode.length)].style.backgroundColor
	colorDisplay.textContent = rightColor
}

function checkPressedColor(){
	if(this.style.backgroundColor === rightColor){
		result.textContent = "CORRECT"
		reBtn.textContent = "PLAY AGAIN?"
		h1.style.backgroundColor = rightColor
		squares.forEach(function(square){
			square.classList.remove("fadeOut")
			square.style.backgroundColor = rightColor
		})
	}
	else{
		result.textContent = "TRY AGAIN"
		this.classList.add("fadeOut")
	}
}

function hardMode() {
	if (this.classList.value === "active"){
		//do nothing
	}
	else {
		refresh()
		easyModebtn.classList.remove("active")
		this.classList.add("active")
		squaresHidden.forEach(function(square) {
			square.style.visibility = "visible"
		})
		giveColors(squares)
		rightColorPicker(squares)
	}	
}

function easyMode() {
	if (this.classList.value === "active") {
		//do nothing
	}
	else{
		refresh()
		hardModebtn.classList.remove("active")
		this.classList.add("active")
		squaresHidden.forEach(function(square) {
			square.style.visibility = "hidden"
		})
		giveColors(squares3)
		rightColorPicker(squares3)
	}
}

function refresh() {
	reBtn.textContent = "NEW COLORS"
	result.textContent = ""
	h1.style.backgroundColor = "rgb(16, 140, 117)"
	squares.forEach(function(square){
		square.classList.remove("fadeOut")		
	})
}