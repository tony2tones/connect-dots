var data = {
  canvas: null,
  ctx: null,
  dots: [
    { x: 200, y: 50 },
    { x: 200, y: 100 },
    { x: 200, y: 150 },
    { x: 200, y: 200 },
    { x: 250, y: 50 },
    { x: 250, y: 100 },
    { x: 250, y: 150 },
    { x: 250, y: 200 }
  ]
};

circleCollision = (c1, c2) => {
  var a = c1.r + c2.r,
    x = c1.x - c2.x,
    y = c1.y - c2.y;

  if (a > Math.sqrt(x * x + y * y)) return true;
  else return false;
};

prepCanvas = () => {
  var res = window.devicePixelRatio || 1,
    scale = 1 / res;
  data.canvas = document.getElementById("dots");
  data.ctx = data.canvas.getContext("2d");

  data.canvas.width = window.innerWidth * res;
  data.canvas.height = window.innerHeight * res;
  data.canvas.style.width = window.innerWidth + "px";
  data.canvas.style.height = window.innerHeight + "px";

  data.ctx.scale(res, res);
};

drawDots = () => {
  for (var i = 0; i < data.dots.length; i++) {
    var d = data.dots[i];
    data.ctx.beginPath();
    data.ctx.arc(d.x, d.y, 10, 0, 2 * Math.PI);
    data.ctx.fillStyle = "#777";
    data.ctx.fill();
    data.ctx.closePath();
  }
};

prepCanvas();
drawDots();
