var ctx = document.querySelector("canvas").getContext("2d");
var ctxColor = "rgba(255, 58, 32, 0.87)";

function drawTower(){
    ctx.fillStyle = ctxColor;
    ctx.fillRect(50, 475, 400, 15);
    ctx.fillRect(100, 75, 15, 400);
    ctx.fillRect(100, 60, 250, 15);
    ctx.fillRect(335, 75, 15, 50);
}

function drawHead(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.lineWidth=5;
    ctx.arc(342.5, 152, 25, 0, Math.PI*2, true);
    ctx.stroke();
}

function drawBody(){
    ctx.fillStyle = ctxColor;
    ctx.fillRect(339, 179, 7, 70);
}

function drawRigthArm(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(339, 179);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

function drawLeftArm(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(345, 179);
    ctx.lineTo(384, 200);   
    ctx.stroke();
}

function drawRigthLeg(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(341, 247);
    ctx.lineTo(300, 300);   
    ctx.stroke();
}

function drawLeftLeg(){
    ctx.beginPath();
    ctx.strokeStyle = ctxColor;
    ctx.moveTo(343, 247);
    ctx.lineTo(384, 300);
    ctx.stroke();
}