function task1() {
  let name = prompt("Ваше ім’я:");
  alert(`Привіт, ${name}!`);
}

function task2() {
  const yearNow = 2025;
  let birth = prompt("Ваш рік народження:");
  alert(`Вам ${yearNow - parseInt(birth)} років.`);
}

function task3() {
  let side = prompt("Довжина сторони квадрата:");
  alert(`Периметр: ${4 * parseFloat(side)}`);
}

function task4() {
  let radius = prompt("Радіус кола:");
  let area = Math.PI * Math.pow(parseFloat(radius), 2);
  alert(`Площа: ${area.toFixed(2)}`);
}

function task5() {
  let distance = prompt("Відстань (км):");
  let time = prompt("Час у годинах:");
  let speed = parseFloat(distance) / parseFloat(time);
  alert(`Потрібна швидкість: ${speed.toFixed(2)} км/год`);
}

function task6() {
  const rate = 0.92;
  let dollars = prompt("Сума в доларах:");
  alert(`У євро: ${(parseFloat(dollars) * rate).toFixed(2)}`);
}

function task7() {
  let sizeGB = prompt("Обсяг флешки (ГБ):");
  let files = Math.floor((parseFloat(sizeGB) * 1024) / 820);
  alert(`Файлів по 820 МБ: ${files}`);
}

function task8() {
  let cash = prompt("Сума в гаманці:");
  let price = prompt("Ціна шоколадки:");
  let count = Math.floor(parseFloat(cash) / parseFloat(price));
  let change = parseFloat(cash) - count * parseFloat(price);
  alert(`Можна купити: ${count}. Здача: ${change.toFixed(2)}`);
}

function task9() {
  let num = prompt("Тризначне число:");
  let reversed = num.split("").reverse().join("");
  alert(`Паліндром: ${reversed}`);
}

function task10() {
  let number = prompt("Ціле число:");
  alert(`Число ${number} — ${parseInt(number) % 2 === 0 ? 'парне' : 'непарне'}`);
}
