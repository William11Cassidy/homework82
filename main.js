canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty"
lastPosX = 0
lastPosY = 0
color = "black"
width = 1

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent = "mousedown"
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentmx = e.clientX - canvas.offsetLeft;
    currentmy = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentmx,currentmy,40,0,2*Math.PI)
        ctx.stroke();


    }
    lastPosX = currentmx;
    lastPosY = currentmy;
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup"
}

function eraseCanvas() {
ctx.clearRect(0,0,canvas.width,canvas.height)
}

