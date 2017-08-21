let squares = document.querySelectorAll(".square")
let squares1 = document.querySelectorAll(".square1")
let squares2 = document.querySelectorAll(".square2")
let CD = document.querySelector("#CD")
let reBtn = document.querySelector("#newColors")
let head = document.querySelector("#firstH")
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
			giveColors(squares1)
			rightColorPicker(squares1)
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
	CD.textContent = rightColor
}

function checkPressedColor(){
	if(this.style.backgroundColor === rightColor){
		result.textContent = "CORRECT"
		reBtn.textContent = "PLAY AGAIN?"
		head.style.backgroundColor = rightColor
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
		squares2.forEach(function(square2) {
			square2.style.visibility = "visible"
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
		squares2.forEach(function(square2) {
			square2.style.visibility = "hidden"
		})
		giveColors(squares1)
		rightColorPicker(squares1)
	}
}

function refresh() {
	reBtn.textContent = "NEW COLORS"
	result.textContent = ""
	head.style.backgroundColor = "rgb(16, 140, 117)"
}