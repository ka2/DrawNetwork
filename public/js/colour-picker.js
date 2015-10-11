/**
** Global Variables
**/
var squareVertexPositionBuffer;
var squareVertexColorBuffer;
var blackVertexColorBuffer;
var gl;
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var shaderProgram;
var pickedColour = {
    r: 255,
    g: 0,
    b: 0
}
var tintCtx;
var tintPointerCtx;
var hueCtx;
var image;
var webglCanvas;
var hueCanvas;
var tintCanvas;
var tintPointerCanvas;
var tintPointer = {
    x: 0,
    y: 0
}
var huePointer = {
    y: 0
}
var canMoveTintPointer = false;
var canMoveHuePointer = false;
var colourTimer = new Date().getTime();

/**
** WebGL Functions
**/
function webGLStart() {
    webglCanvas = document.getElementById("webgl-temp");
    tintCanvas = document.getElementById("tint");
    tintCtx = tintCanvas.getContext('2d');
    tintPointerCanvas = document.getElementById("tint-pointer");
    tintPointerCtx = tintPointerCanvas.getContext('2d');
    hueCanvas = document.getElementById("hue");
    hueCtx = hueCanvas.getContext('2d');
    image = new Image();
    image.onload = function() {
        hueCtx.drawImage(image, 0, 0);
    },
    image.src = "img/colour-range.png";
    initGL(webglCanvas);
    initShaders();
    initBuffers();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    drawColourSquare();
    drawTintPointer();
  }

function initGL(canvas) {
	try {
        gl = canvas.getContext("webgl",{'alpha': false }) || canvas.getContext("experimental-webgl",{'alpha': false });
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;
	} catch(e) {
	}
	if (!gl) {
		alert("Could not initialise WebGL, sorry :-( ");
	}
}

function initShaders() {
	var fragmentShader = getShaderFromVar(basicFragShader, "Frag");
	var vertexShader = getShaderFromVar(basicVertShader, "Vert");
	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	alert("Could not initialise shaders");
	}
	gl.useProgram(shaderProgram);
	shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
    shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);
    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
}

function getShaderFromVar(shaderSrc, type) {
    var shader;
    if(type == "Vert" || type == "Vertex" || type == "VertexShader") {
        shader = gl.createShader(gl.VERTEX_SHADER);  
    } else if(type == "Frag" || type == "Fragment" || type == "FragmentShader") {
        shader = gl.createShader(gl.FRAGMENT_SHADER); 
    } else {
        console.log("Error: Cannot get shader. Invalid type provided.");
        return;
    }
    gl.shaderSource(shader, shaderSrc);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}

