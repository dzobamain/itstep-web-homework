document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const address = document.getElementById("address").value;
  const comment = document.getElementById("comment").value;

  const result = document.getElementById("result");

  result.innerHTML = `
    <p>${name}, дякуємо за замовлення.</p>
    <p>${quantity} шт. товару "${item}" буде доставлено ${date} за адресою: ${address}.</p>
    ${comment ? `<p>Коментар: ${comment}</p>` : ""}
  `;
});
