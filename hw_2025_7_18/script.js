// 1
function task1() {
  const a = +prompt("Enter base (a):");
  const b = +prompt("Enter exponent (b):");

  function power(a, b) {
    if (b === 0) return 1;
    return a * power(a, b - 1);
  }

  alert(`${a}^${b} = ${power(a, b)}`);
}

// 2
function task2() {
  const a = +prompt("Enter first number:");
  const b = +prompt("Enter second number:");

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  alert(`GCD: ${gcd(a, b)}`);
}

// 3
function task3() {
  let number = prompt("Enter a number:");

  function maxDigit(numStr, max = 0) {
    if (numStr.length === 0) return max;
    const digit = +numStr[0];
    return maxDigit(numStr.slice(1), digit > max ? digit : max);
  }

  alert(`Max digit: ${maxDigit(number)}`);
}

// 4
function task4() {
  const n = +prompt("Enter a number:");

  function isPrime(num, divisor = 2) {
    if (num <= 1) return false;
    if (divisor * divisor > num) return true;
    if (num % divisor === 0) return false;
    return isPrime(num, divisor + 1);
  }

  alert(isPrime(n) ? "Prime number" : "Not prime");
}

// 5
function task5() {
  let n = +prompt("Enter a number:");

  function primeFactors(num, divisor = 2, result = []) {
    if (num === 1) return result;
    if (num % divisor === 0) {
      result.push(divisor);
      return primeFactors(num / divisor, divisor, result);
    }
    return primeFactors(num, divisor + 1, result);
  }

  const factors = primeFactors(n);
  alert(`${n} = ${factors.join(" * ")}`);
}

// 6
function task6() {
  const position = +prompt("Enter Fibonacci position (n):");

  function fib(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }

  alert(`Fibonacci #${position} = ${fib(position)}`);
}
