let autoMode = false;
let interval;

// Random Gradient Generator
function randomBackground() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
    document.body.style.background = gradient;

    document.getElementById("colorCode").innerText =
        `Current: ${color1} → ${color2}`;
}

// Generate random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Predefined Themes
function setTheme(theme) {
    let gradient;

    switch (theme) {
        case "sunset":
            gradient = "linear-gradient(45deg, #ff7e5f, #feb47b)";
            break;
        case "ocean":
            gradient = "linear-gradient(45deg, #2193b0, #6dd5ed)";
            break;
        case "forest":
            gradient = "linear-gradient(45deg, #134e5e, #71b280)";
            break;
    }

    document.body.style.background = gradient;
    document.getElementById("colorCode").innerText = `Theme: ${theme}`;
}

// Auto Mode Toggle
function toggleAuto() {
    autoMode = !autoMode;

    if (autoMode) {
        interval = setInterval(randomBackground, 2000);
    } else {
        clearInterval(interval);
    }
}