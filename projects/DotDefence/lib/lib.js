document.onmousemove = moveDefence;
var width = 1200;
var height = 600;
var ballPerSeconds = 1;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var allBalls = new Array();
var defence = {
    start: 0,
    end: (Math.PI) / 3,
    jiao: 0
};
var HP = 100;
var draw = drawInGame;
var score = 0;
function moveDefence(evt) {
    if (!evt) {
        evt = window.event
    }
    var xx = evt.clientX - width * 0.5;
    var yy = evt.clientY - height * 0.5;
    if (yy >= 0 && xx >= 0) {
        defence.jiao = Math.atan(yy / xx)
    }
    if (yy >= 0 && xx < 0) {
        defence.jiao = Math.PI + Math.atan(yy / xx)
    }
    if (yy < 0 && xx >= 0) {
        defence.jiao = Math.atan(yy / xx)
    }
    if (yy < 0 && xx < 0) {
        defence.jiao = Math.atan(yy / xx) - Math.PI
    }
    defence.start = defence.jiao - (Math.PI / 3);
    defence.end = defence.jiao + (Math.PI / 3)
}
function Ball() {
    if (Math.random() <= 0.25) {
        this.x = 2;
        this.y = height * Math.random()
    }
    if ((Math.random() > 0.25) && (Math.random() <= 0.5)) {
        this.x = 998;
        this.y = height * Math.random()
    }
    if ((Math.random() < 0.75) && (Math.random() > 0.5)) {
        this.y = 798;
        this.x = width * Math.random()
    }
    if (Math.random() >= 0.75) {
        this.y = 2;
        this.x = width * Math.random()
    }
    this.act = function() {
        this.x = this.x + 10;
        this.y = this.y + 10
    }
}
function create() {
    var cre;
    for (cre = 0; cre < ballPerSeconds; cre++) {
        var ball = new Ball();
        allBalls.push(ball)
    }
}
function drawEnd() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    ctx.font = "Bold 60px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("游戏结束", width * 0.5, height * 0.5);
    ctx.font = "Bold 40px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("得分:", width * 0.5, height * 0.5 + 60);
    ctx.font = "Bold 40px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(score.toString(), width * 0.5, height * 0.5 + 100)
}
function drawInGame() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    var i;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, 60, defence.start, defence.end, false);
    ctx.fillStyle = "#00A67C";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, 56, 0, Math.PI * 2, true);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = "#B7F200";
    ctx.fill();
    for (i = 0; i < allBalls.length; i++) {
        ctx.beginPath();
        ctx.arc(allBalls[i].x, allBalls[i].y, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = "#EF002A";
        ctx.fill()
    }
    ctx.fillStyle = "#DE0052";
    ctx.fillRect(0, 0, HP * 3, 25);
    ctx.font = "Bold 20px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(HP.toString(), 20, 20);
    ctx.font = "Bold 20px Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "#EE6B9C";
    scoretext = "得分：" + score.toString();
    ctx.fillText(scoretext, 20, 50)
}
function act() {
    for (var i = 0; i < allBalls.length; i++) {
        var ax = width * 0.5 - allBalls[i].x;
        var by = height * 0.5 - allBalls[i].y;
        var movex = 1.5 * ax * (1.5 / Math.sqrt(ax * ax + by * by));
        var movey = 1.5 * by * (1.5 / Math.sqrt(ax * ax + by * by));
        allBalls[i].x = allBalls[i].x + movex;
        allBalls[i].y = allBalls[i].y + movey
    }
}
function check() {
    for (var i = 0; i < allBalls.length; i++) {
        var ax = allBalls[i].x - width * 0.5;
        var by = allBalls[i].y - height * 0.5;
        var distance = Math.sqrt(ax * ax + by * by);
        var angel;
        if (by >= 0 && ax >= 0) {
            angel = Math.atan(by / ax)
        }
        if (by >= 0 && ax < 0) {
            angel = Math.PI + Math.atan(by / ax)
        }
        if (by < 0 && ax >= 0) {
            angel = Math.atan(by / ax)
        }
        if (by < 0 && ax < 0) {
            angel = Math.atan(by / ax) - Math.PI
        }
        if (distance <= 63 && distance >= 57 && ((angel > defence.start && angel < defence.end) || (angel + 2 * Math.PI > defence.start && angel + 2 * Math.PI < defence.end) || (angel - 2 * Math.PI > defence.start && angel - 2 * Math.PI < defence.end))) {
            allBalls.splice(i, 1);
            if (HP < 100)
                HP = HP + 2;
            score = score + Math.floor(1000 / HP)
        }
        if (distance <= 5) {
            allBalls.splice(i, 1);
            HP = HP - 10;
            if (HP < 0) {
                draw = drawEnd;
                window.clearInterval(int)
            }
        }
    }
}
function start() {
    act();
    check();
    draw()
}
var int = setInterval("start()", 30);
setInterval("create()", 500);
