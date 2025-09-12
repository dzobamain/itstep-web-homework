//script.js

if (typeof BORDER_RADIUS !== "undefined") {
  document.documentElement.style.setProperty('--border-radius', BORDER_RADIUS);
}

function setCookie(name, value, hours) {
  if (!USE_COOKIES) return;

  const d = new Date();
  d.setTime(d.getTime() + hours*60*60*1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  if (!USE_COOKIES) return null;

  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split('; ');

  for (let cookie of cookies) {
    const [key, val] = cookie.split('=');
    if (key === name) return val;
  }
  return null;
}

const form = document.getElementById("colorForm");
const nameInput = document.getElementById("name");
const typeInput = document.getElementById("type");
const codeInput = document.getElementById("code");

const nameError = document.getElementById("nameError");
const codeError = document.getElementById("codeError");

const palette = document.getElementById("palette");

let colors = JSON.parse(getCookie("colors") || "[]");
renderPalette();

function validateColor(name, type, code) {
  nameError.textContent = "";
  codeError.textContent = "";
  let valid = true;

  if (!name) {
    nameError.textContent = "Name is required";
    valid = false;
  } else if (colors.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    nameError.textContent = "This name already exists!";
    valid = false;
  }

  if (type === "RGB") {
    if (!/^(\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*$/.test(code)) {
      codeError.textContent = "Format: R,G,B (0-255)";
      valid = false;
    } else {
      const nums = code.split(",").map(n => parseInt(n.trim()));
      if (nums.some(n => n < 0 || n > 255)) {
        codeError.textContent = "Each number must be between 0 and 255!";
        valid = false;
      }
    }
  } else if (type === "RGBA") {
    if (!/^(\s*\d{1,3}\s*,){3}\s*(0(\.\d+)?|1(\.0)?)\s*$/.test(code)) {
      codeError.textContent = "Format: R,G,B,A (A between 0 and 1)";
      valid = false;
    } else {
      const parts = code.split(",").map(s => s.trim());
      const nums = parts.slice(0,3).map(n => parseInt(n));
      const alpha = parseFloat(parts[3]);
      if (nums.some(n => n<0||n>255) || alpha<0||alpha>1) {
        codeError.textContent = "RGB must be 0–255, A must be 0–1!";
        valid = false;
      }
    }
  } else if (type === "HEX") {
    if (!/^#([0-9A-Fa-f]{6})$/.test(code)) {
      codeError.textContent = "Format: #RRGGBB";
      valid = false;
    }
  }

  return valid;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const type = typeInput.value;
  const code = codeInput.value.trim();

  if (!validateColor(name, type, code)) return;

  colors.push({name, type, code});
  setCookie("colors", JSON.stringify(colors), 3);
  renderPalette();
  form.reset();
});

function renderPalette() {
  palette.innerHTML = "";

  colors.forEach(c => {
    const div = document.createElement("div");
    div.className = "color-box";

    let cssColor = "";
    if (c.type === "RGB") cssColor = `rgb(${c.code})`;
    else if (c.type === "RGBA") cssColor = `rgba(${c.code})`;
    else if (c.type === "HEX") cssColor = c.code;

    div.style.background = cssColor;
    div.innerHTML = `<b>${c.name}</b><br>${c.type}<br>${c.code}`;
    palette.appendChild(div);
  });

  updateButtonColor();
}

function updateButtonColor() {
  const saveButton = document.querySelector("button[type='submit']");
  if (colors.length > 0) {
    const last = colors[colors.length-1];
    let cssColor = last.type==="HEX"?last.code:
                   last.type==="RGB"?`rgb(${last.code})`:
                   `rgba(${last.code})`;
    saveButton.style.background = cssColor;
  } else {
    saveButton.style.background = "#000000";
  }
}
