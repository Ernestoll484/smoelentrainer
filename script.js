var spelers = [
{image: "img/GK.png" , name: "Tim Krul" , id:1},
{image: "img/MDL.png" , name: "Matthijs de Licht", id:2},
{image: "img/OWL.png" , name:  "Owen Wijndal", id:3},
{image: "img/DK.png" , name: "Davy Klaassen", id:4},
{image: "img/GW.png" , name: "Georginio Wijndalum", id:5},
{image: "img/MP.png" , name: "Memphis Depay", id:6},
{image: "img/SB.png" , name: "Steven Berghuis", id:7},
{image: "img/DB.png" , name: "Daley Blind", id:8},
{image: "img/LdJ.png" , name: "Luuk de Jong", id:9},
{image: "img/FdJ.png" , name: "Frenkie de Jong", id:10},
{image: "img/DD.png" , name: "Denzel Dumfries", id:11},
{image: "img/MB.png" , name: "Marco Bizot", id:12},
];
//maak een copie van alle fotos (slice)
var idSpeler = [];
var images = [];
var names = [];
var imageRow = [];
var nameRow = [];
var indexArrayImg = [];
var indexArrayName = [];

for (var i = 0; i < spelers.length; i++) {
	images.push(spelers[i].image);
	names.push(spelers[i].name);
}    
// zolang images nog een element bevat: vul een element met een image, verwijder daarna ook de image uit images
function displayImages() {
		// var tellerArray = 0
		var teller = 0
		var imgChosen = false
	while  (images.length > 0 ){
		let index = Math.floor(Math.random() * images.length);
		var img = document.createElement("img");
		let randomImage = images[index];
		indexArrayImg.push(index)
		img.setAttribute("src", randomImage);
		document.getElementById("image-container").appendChild(img);
		teller++;
		img.id = "img" + teller;
		img.className = "afb";
		img.setAttribute("data-spelerNaam", names[index])
	    imageRow.push(randomImage);
		// tellerArray.push(teller);
		// console.log(tellerArray)
		img.addEventListener("click", selectImg(teller, imgChosen));
		images.splice(index, 1);
	};
}
displayImages();
displayName()
