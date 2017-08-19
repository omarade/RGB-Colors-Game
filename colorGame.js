var squares = document.querySelectorAll(".square")

function makeRandomColor() {
	var r = "rgb(" + Math.floor(Math.random() * 256)
	var g = ", " + Math.floor(Math.random() * 256)
	var b = ", " + Math.floor(Math.random() * 256) + ")"
	var color = r + g + b
	return color	
}

squares.forEach(function(square){
	square.style.backgroundColor = makeRandomColor()
})