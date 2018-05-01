// Minimum

	var min = function(a, b) {
	  return Math.min(a, b);
	}

	console.log(min(0, 10));
	// → 0
	console.log(min(0, -10));
	// → -10

// Recursion

var isEven = function(number) {
  number = Math.abs(number);
  if (number === 1) {
    return false;
  } else if (number === 0) {
    return true;
  } else {
    return isEven(number - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Bean Counting

var countBs = function(str) {
  var count = 0;
  for (var i in str) {
    if (str.charAt(i) === "B") {
      count++;
    }
  }
  return count;
}

var countChar = function(str, letter) {
  var count = 0;
  for (var i in str) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4