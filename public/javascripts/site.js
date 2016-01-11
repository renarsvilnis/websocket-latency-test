'use strict';

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

var isBlack = false;
var isMaster = false;

// port is a global variable inject in jade template
// var socket = io('http://localhost:' + port);
var url = window.location.origin;
console.log('Connecting to', url);
var socket = io(url);

var handleResize = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

var draw = function () {
  ctx.fillStyle = isBlack ? 'black' : 'grey';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(draw);
}

var btn = document.getElementById('master-click');
if (btn) {
  isMaster = true;
  btn.addEventListener('click', function () {
    isBlack = !isBlack;
    socket.emit('switchAction');
  });

  // setInterval(function ()  {
  //   socket.emit('switchAction');
  // }, 2000);
}

socket.on('init', function(data) {
  isBlack = data.isBlack;
  handleResize();
  draw();
});

socket.on('switch', function (data) {
  if (isMaster) {
    return;
  }

  isBlack = data.isBlack;
});
