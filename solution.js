function fiftyCut(name) {
  try {
    return name.substring(name.length / 2);
  } catch (err) {
    console.log(err.message);
  }
}

fiftyCut("anna");

function squareRoot(number) {
  return Math.sqrt(number);
}

squareRoot(9);

function squaredList(numbers) {
  var outputList = [];

  for (var index = 0; index < numbers.length; index++) {
    outputList.push(numbers[index] * 2);
  }

  return outputList;
}

squaredList([1, 2, 3, 4, 5]);

function isPrime(num) {
  for (var i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

isPrime(4);
