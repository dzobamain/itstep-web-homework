const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const shapeSelect = document.getElementById('shape');
const colorPicker = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const fillToggle = document.getElementById('fillToggle');

let drawing = false;
let startX, startY;
let shapes = [];
let isFill = true; // fill mode

// Toggle fill mode
fillToggle.addEventListener('click', () => {
    isFill = !isFill;
    fillToggle.classList.toggle('active', isFill);
});

// Clear canvas
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes = [];
});

// Start drawing on mousedown
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

// Draw live preview on mousemove
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const currentX = e.offsetX;
    const currentY = e.offsetY;
    redraw(); // draw all saved shapes
    drawPreview(currentX, currentY); // draw current "live" shape
});

// Finish drawing on mouseup
canvas.addEventListener('mouseup', (e) => {
    if (!drawing) return;
    drawing = false;

    const endX = e.offsetX;
    const endY = e.offsetY;
    const shape = shapeSelect.value;
    const color = colorPicker.value;

    // Save the shape to the array
    shapes.push({ shape, color, startX, startY, endX, endY, isFill });
    redraw();
});

// Draw preview shape while dragging
function drawPreview(x2, y2) {
    const shape = shapeSelect.value;
    const color = colorPicker.value;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]); // dashed line for preview

    const w = x2 - startX;
    const h = y2 - startY;

    switch (shape) {
        case 'line':
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            break;
        case 'rect':
            ctx.beginPath();
            if (isFill) ctx.fillRect(startX, startY, w, h);
            else ctx.strokeRect(startX, startY, w, h);
            break;
        case 'triangle':
            ctx.beginPath();
            ctx.moveTo(startX, y2);
            ctx.lineTo((startX + x2) / 2, startY);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            if (isFill) ctx.fill();
            else ctx.stroke();
            break;
        case 'oval':
            ctx.beginPath();
            const centerX = (startX + x2) / 2;
            const centerY = (startY + y2) / 2;
            const radiusX = Math.abs(x2 - startX) / 2;
            const radiusY = Math.abs(y2 - startY) / 2;
            ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
            if (isFill) ctx.fill();
            else ctx.stroke();
            break;
    }

    ctx.restore();
}

// Draw all saved shapes
function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of shapes) {
        ctx.save();
        ctx.strokeStyle = s.color;
        ctx.fillStyle = s.color;
        ctx.lineWidth = 2;
        ctx.setLineDash([]); // solid line

        const w = s.endX - s.startX;
        const h = s.endY - s.startY;

        switch (s.shape) {
            case 'line':
                ctx.beginPath();
                ctx.moveTo(s.startX, s.startY);
                ctx.lineTo(s.endX, s.endY);
                ctx.stroke();
                break;
            case 'rect':
                if (s.isFill) ctx.fillRect(s.startX, s.startY, w, h);
                else ctx.strokeRect(s.startX, s.startY, w, h);
                break;
            case 'triangle':
                ctx.beginPath();
                ctx.moveTo(s.startX, s.endY);
                ctx.lineTo((s.startX + s.endX) / 2, s.startY);
                ctx.lineTo(s.endX, s.endY);
                ctx.closePath();
                if (s.isFill) ctx.fill();
                else ctx.stroke();
                break;
            case 'oval':
                ctx.beginPath();
                const centerX = (s.startX + s.endX) / 2;
                const centerY = (s.startY + s.endY) / 2;
                const radiusX = Math.abs(s.endX - s.startX) / 2;
                const radiusY = Math.abs(s.endY - s.startY) / 2;
                ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
                if (s.isFill) ctx.fill();
                else ctx.stroke();
                break;
        }
        ctx.restore();
    }
}
