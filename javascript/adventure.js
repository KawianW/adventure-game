var inventory = [];

var container = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gameButtons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
button3.style.display = "none"
var inventory = document.getElementById("inventoryItem");
var sword = false;

start();




function start(){
	inventoryItem.style.display = "none";
	title.innerHTML = "For Honor";
	console.log("Start")
	title.style.textAlign = "center"
	title.style.color = "black"
	description.style.color = "white";
	description.innerHTML = "Het spel speelt zich af in de tijd van de ridders/Vikingen en de Samoerai. Je zit zelf bij de Samoerai Factie. Je moet vechten om de oorlog tussen de samoerai, Vikingen en de Ridders voor altijd te beëindigen.";
	description.style.marginLeft = "10px";
	container.style.backgroundImage = "url('images/beginscherm.jpg')";
	button1.innerHTML = "Start";
	button1.onclick = onbutton1clicked;
	button2.style.display = "block";
	button2.innerHTML = "Audio";

}

// Button 1
function onbutton1clicked(){
	container.style.backgroundImage = "url('images/samuraiKasteel.jpg')";
	title.innerHTML = "Samurai Fort";
	title.style.color = "white";
	console.log("Samurai Fort");
	description.innerHTML = "Dit is het fort van jou factie: de Samoerai. Je word gevraagd voor het leger om ten strijden te trekken tegen de Vinkingen. Het doel is om het fort van de Vikingen te veroveren. Ga je ten strijden trekken, of ga je niet strijden.";
	description.style.color = "white";
	button1.innerHTML = "strijden";
	button2.innerHTML = "niet strijden";
	button1.onclick = strijden;
	button2.onclick = nietStrijden;
}

function strijden(){
	container.style.backgroundImage = "url('images/b892326be286e88083f3c025c92edef5.png')";
	title.innerHTML = "De reis";
	title.style.color = "black";
	console.log("De reis");
	description.innerHTML = "Je trekt ten strijden tegen de Vikingen. Het is een lange reis ernaar toe. Na drie dagen zijn jullie eindelijk in het gebied. Jullie bespreken de tactiek, maar de ene helft wilt overdag via de poort gaan en elke Viking afslachten die ze tegenkomen. De andere helft wil 's nachts het fort binnen dringen als een soort verrassinges aanval. De leider vraagt het aan jou, Wat is je keus?";
	description.style.color = "white";
	button1.innerHTML = "overdag";
	button2.innerHTML = "nacht";
	button1.onclick = overdag;
	button2.onclick = nacht;

}

function overdag(){
	container.style.backgroundImage = "url('images/army.jpg')";
	title.innerHTML = "vechten voor de poort";
	title.style.color = "white";
	console.log("Vechten voor de poort");
	description.innerHTML = "Het was jou keuze dus dat respecteerd iedereen. Jullie stormen op de poort af en breken hem open. Het is een hevige strijd. Je verslaat een Vinking met een hoge rang. Hij dropt zn zwaard, wil je deze oppakken of laten liggen?";
	description.style.color = "white";
	button1.innerHTML = "oppakken";
	button2.innerHTML = "doorgaan";
	button1.onclick = function() {
		Zwaard();
		sword = true;
		console.log(sword);
	}
	button2.onclick = doorgaan;
}

function Zwaard() {
	container.style.backgroundImage = "none";
	container.style.backgroundColor= "black";
	description.style.display = "none";
	title.style.color = "black";

	var swordImage = document.createElement("img");
	container.appendChild(swordImage);
	swordImage.src = "images/zwaard.jpg";
	swordImage.style.display = "block";
	swordImage.style.margin = "0 auto";

	swordImage.onclick = function(){
		duel();
		console.log(inventory);
		swordImage.style.display = "none";
		inventory.style.display = "block";
		inventory.src = "images/zwaard.jpg";
	};
	button1.style.display = "none";
	button2.style.display = "none";
}

function doorgaan(){
	container.style.backgroundImage = "url('images/samuraiFight.jpg')";
	title.innerHTML = "vechten voor de poort";
	console.log("Doorgaan");
	title.style.color = "black";
	description.innerHTML = "Je laat het zwaard liggen en vecht je weg door het fort totdat de leider van de Vikingen je naam roept en je uitdaagd voor een duel. Ga je dit dual aan of niet?";
	description.style.color = "white";
	button1.innerHTML = "duel";
	button2.innerHTML = "geen duel";
	button1.onclick = DUEL;
	button2.onclick = GEENduel;
}

function DUEL(){
	container.style.backgroundImage = "url('images/viking death.jpg')";
	title.innerHTML = "Duel";
	title.style.color = "white";
	console.log("Duel");
	description.innerHTML = "Je vecht tegen de leider van de Vikingen. Het gaat gelijk op totdat iemand anders van de Vikingen zich er mee gaat bemoeien en met zijn bijl je hoofd eraf hakt.";
	button1.innerHTML = "opnieuw";
	button1.onclick = opnieuw;
	button2.style.display = "none";
}opnieuw();

function GEENduel(){
	container.style.backgroundImage = "url('images/viking death.jpg')";
	title.innerHTML = "Geen duel";
	title.style.color = "white";
	console.log("Geen duel");
	description.innerHTML = "Nu heb je de leider helemaal boos gemaakt. eerst zn fort binnen vallen en dan zijn duel afslaan. je loopt weg en je draait je om. De viking leider loopt achter je aan en hakt je door midden.";
	button1.innerHTML = "opnieuw";
	button1.onclick = opnieuw;
	button2.style.display = "none";
}opnieuw();

