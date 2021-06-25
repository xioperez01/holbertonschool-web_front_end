function countPrimeNumbers() {
  let counter = 0;
  let isPrime;
  for (let index = 2; index <= 100; index++) {
    isPrime = true;
    for (let j = 2; j <= index; j++) {
      if (index % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      counter++;
    }
  }
  return counter;
}

const initial = performance.now();
setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}, 0);
const final = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    final - initial
  } milliseconds.`
);
