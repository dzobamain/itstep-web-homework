// 1
function task1() {
    const a = +prompt("Enter first number:");
    const b = +prompt("Enter second number:");
    if (a < b) alert(-1);
    else if (a > b) alert(1);
    else alert(0);
}

// 2
function task2() {
    const n = +prompt("Enter number to calculate factorial:");
    function factorial(num) {
        return (num <= 1) ? 1 : num * factorial(num - 1);
    }
    alert(`Factorial of ${n} is ${factorial(n)}`);
}

// 3
function task3() {
    const d1 = prompt("Enter first digit:");
    const d2 = prompt("Enter second digit:");
    const d3 = prompt("Enter third digit:");
    const result = d1 + d2 + d3;
    alert(`Number: ${result}`);
}

// 4. Rectangle area
function task4() {
    const length = +prompt("Enter length:");
    const width = prompt("Enter width (leave empty if square):");
    const area = width ? length * +width : length * length;
    alert(`Area: ${area}`);
}

// 5
function task5() {
    const num = +prompt("Enter number to check:");
    alert(isPerfect(num) ? "Perfect number!" : "Not perfect.");
}

function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

// 6
function task6() {
    const min = +prompt("Enter min value:");
    const max = +prompt("Enter max value:");
    let result = "";
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) result += i + " ";
    }
    alert(`Perfect numbers: ${result || "None"}`);
}

// 7
function task7() {
    const h = prompt("Hours:");
    const m = prompt("Minutes:") || "00";
    const s = prompt("Seconds:") || "00";
    alert(`${h}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`);
}

// 8
function task8() {
    const h = +prompt("Hours:");
    const m = +prompt("Minutes:");
    const s = +prompt("Seconds:");
    const total = h * 3600 + m * 60 + s;
    alert(`Total seconds: ${total}`);
}

// 9
function task9() {
    let total = +prompt("Enter total seconds:");
    const h = Math.floor(total / 3600);
    total %= 3600;
    const m = Math.floor(total / 60);
    const s = total % 60;
    alert(`${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
}

// 10
function task10() {
    alert("Enter first date:");
    const h1 = +prompt("Hours:");
    const m1 = +prompt("Minutes:");
    const s1 = +prompt("Seconds:");

    alert("Enter second date:");
    const h2 = +prompt("Hours:");
    const m2 = +prompt("Minutes:");
    const s2 = +prompt("Seconds:");

    const sec1 = h1 * 3600 + m1 * 60 + s1;
    const sec2 = h2 * 3600 + m2 * 60 + s2;

    let diff = Math.abs(sec1 - sec2);
    const h = Math.floor(diff / 3600);
    diff %= 3600;
    const m = Math.floor(diff / 60);
    const s = diff % 60;

    alert(`Difference: ${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
}
