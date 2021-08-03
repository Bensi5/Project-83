canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_position_of_x, last_position_of_y;
colour = "black";
lineWidth = 2;
var mouseEvent = "empty";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    lineWidth = document.getElementById("width").value;
    //window.alert("Color="+colour+"lineWidth="+lineWidth);
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(last_position_of_x, last_position_of_y)
        console.log("current X= " + current_position_of_X + "currenty=" + current_position_of_Y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_X;
    last_position_of_y = current_position_of_Y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    colour = document.getElementById("colour").value;
    lineWidth = document.getElementById("width").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    current_position_of_X = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_Y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(last_position_of_x, last_position_of_y)
    console.log("current X= " + current_position_of_X + "currenty=" + current_position_of_Y);
    ctx.lineTo(current_position_of_X, current_position_of_Y);
    ctx.stroke();

    last_position_of_x = current_position_of_X;
    last_position_of_y = current_position_of_Y;
}