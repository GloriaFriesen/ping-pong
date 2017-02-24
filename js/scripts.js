//business logic

var input = 20
var numbers = []
var countArray = []

for (var index = 0; index < input; index ++) {
	numbers.push(input);
}

for (var i = 0; i < numbers.length; i++) {
  countArray.push(numbers[i] - i);
}

for (var i = 0; i < countArray.length; i++) {
  if ((countArray[i] % 3 === 0) && (countArray[i] % 15 !== 0)){
  countArray.splice(i, 1, "ping");
} else if ((countArray[i] % 5 === 0) && (countArray[i] % 15 !== 0)) {
    countArray.splice(i, 1, "pong");
  } else if (countArray[i] % 15 === 0) {
    countArray.splice(i, 1, "ping-pong");
  }
}
