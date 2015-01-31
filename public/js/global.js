var mouseDown = false;
var mousePos = {
	x : 0,
	y : 0
}
var lastPos = {
	x: 0,
	y: 0
}
var socket = io.connect();
var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var colour = getRandomColor();
var size = 5;

function sync() {
	var data = "";
	socket.emit('sync', data);
}

function clearCanvas() {
	c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
    socket.emit('recieve canvas', canvas.toDataURL());
}

function draw() {
	var json = {
		x: mousePos.x,
		y: mousePos.y,
		lastX: lastPos.x,
		lastY: lastPos.y,
		size: size,
		colour: colour
	}
	drawLine(json.x, json.y, json.lastX, json.lastY, json.size, json.colour);
	/*drawRect(json.x, json.y, json.colour);*/
	socket.emit('send message', json);
}

function drawRect(x, y, colour) {
    c.fillStyle = colour;
	c.fillRect(x, y, 15, 15);
}

function drawCircle(x, y, size, colour) {
	//draw a circle
	c.lineTo(x, y);
	c.fillStyle = colour;
	c.beginPath();
	c.arc(x, y, size, 0, Math.PI*2, true); 
	c.closePath();
	c.fill();
}

function drawLine(x, y, lastX, lastY, size, colour) {
	c.strokeStyle = colour;
	c.lineWidth = size;
	c.lineCap = "round";
	c.beginPath();
	c.moveTo(lastX , lastY);
	c.lineTo(x,y);
	c.stroke();
}

socket.on('new message', function(data) {
	drawLine(data.x, data.y, data.lastX, data.lastY, data.size, data.colour);
});

socket.on('sync result', function(data) {
	var img = new Image();
	img.onload = function(){
	  c.drawImage(img,0,0); // Or at whatever offset you like
	};
	img.src = data;
});

socket.on('send canvas', function(data) {
	socket.emit('recieve canvas', canvas.toDataURL());
});

/**
** Helper Functions
**/

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
       	y: evt.clientY - rect.top
    };
}


//  Can be removed as it has been potentially replaced with brushSelection
function onMouseWheel(evt) {
     // Multi browser support
    var evt = window.event || evt; // old IE support
    var delta = Math.max(-1, Math.min(1, (evt.wheelDelta || -evt.detail)));

    if(delta > 0) {
    	if(size >= 30) {
    		size = 30;
    	} else {
    		size++;
    	}
    } else {
    	if(size <= 1) {
    		size = 1
    	} else {
        	size--;
    	}
    } 
}

// **
// Brushes
//

// Brush Lines 
// note: doesnt support other browsers gl
var brushSelection = document.getElementById('brushSelection');

brushSelection.addEventListener("click", function(evt){
	var value = getOptionSelected(brushSelection);
	brushSize(value);
});

function brushSize(newSize){
	size = newSize;
}

// Brush Colour Picker

// var colourPicker = document.getElementById("colourPicker");
// colourPicker.addEventListener("click", function(evt){
// 	var value = getOptionSelected(colourPicker);
// 	assignColour(value);
// });

// function assignColour(newColour){
// 	colour = newColour;
// }


// Use with html element select and option. Returns the value of the selected option. Parameter is the select element
function getOptionSelected(selectElement){
	return selectElement.options[selectElement.selectedIndex].value;
}



/**
** Canvas Event Listeners
**/
if (canvas.addEventListener) {
	// IE9, Chrome, Safari, Opera
	canvas.addEventListener("mousewheel", onMouseWheel, false);
    // Firefox
    canvas.addEventListener("DOMMouseScroll", onMouseWheel, false);
}
// IE 6/7/8
else {
	canvas.attachEvent("onmousewheel", onMouseWheel);
}

canvas.addEventListener('mousemove', function(evt) {
	lastPos = mousePos;
	mousePos = getMousePos(canvas, evt);
	if(mouseDown == true) {
		draw();
	}
}, false);

canvas.addEventListener("mousedown", function(evt) {
	canvas.className = "dragged";
	if(evt.button == 0) {
    	mouseDown = true;
	} else {
		colour = getRandomColor();
	}
});
canvas.addEventListener("mouseup", function(evt) {
	canvas.className = ""; // Reverts to no classname
	if(evt.button == 0) {
    	mouseDown = false;
	}
});
