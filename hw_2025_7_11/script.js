function task1() {
    let start = parseInt(prompt("Enter range start:"));
    let end = parseInt(prompt("Enter range end:"));
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    alert("Sum: " + sum);
}

function task2() {
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    alert("GCD: " + a);
}

function task3() {
    let number = parseInt(prompt("Enter a number:"));
    let result = "";
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result += i + " ";
        }
    }
    alert("Divisors: " + result);
}

function task4() {
    let number = prompt("Enter a number:");
    alert("Number of digits: " + number.length);
}

function task5() {
    let positives = 0, negatives = 0, zeros = 0, evens = 0, odds = 0;
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Enter number ${i + 1}:`));
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;
        if (num % 2 === 0) evens++;
        else odds++;
    }
    alert(`Positives: ${positives}\nNegatives: ${negatives}\nZeros: ${zeros}\nEven: ${evens}\nOdd: ${odds}`);
}

function task6() {
    do {
        let a = parseFloat(prompt("Enter first number:"));
        let b = parseFloat(prompt("Enter second number:"));
        let sign = prompt("Enter operation (+, -, *, /):");
        let result;
        switch(sign) {
            case "+": result = a + b; break;
            case "-": result = a - b; break;
            case "*": result = a * b; break;
            case "/": result = b !== 0 ? a / b : "Division by zero!"; break;
            default: result = "Unknown operation";
        }
        alert("Result: " + result);
    } while (confirm("Solve another example?"));
}

function task7() {
    let number = prompt("Enter a number:");
    let shift = parseInt(prompt("How many digits to shift:"));
    let result = number.slice(shift) + number.slice(0, shift);
    alert("Result: " + result);
}

function task8() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;
    while (confirm(`${days[i]}. See the next day?`)) {
        i = (i + 1) % days.length;
    }
}

function task9() {
    let result = "";
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            result += `${i} × ${j} = ${i * j}\n`;
        }
        result += "\n";
    }
    alert(result);
}

function task10() {
    let min = 0, max = 100, guess;
    alert("Think of a number from 0 to 100!");
    while (true) {
        guess = Math.floor((min + max) / 2);
        let answer = prompt(`Is your number > ${guess}, < ${guess}, or == ${guess}?`);
        if (answer === "==") {
            alert("I guessed it!");
            break;
        } else if (answer === ">") {
            min = guess + 1;
        } else if (answer === "<") {
            max = guess - 1;
        } else {
            alert("Please enter only >, <, or ==");
        }
    }
}
