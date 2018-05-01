// Rather than mess around with Content-Type headers, a cors proxy is easier which is
// what I'm using below
apiURL = "http://cors.io?u=http://quotes.stormconsultancy.co.uk/random.json";
// An array to store the colours use for the background
colours = ['#F5FFC6', '#B4E1FF', '#AB87FF', '#FFACE4', '#C1FF9B', '#8892B6', '#85EADC', '#6EE384', '#E1AA7D', '#34F6F2', '#FC6471', '#85CB33', '#59C3C3', '#F45B69']

function update() {
	// Create a new connection and send a request for the JSON file
	var connection = new XMLHttpRequest();
	connection.open("GET", apiURL, false);
	connection.send();

	// parse the JSON into a local JS object
	response = JSON.parse(connection.response);

	// Set the following elements to their respective JS object values
	document.getElementById("author").innerHTML = response.author;
	document.getElementById("quote").innerHTML = response.quote;

	// Rather than use Twitter's JS, this is just as alright and is smaller in size
	// than adding a whole extra bunch of JS
	tweet = "https://twitter.com/intent/tweet?text=" + response.quote + " - " + response.author + '"';
	colourize();
}

function colourize() {
	// When update() runs, set the body background to a random value from the
	// colours array that's between 0 and the length of colours
	num = Math.floor(Math.random() * (colours.length - 0));
	document.bgColor = colours[num];
}


// Run update the first time so we start with a quote and bg colour
update();