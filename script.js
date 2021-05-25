var players = [
{image: "img/GK.png" , name: "Tim Krul"  },
{image: "img/MDL.png" , name: "Matthijs de Licht" },
{image: "img/OWL.png" , name:  "Owen Wijndal" },
{image: "img/DK.png" , name: "Davy Klaassen" },
{image: "img/GW.png" , name: "Georginio Wijndalum" },
{image: "img/MP.png" , name: "Memphis Depay" },
{image: "img/SB.png" , name: "Steven Berghuis" },
{image: "img/DB.png" , name: "Daley Blind" },
{image: "img/LdJ.png" , name: "Luuk de Jong" },
{image: "img/FdJ.png" , name: "Frenkie de Jong" },
{image: "img/DD.png" , name: "Denzel Dumfries" }
];

var selectedimage;
var selectedName;
var checkimage;
var checkName;
var countimage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var countname = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const player = document.querySelectorAll(".players");
const namePlayer = document.querySelectorAll(".namePlayer");


//geeft border aan de spelers
function selectimage(id){
	if (selectedimage == undefined) {
		//geeft witte border aan de speler
		document.getElementById(id).classList.add("borders");
		selectedimage = id;
		checkimage = document.getElementById(id).src;
	}else{
		//removes border when another player or name is selected
		document.getElementById(selectedimage).classList.remove("borders");
		document.getElementById(id).classList.add("borders");
		selectedimage = id;
		checkimage = document.getElementById(id).src;
	}
	checkimage = checkimage.substring(checkimage.indexOf("img"));
	console.log(checkimage);
	checkMatch();
}

player.forEach(player => {
	//onclick voor despeler
	player.onclick = function(){ selectimage(player.id); }
});

//Geeft border aan de namen
function selectName(id){
	if (selectedName == undefined) {
		document.getElementById(id).classList.add("borderName");
		selectedName = id;
	}else{
		document.getElementById(selectedName).classList.remove("borderName");
		document.getElementById(id).classList.add("borderName");
		selectedName = id;
	}
	checkName = document.getElementById(id).innerHTML;
	console.log(checkName);
	checkMatch();
}

namePlayer.forEach(namePlayer => {
	//onclick voor de spelersnamen
	namePlayer.onclick = function(){ selectName(namePlayer.id); }
});

//Random images
for (var i=0; i<players.length; i++){
	var random = countimage[Math.floor(Math.random() * countimage.length)];
	var countCheck = countimage.indexOf(random);
	countimage.splice(countCheck, 1);

	document.getElementById("img-"+i).src= players[random].img;
}