function oppakken(){
	container.style.backgroundImage = "url('images/aramusha.jpg')";
	title.innerHTML = "Vechten om de poort";
	console.log("Oppakken");
	description.innerHTML = "Je kan nu twee zwaardern te gelijk gebruiken. Jullie vechten je weg door het fort totdat de leider van de Vikingen je naam roept en een duel met je wil aangaan. Ga je dit duel aan of niet?";
	button1.innerHTML = "duel";
	button2.innerHTML = "geen duel";
	button1.onclick = duel;
	button2.onclick = geenDuel;
}

function duel(){
	container.style.backgroundImage = "url('images/viking win.jpg')";
	title.innerHTML = "duel";
	title.style.color = "white";
	console.log("Duel");
	description.style.display = "block";
	description.innerHTML = "Je gaat het gevecht aan. Je gebruikt 1 zwaard voor dit gevecht. Het gaat gelijk op tegen de leider van de Vikingen, totdat iemand anders van de vikingen zich ermee gaat bemoeien en je probeert aan te vallen. Je trekt snel je 2e zwaard en blokkeerd deze aanval en steekt hem daarna neer. Je word boos en gaat de leider aanvallen met je 2 zwaarden. De leider is kansloos.";
	button1.style.display = "block"; 
	button1.innerHTML = "doorgaan";
	button1.onclick = einde;
}

function einde(){
	container.style.backgroundImage = "url('images/einde.jpg')";
	title.innerHTML = "Einde";
	console.log("Einde");
	title.style.color = "white";
	description.innerHTML = "Het is je gelukt om het leger van de vikingen te verzwakken door hun grootste fort over te nemen. De Samurai zijn nu de strekste factie. Maar het doel om de oorlog voor altijd te beëindigen is niet gelukt. Iedereen vecht voor eer en macht en dat zal altijd zo blijven. Dus de Samoerai zijn nu wel de sterkste factie, maar wie weet of dat over een jaar nog zo is.";
	description.style.marginLeft = "650px";
	button1.innerHTML = "Play again";
	button1.onclick = function() {
		description.style.marginLeft = "0px";
		opnieuw();
	}
	button2.style.display = "none";
}

function geenDuel(){
	container.style.backgroundImage = "url('images/viking death.jpg')";
	title.innerHTML = "Geen duel";
	console.log("Gee Duel");
	description.innerHTML = "Nu heb je de leider helemaal boos gemaakt. eerst zn fort binnen vallen en dan zijn duel afslaan. je loopt weg en je draait je om. De viking leider loopt achter je aan en hakt je door midden.";
	button1.innerHTML = "opnieuw";
	button2.style.display = "none";
}opnieuw();

	

 // button 2
function nietStrijden(){
	document.getElementById("game-container").style.backgroundImage = "url('images/wejm2va3fruy.jpg')";
	title.innerHTML = "Game over";
	console.log("Game over");
	title.style.color = "white"
	description.style.color = "white";
	description.innerHTML = "De leger leider vind het niet acceptabel en executeert je ter plekke.";
	button1.innerHTML = "opnieuw";
	button1.onclick = opnieuw;
	button2.style.display = "none";
}

function nacht(){
	container.style.backgroundImage = "url('images/y9aJxMGkQzaYfx93SYG2sZ-970-80.jpg')";
	title.innerHTML = "Soort van stealth";
	console.log("Soort van stealth");
	title.style.color = "white";
	description.innerHTML = "Jullie zetten een kamp op en wachten tot dat het donker word. Als het eindelijk donker is gaan jullie richting het fort. De scouts hebben een zwakke plek gevonden in de patrouille van de Vikingen. Als ze even niet opletten slaan jullie toe. ze worden compleet overlopen door ons leger. je komt bij een splitsing, waar ga je heen links of rechts?";
	description.style.color = "white";
	button1.innerHTML = "links";
	button2.innerHTML = "rechts";
	button1.onclick = links;
	button2.onclick	= rechts;
}

function links(){
	container.style.backgroundImage = "url('images/VikingFort.jpg')";
	title.innerHTML = "De Leider";
	console.log("De leider");
	title.style.color = "white";
	description.innerHTML = "Je slaat je weg door het fort. Je komt verschillende vijanden tegen, de een wat sterker dan de andere. Je komt aan bij het kasteel van de leider. Hij zit rustig te eten want hij weet dat het zn laatste maal zal zijn.";
	description.style.color = "white";
	button1.innerHTML = "doorgaan";
	button1.onclick = einde;
	button2.style.display = "none";
}

function rechts(){
	 container.style.backgroundImage = "url('images/shaman-feat-2.jpg')";
	 title.innerHTML = "Was nou toch maar links gegaan";
	 console.log("Was nou maar naar links gegaan");
	 title.style.color = "black";
	 description.innerHTML = "Je loopt door het fort en komt niemand meer tegen. Je gaat met je groepje uitrusten. Na een tijdje besluiten jullie om weer door te gaan. Juliie lopen door een straatje met veel zijwegen. Uit het niets komen er meer dan 20 vikingen uit de zijstraatjes, het was een val. Niemand overleefde de verrassingsaanval.";
	 description.style.color = "white";
	 button1.innerHTML = "opnieuw";
	 button1.onclick = opnieuw;
	 button2.style.display = "none";
}opnieuw();

function opnieuw(){
	start();
}

button2.onclick = function() {music();};
var startMusic = new Audio("audio/backgroundMusic.mp3");
function music(){
	console.log("Music Turned on");
	startMusic.loop = true;
	startMusic.play();
}