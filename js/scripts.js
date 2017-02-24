//business logic
var runPingPong = function(userInput) {
  var numbers = []
  var countArray = []

  for (var index = 0; index < userInput; index ++) {
  	numbers.push(userInput);
  }

  for (var i = 0; i < numbers.length; i++) {
    countArray.push(numbers[i] - i);
  }

  for (var i = 0; i < countArray.length; i++) {
    if ((countArray[i] % 3 === 0) && (countArray[i] % 15 !== 0)){
      countArray.splice(i, 1, "ping");
      countArray.reverse();
    } else if ((countArray[i] % 5 === 0) && (countArray[i] % 15 !== 0)) {
      countArray.splice(i, 1, "pong");
      countArray.reverse();
    } else if (countArray[i] % 15 === 0) {
      countArray.splice(i, 1, "ping-pong");
      countArray.reverse();
    }
  }
  return countArray;
};

//user interface logic
$(document).ready(function() {
  $("form#pingPong").submit(function() {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    var result = runPingPong(userInput);
    console.log(result);
    $(".result").text(result);
    $("#output").show();
  });
});
