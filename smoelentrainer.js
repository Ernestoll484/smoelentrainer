//pages
const start = document.querySelector('.start');

start.onclick = function(){
	window.location.assign('players.html');
}

const settings = document.querySelector('.settings');

settings.onclick = function(){
	window.location.assign('settings.html');
}


//colors
const green = document.querySelector('.green');

green.onclick = function() {
  const rndCol = '#008000';
  document.body.style.backgroundColor = rndCol;
}

//localStorage.setItem("green", green);

const red = document.querySelector('.red');
 
red.onclick = function() {
  const rndCol = '#FF0000';
  document.body.style.backgroundColor = rndCol;
}

//localStorage.setItem("red", red);

const blue = document.querySelector('.blue');

blue.onclick = function() {
  const rndCol = '#00BFFF';
  document.body.style.backgroundColor = rndCol;
}

//localStorage.setItem("blue", blue);