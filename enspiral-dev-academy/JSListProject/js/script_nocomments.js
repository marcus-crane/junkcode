var lists = {
	"Books": [{
		"Title": "Harry Potter",
		"Author": "J.K. Rowling"
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
		"Episodes": "16"
	}, {
		"Title": "Fargo",
		"Duration": "60 minutes",
		"Episodes": "20"
	}, {
		"Title": "Silicon Valley",
		"Duration": "30 minutes",
		"Episodes": "21"
	}]
}

model = lists;
modelKeys = Object.keys(model);

function showButtons() {
	for (key in modelKeys) {
		$("#button-holder").append(`<button class="button-primary" onClick=showList(${modelKeys[key]})>${modelKeys[key]}</button>`);
	}
}

function showList(param) {
	$("#wrapper").empty();
	$("#wrapper").prepend(`<section><h1>${param}</h1></section>`);
	$("#wrapper").append("<section><article>");
	for (key in modelKeys) {
		categoryKeys = Object.keys(lists[param][key]);
			
		for (var i = 0; i < categoryKeys.length; i++) {
			$("article").append(`<p><i>${categoryKeys[i]}:</i>${lists[param][key][categoryKeys[i]]}</p>`);
		}
		$("article").append("<hr>");	
	}
	$("#wrapper").append("</article></section>");
	
}

showButtons()