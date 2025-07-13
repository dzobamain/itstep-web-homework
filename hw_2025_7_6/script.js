function showAgeCategory() {
  let age = +prompt("Ваш вік:");
  if (age >= 0 && age <= 12) alert("Ви дитина");
  else if (age <= 18) alert("Ви підліток");
  else if (age <= 60) alert("Ви дорослий");
  else alert("Ви пенсіонер");
}

function showSpecialSymbol() {
  let num = prompt("Введіть число від 0 до 9:");
  switch (num) {
    case "0": alert(")"); break;
    case "1": alert("!"); break;
    case "2": alert("@"); break;
    case "3": alert("#"); break;
    case "4": alert("$"); break;
    case "5": alert("%"); break;
    case "6": alert("^"); break;
    case "7": alert("&"); break;
    case "8": alert("*"); break;
    case "9": alert("("); break;
    default: alert("Невірне число");
  }
}

function checkDuplicateDigits() {
  let num = prompt("Введіть тризначне число:");
  let [a, b, c] = num;
  alert(a === b || a === c || b === c ? "Є однакові цифри" : "Цифри різні");
}

function isLeapYear() {
  let year = +prompt("Введіть рік:");
  alert((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    ? "Це високосний рік"
    : "Не високосний");
}

function isFiveDigitPalindrome() {
  let num = prompt("Введіть п’ятирозрядне число:");
  let reversed = num.split("").reverse().join("");
  alert(num === reversed ? "Це паліндром" : "Не паліндром");
}

function convertCurrency() {
  const usd = +prompt("Введіть кількість USD:");
  const currency = prompt("В яку валюту? (EUR, UAN, AZN)").toUpperCase();
  const rate = currency === "EUR" ? 0.92 : currency === "UAN" ? 37.5 : currency === "AZN" ? 1.7 : null;
  alert(rate ? `Результат: ${(usd * rate).toFixed(2)} ${currency}` : "Невірна валюта");
}

function calculateDiscount() {
  const total = +prompt("Сума покупки:");
  const discount = total >= 500 ? 0.07 : total >= 300 ? 0.05 : total >= 200 ? 0.03 : 0;
  alert(`До сплати: ${(total * (1 - discount)).toFixed(2)} грн`);
}

function checkCircleInSquare() {
  const circleLength = +prompt("Довжина кола:");
  const squarePerimeter = +prompt("Периметр квадрата:");
  const diameter = circleLength / Math.PI;
  const side = squarePerimeter / 4;
  alert(diameter <= side ? "Коло поміститься в квадрат" : "Не поміститься");
}

function quizWithThreeQuestions() {
  let score = 0;
  if (prompt("Сонце — це: (1) Планета (2) Зірка (3) Астероїд") === "2") score += 2;
  if (prompt("2 + 2 * 2 = ? (1) 6 (2) 8 (3) 12") === "1") score += 2;
  if (prompt("Київ — це столиця: (1) Польщі (2) України (3) Угорщини") === "2") score += 2;
  alert(`Ваш результат: ${score} балів`);
}

function showNextDate() {
  let day = +prompt("День:");
  let month = +prompt("Місяць:");
  let year = +prompt("Рік:");
  let maxDay = 31;

  if ([4, 6, 9, 11].includes(month)) maxDay = 30;
  else if (month === 2) {
    const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    maxDay = isLeap ? 29 : 28;
  }

  day++;
  if (day > maxDay) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  alert(`Наступна дата: ${day}.${month}.${year}`);
}
