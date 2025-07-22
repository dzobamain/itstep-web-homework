document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("messageText").value.trim();

  if (username && message) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${username}:</strong> ${message}`;

    document.getElementById("messageList").appendChild(li);

    document.getElementById("messageForm").reset();
  }
});
