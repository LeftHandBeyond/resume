/**
 * 画矩形
 * @param {Number} x 左上角x轴坐标
 * @param {Number} y 左上角y轴坐标
 * @param {Number} width 矩形宽度
 * @param {Number} height 矩形高度
 * @param {String} color 填充颜色
 */
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

/**
 * 画圆
 * @param {Number} x 圆心x轴坐标
 * @param {Number} y 圆心y轴坐标
 * @param {Number} r 半径
 * @param {String} color 填充颜色
 */
function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}
/**
 * 自由画笔
 * @param {Array} points 点组
 * @param {Number} lineWidth 线条宽度
 * @param {String} color 线条颜色
 */
function drawLine(points, lineWidth, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
}
canvas.height=window.innerHeight-document.getElementById('toolbar').offsetHeight;
canvas.width=window.innerWidth;
canvas.onmousedown = canvas.ontouchstart = function (e) {
    var event = e || window.event;
    var x = event.clientX||event.touches[0].clientX;
    var y = event.clientY||event.touches[0].clientY;
    var width;
    var height;
    var length = picHistory.length;
    var points = [{ x: x, y: y }]
    canvas.onmousemove = canvas.ontouchmove = function (e) {
        var event1 = e || window.event;
        width = (event1.clientX||event1.touches[0].clientX) - x;
        height = (event1.clientY||event1.touches[0].clientY) - y;
        if (picHistory.length > length) {
            picHistory.pop();
        }
        if (pencilType == 3) {
            points.push({ x: event1.clientX, y: event1.clientY })
        }
        picHistory.push({
            points: points,
            lineWidth: document.getElementById('lineWidth').value,
            pencilType: pencilType,
            x: x,
            y: y,
            width: width,
            height: height,
            radius: Math.sqrt(width * width + height * height),
            color: 'rgb(' + document.getElementById('R').value + ',' + document.getElementById('G').value + ',' + document.getElementById('B').value + ')'
        })
        drawAll()
    }
    canvas.onmouseup = canvas.ontouchend = function (e) {
        canvas.onmousemove = canvas.ontouchmove = null;
    }
}
document.getElementById('clear').onclick = function () {
    picHistory = [];
    drawAll()
};
document.getElementById('back').onclick = function () {
    picHistory.pop();
    drawAll();
};
document.getElementById('downLoad').onclick = function () {
    var dataURL = canvas.toDataURL("image/png");
    var pom = document.createElement('a');
    pom.href = dataURL;
    pom.setAttribute('download', '下载.png');
    document.body.appendChild(pom);
    pom.click();
    pom.remove();
};
var types = document.getElementsByName('type');
for (var i = 0; i < types.length; i++) {
    types[i].onclick = function (e) {
        pencilType = Number(this.value);
       
       types.forEach(function(e,i){
           e.style.color='white';
       })
       this.style.color='yellow';
    }
}

var ranges = document.getElementsByName('range');
for (var i = 0; i < ranges.length; i++) {
    ranges[i].onchange = ranges[i].oninput = function (e) {
        this.nextElementSibling.value = this.value;
        document.getElementById('colorBar').style.backgroundColor = 'rgb(' + document.getElementById('R').value + ',' + document.getElementById('G').value + ',' + document.getElementById('B').value + ')';
    }
}
var numbers = document.getElementsByName('numbers');
for (var i = 0; i < numbers.length; i++) {
    numbers[i].onchange = numbers[i].oninput = function (e) {
        this.previousElementSibling.value = this.value;
        document.getElementById('colorBar').style.backgroundColor = 'rgb(' + document.getElementById('R').value + ',' + document.getElementById('G').value + ',' + document.getElementById('B').value + ')';
    }
}
// document.getElementsByName('type').forEach(function (node, i) {
//     node.onclick = function (e) {
//         pencilType = Number(this.value)
//     }
// });
// document.getElementsByName('range').forEach(function (node, i) {
//     node.oninput = function (e) {
//         this.nextElementSibling.value = this.value;
//         document.getElementById('colorBar').style.backgroundColor = 'rgb(' + document.getElementById('R').value + ',' + document.getElementById('G').value + ',' + document.getElementById('B').value + ')';
//     }
// });
// document.getElementsByName('number').forEach(function (node, i) {
//     node.oninput = function (e) {
//         this.previousElementSibling.value = this.value;
//         document.getElementById('colorBar').style.backgroundColor = 'rgb(' + document.getElementById('R').value + ',' + document.getElementById('G').value + ',' + document.getElementById('B').value + ')';
//     }

// });
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function drawAll() {
    clear()
    picHistory.forEach(function (pic, index) {
        if (pic.pencilType == 1) {
            drawRect(pic.x, pic.y, pic.width, pic.height, pic.color);
        }
        else if (pic.pencilType == 2) {
            drawCircle(pic.x, pic.y, pic.radius, pic.color);
        }
        else if (pic.pencilType == 3) {
            drawLine(pic.points, pic.lineWidth, pic.color);
        }
    })
}