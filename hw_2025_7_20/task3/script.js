document.getElementById("styleForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const text = document.getElementById("textInput").value;
  const color = document.getElementById("colorInput").value;
  const size = document.getElementById("sizeInput").value;
  const bold = document.getElementById("boldInput").checked;
  const italic = document.getElementById("italicInput").checked;

  const output = document.getElementById("styledOutput");

  output.textContent = text;
  output.style.color = color;
  output.style.fontSize = size;
  output.style.fontWeight = bold ? "bold" : "normal";
  output.style.fontStyle = italic ? "italic" : "normal";
});
