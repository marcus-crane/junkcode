// Looping a Triangle

var char = "#";

for (i = 0; i < 7; i++) {
  console.log(char);
  char += "#";
}

// FizzBuzz

for (i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}

// Chess Board

var size = 8;
var board = "";
var lastchar = "#";

for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
    	if (lastchar === " ") {
          board += "#";
          lastchar = "#";
        } else if (lastchar === "#") {
          board += " ";
          lastchar = " ";
        }
	}

  	board += "\n";
  	
  	if (i % 2 === 0) {
      lastchar = " ";
    } else {
      lastchar = "#";
    }
}
console.log(board);