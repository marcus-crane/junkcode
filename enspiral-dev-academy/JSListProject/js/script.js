var lists = {
	"Books": [{
		"Title": "The Lord of the Rings",
		"Author": "J. R. R. Tolkein"
	}, {
		"Title": "A Game of Thrones",
		"Author": "George R. R. Martin"
	}],
	"Games": [{
		"Title": "Super Metroid",
		"Developer": "Nintendo, Intelligent Systems, Nintendo R&D 1",
		"Publisher": "Nintendo",
		"Release Date": "March 19th, 1994"
	}, {
		"Title": "Gravity Rush",
		"Developer": "Project Siren",
		"Publisher": "Sony Interactive Entertainment",
		"Release Date": "February 9th, 2012"
	}, {
		"Title": "Red Faction: Guerilla",
		"Developer": "Volition",
		"Publisher": "THQ",
		"Release Date": "June 2nd, 2009"
	}],
	"Movies": [{
		"Title": "Falling Down",
		"Duration": "113 minutes",
		"Release Year": "1993"
	}, {
		"Title": "Ghost in the Shell",
		"Duration": "82 minutes",
		"Release Year": "1995"
	}],
	"TVSeries": [{
		"Title": "Broadchurch",
		"Duration": "45 minutes",
		"Episodes": "16",
		"Year": "2016"
	}, {
		"Title": "Fargo",
		"Duration": "60 minutes",
		"Episodes": "20",
		"Year": "2016"
	}, {
		"Title": "Silicon Valley",
		"Duration": "30 minutes",
		"Episodes": "21",
		"Year": "2016"
	}]
}

// Set lists equal to model
model = lists;
// Set modelKeys equal to an array containing the keys (eg; movies and tvseries)
modelKeys = Object.keys(model);

// Create a new function called showButtons()
function showButtons() {
	// Where for each key in the array of list keys (movies, tvseries etc)
	for (key in modelKeys) {
		// Append a button to the button-holder div which contains the name of each key and an onClick action to run showList with the parameter equal to the key eg; showList("movies")
		$("#button-holder").append(`<button class="button-primary" onClick=showList(${modelKeys[key]})>${modelKeys[key]}</button>`);
	}
}

// Create a new function called showList that takes a param function, inherited above.
function showList(param) {
	// First, we want to make sure the div is empty (or else appends will pile up)
	$("#wrapper").empty();
	// Then we want to append the category name to the top of the page
	$("#wrapper").prepend(`<section><h1>${param}</h1></section>`);
	// For each key in the set of keys
	$("#wrapper").append("<section><article>");
	for (key in modelKeys) {
		// Get a set of the keys available under each category
		categoryKeys = Object.keys(lists[param][key]);
		// For each categoryKey instance
		for (var i = 0; i < categoryKeys.length; i++) {
			// Append the value of that category to the article tag.
			$("article").append(`<p><i>${categoryKeys[i]}:</i>${lists[param][key][categoryKeys[i]]}</p>`);
		}
		// Append a horizontal rule to break up each outputted item
		$("article").append("<hr>");	
	}
	$("#wrapper").append("</article></section>");
	
}

showButtons()