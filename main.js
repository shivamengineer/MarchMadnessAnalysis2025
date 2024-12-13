const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var margin = 12;

var b = new BracketBox("Gonzaga", 1, "west");
var b2 = new BracketBox("UMBC", 16, "west");

function clearscreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    clearscreen();

    b.drawBox(100, 100, 120, margin);
    b2.drawBox(100, 150, 120, margin);

    b.drawBox(250, 125, 120, margin);

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.lineWidth = 3;
    ctx.moveTo(220, 100 - margin);
    ctx.lineTo(220, 150 - margin);
    ctx.stroke();
    ctx.moveTo(220, 125 - margin);
    ctx.lineTo(250, 125 - margin);
    ctx.stroke();
}

function update(){
    draw();
}

setInterval(update, 16);