function initBuffers() {
    squareVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    vertices = [
         1.0,  1.0,  0.0,
        -1.0,  1.0,  0.0,
         1.0, -1.0,  0.0,
        -1.0, -1.0,  0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    squareVertexPositionBuffer.itemSize = 3;
    squareVertexPositionBuffer.numItems = 4;

    blackVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, blackVertexColorBuffer);
        var colors = [
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 1.0030,
        0.0, 0.0, 0.0, 1.0030
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    blackVertexColorBuffer.itemSize = 4;
    blackVertexColorBuffer.numItems = 4;

    squareVertexColorBuffer = gl.createBuffer();
    var col = checkPrimaryColour(pickedColour.r, pickedColour.g, pickedColour.b);
     gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
    var colors = [
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0,
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    squareVertexColorBuffer.itemSize = 4;
    squareVertexColorBuffer.numItems = 4;
}


function updateColourBuffer() {
    gl.bindBuffer(gl.ARRAY_BUFFER, blackVertexColorBuffer);
        var colors = [
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 1.0030,
        0.0, 0.0, 0.0, 1.0030
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    blackVertexColorBuffer.itemSize = 4;
    blackVertexColorBuffer.numItems = 4;

    var col = checkPrimaryColour(pickedColour.r, pickedColour.g, pickedColour.b);
     gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
    var colors = [
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0,
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    squareVertexColorBuffer.itemSize = 4;
    squareVertexColorBuffer.numItems = 4;

    drawColourSquare();
}

function checkPrimaryColour(r, g, b) {
    var obj = {
        r: 0,
        g: 0,
        b: 0
    }
    if(r == 255) {
        obj.r = 0.0030;
    }

    if(g == 255) {
        obj.g = 0.0030;
    }

    if(b == 255) {
        obj.b = 0.0030;
    }
    return obj;
}

function setMatrixUniforms() {
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
}

function drawColourSquare() {
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.ortho(this.pMatrix, -1.0, 1.0, -1.0, 1.0, 0.1, 100.0);
    mat4.identity(mvMatrix);
    mat4.translate(mvMatrix, mvMatrix, [0.0, 0.0, -1.0]);
    setMatrixUniforms();

    // First gradient
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, squareVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);

    //Second gradient
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, blackVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, blackVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);

    tintCtx.drawImage(webglCanvas, 0, 0);
}

function drawTintPointer() {
     // Draw the colour pointer
    tintPointerCtx.clearRect ( 0 , 0 , tintPointerCanvas.width, tintPointerCanvas.height );
    tintPointerCtx.beginPath();
    tintPointerCtx.strokeStyle = 'white';
    tintPointerCtx.arc(tintPointer.x,tintPointer.y,5,0,2*Math.PI);
    tintPointerCtx.stroke();
    tintPointerCtx.beginPath();
    tintPointerCtx.strokeStyle = 'black';
    tintPointerCtx.arc(tintPointer.x,tintPointer.y,6,0,2*Math.PI);
    tintPointerCtx.stroke();
    tintPointerCtx.beginPath();
    tintPointerCtx.strokeStyle = 'white';
    tintPointerCtx.arc(tintPointer.x,tintPointer.y,7,0,2*Math.PI);
    tintPointerCtx.stroke();
}

/**
** Colour Picker Functions
**/
function changeColour() {
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    if(canMoveTintPointer === true) {
        var tintRect = tintCanvas.getBoundingClientRect();
        if(mouseIsHoveringCanvas(tintCanvas)) {
            tintPointer = mousePos;
            tintPointer.x -= tintRect.left;
            tintPointer.y -= tintRect.top;
        } else {
            var pos = mousePos;
            if(pos.x < tintRect.left && pos.y < tintRect.top) {
                tintPointer.x = 0;
                tintPointer.y = 0;
            } else if(pos.x >= tintRect.right && pos.y < tintRect.top) {
                tintPointer.x = 255;
                tintPointer.y = 0;
            } else if(pos.x >= tintRect.right && pos.y >= tintRect.bottom) {
                tintPointer.x = 255; 
                tintPointer.y = 255;
            } else if(pos.x < tintRect.left && pos.y >= tintRect.bottom) {
                tintPointer.x = 0;
                tintPointer.y = 255;
            } else if(pos.x < tintRect.left) {
                tintPointer.x = 0;
                tintPointer.y = pos.y - tintRect.top;
            }  else if(pos.x >= tintRect.right) {
                tintPointer.x = 255;
                tintPointer.y = pos.y - tintRect.top;
            } else if(pos.y < tintRect.top) {
                tintPointer.x = pos.x - tintRect.left;
                tintPointer.y = 0; 
            } else if(pos.y >= tintRect.bottom) {
                tintPointer.x = pos.x - tintRect.left;
                tintPointer.y = 255; 
            }
        }

        rgb = getColourOnTintCanvas();
        pickedColour.r = rgb.r;
        pickedColour.g = rgb.g;
        pickedColour.b = rgb.b;
        tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
        var currentColour = document.getElementById('currentColour');
        currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
        assignHTMLValues();

        // Draw the tint pointer because it has moved
        drawTintPointer();
    } else if(canMoveHuePointer === true) {
        var hueRect = hueCanvas.getBoundingClientRect();
        if(mouseIsHoveringCanvas(hueCanvas)) {
            huePointer.y = mousePos.y - hueRect.top;
        } else {
            var pos = mousePos;
            if(pos.x < hueRect.left && pos.y < hueRect.top) {
                huePointer.x = 0;
                huePointer.y = 0;
            } else if(pos.x >= hueRect.right && pos.y < hueRect.top) {
                huePointer.x = 0;
                huePointer.y = 0;
            } else if(pos.x >= hueRect.right && pos.y >= hueRect.bottom) {
                huePointer.x = 0; 
                huePointer.y = 255;
            } else if(pos.x < hueRect.left && pos.y >= hueRect.bottom) {
                huePointer.x = 0;
                huePointer.y = 255;
            } else if(pos.x < hueRect.left) {
                huePointer.x = 0;
                huePointer.y = pos.y - hueRect.top;
            }  else if(pos.x >= hueRect.right) {
                huePointer.x = 0;
                huePointer.y = pos.y - hueRect.top;
            } else if(pos.y < hueRect.top) {
                huePointer.x = pos.x - hueRect.left;
                huePointer.y = 0; 
            } else if(pos.y >= hueRect.bottom) {
                huePointer.x = pos.x - hueRect.left;
                huePointer.y = 255; 
            }
        }
        rgb = getColourOnHueCanvas();
        pickedColour.r = rgb.r;
        pickedColour.g = rgb.g;
        pickedColour.b = rgb.b;
        tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
        var currentColour = document.getElementById('currentColour');
        currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
        var paletteArrow = document.getElementById('palette-arrow');
        paletteArrow.style.top = huePointer.y - 10 + "px";
        assignHTMLValues();
        updateColourBuffer();
                
        // Apply tint based on tint pointer
        rgb = getColourOnTintCanvas();
        pickedColour.r = rgb.r;
        pickedColour.g = rgb.g;
        pickedColour.b = rgb.b;
        tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
        var currentColour = document.getElementById('currentColour');
        currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
        assignHTMLValues();
    }
    if(new Date().getTime() > colourTimer + 200) {
        colourTimer = new Date().getTime();
        socket.emit('update colour', tool.brush.colour); 
    }
}

function updateColour() {
    rgb = getColourOnHueCanvas();
    pickedColour.r = rgb.r;
    pickedColour.g = rgb.g;
    pickedColour.b = rgb.b;
    tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
    var currentColour = document.getElementById('currentColour');
    currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
    var paletteArrow = document.getElementById('palette-arrow');

    paletteArrow.style.top = (huePointer.y - 10) + "px";
    assignHTMLValues();
    updateColourBuffer();
       
    // Apply tint based on tint pointer
    rgb = getColourOnTintCanvas();
    pickedColour.r = rgb.r;
    pickedColour.g = rgb.g;
    pickedColour.b = rgb.b;
    tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
    var currentColour = document.getElementById('currentColour');
    currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
    assignHTMLValues(); 
    drawTintPointer();
}

function getScrollAmount() {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    return {x: left, y: top}; 
}

function mouseIsHoveringCanvas(canvas) {
    var pos = mousePos;
    canvasRect = canvas.getBoundingClientRect();
    if(pos.x >= canvasRect.left && pos.x <= canvasRect.right 
        && pos.y >= canvasRect.top && pos.y <= canvasRect.bottom) {
        return true;
    } else {
        return false;
    }
}

function assignHTMLValues() {
    var rValue = document.getElementById('rValue');
    rValue.value = pickedColour.r;
    var gValue = document.getElementById('gValue');
    gValue.value = pickedColour.g;
    var bValue = document.getElementById('bValue');
    bValue.value = pickedColour.b;
    var hexValue = document.getElementById('hexValue');
    hexValue.value = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
}

function getColourOnTintCanvas() {
    var x = tintPointer.x;
    var y = tintPointer.y;

    // Make sure within array bounds
    if(x >= 254) {
        x = 254;
    }
    if(y >= 254) {
        y = 254;
    }

    var data = tintCtx.getImageData(x, y, 1, 1);
    var pixels = data.data;
    var rgba = {
        r: pixels[0],
        g: pixels[1],
        b: pixels[2],
        a: pixels[3]
    };
    return rgba;
}

function getColourOnHueCanvas() {
    var y = huePointer.y;

    // Make sure within array bounds
    if(y >= 254) {
        y = 254;
    }

    var data = hueCtx.getImageData(0, y, 1, y + 1);
    var pixels = data.data;
    var rgba = {
        r: pixels[0],
        g: pixels[1],
        b: pixels[2],
        a: pixels[3]
    };
    return rgba;
}

function getColourOnCanvas(canvas, ctx){
    var rect = canvas.getBoundingClientRect();
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var x = mousePos.x - rect.left;
    var y = mousePos.y - rect.top;

    var data = ctx.getImageData(x, y, 1, 1);
    var pixels = data.data;
    var rgba = {
        r: pixels[0],
        g: pixels[1],
        b: pixels[2],
        a: pixels[3]
    };
    return rgba;
}

/**
** Helper Functions
**/

function convertRGBToHex(red, green, blue){
    var r = red.toString(16);
    var g = green.toString(16);
    var b = blue.toString(16);

    return "#" + binaryResult(r) + binaryResult(g) + binaryResult(b);
}

function convertHexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function binaryResult(col){
    return col.length === 1 ? "0" + col : col;
}

function assignRGBToDom(red, green, blue, hex){
    rgbInputs.r.value = red;
    rgbInputs.g.value = green;
    rgbInputs.b.value = blue;
    rgbInputs.hex.value = hex;
}

function convertRGBToHSV() {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}