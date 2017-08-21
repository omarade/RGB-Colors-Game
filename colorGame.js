let squares = document.querySelectorAll(".square")
let CD = document.querySelector("#CD")
let reBtn = document.querySelector("#newColors")
let head = document.querySelector("#firstH")
let result = document.querySelector("#result")
let rightColor;

function makeRandomColor() {
	var r = "rgb(" + Math.floor(Math.random() * 256)
	var g = ", " + Math.floor(Math.random() * 256)
	var b = ", " + Math.floor(Math.random() * 256) + ")"
	var color = r + g + b
	return color	
}

function checkPressedColor(){
	if(this.style.backgroundColor === rightColor){
		result.textContent = "CORRECT"
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

function giveColors () {
	squares.forEach(function(square){
		square.style.backgroundColor = makeRandomColor()
	})	
}

function rightColorPicker() {
	rightColor = squares[Math.floor(Math.random() * 6)].style.backgroundColor
	CD.textContent = rightColor
}

giveColors()

rightColorPicker()

squares.forEach(function(square){
	square.addEventListener("click", checkPressedColor)
})

reBtn.addEventListener("click", function(){
	giveColors()
	rightColorPicker()
	result.textContent = ""
	head.style.backgroundColor = "rgb(16, 140, 117)"
})
