document.addEventListener("keypress", controls);

a = 0; b = 0;

var racers = {
	racer_1: a,
	racer_2: b
}

var keys = [];
for (var i in racers) {
	keys.push(i);
}

var tracks = [];
for (i = 0; i < keys.length; i++) {
	tracks.push(document.getElementById(keys[i]).querySelectorAll('td'));
}

function counter(playerNumber) {
	var entry = 'racer_' + playerNumber;
	var player = racers[entry];
	return player;
}

function controls() {
	if (event.which === 13) {
		var winning_player = keys[0];
		var block = tracks[0];
		var count = racers[winning_player];
		console.log("player 1 moved");
		advance(count, winning_player, block);
	} else if (event.which = 220) {
		var winning_player = keys[1];
		var block = tracks[1];
		var count = racers.racer_2;
		console.log("player 2 moved");
		advance(count, winning_player, block);
	}
}

function advance(counter, racer, grid) {
	if (counter > grid.length) {
		alert(racer + " wins!");
	} else {
		grid[counter].nextElementSibling.className = "active";
		grid[counter + 1].previousElementSibling.className = "";
	}
}