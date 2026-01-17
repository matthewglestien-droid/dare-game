// Dares for each mode
const dareModes = {
    school: [
        "call the teacher mommy or daddy instead of Mr/Mrs",
        "say you're gay to one of your friends",
        "say 'I love you' to a random girl/boy in your class",
        "fail an easy question in class",
        "in the middle of lunch, stand up and say 'I am the Lorax'",
        "in the middle of class say 'I need to go poo Mr./Mrs. Name'"
    ],
    funny: [
        "make a silly face",
        "talk like a robot for 1 min",
        "say a  random meme",
        "do a chicken dance",
        "pretend to be a zesty"
    ],
    challenge: [
        "do 20 jumping jacks",
        "hold a plank for 30 sec",
        "run in place for 1 min",
        "do 10 pull ups",
        "do a handstand",
        "do 10 push ups"
    ]
};

let lastIndex = -1;

// HTML elements
const dareText = document.getElementById("dareText");
const rollButton = document.getElementById("rollButton");
const modeSelect = document.getElementById("modeSelect");
const rollSound = document.getElementById("rollSound");
const bgColorPicker = document.getElementById("bgColorPicker");
const boxColorPicker = document.getElementById("boxColorPicker");
const settingsIcon = document.getElementById("settingsIcon");
const settingsPanel = document.getElementById("settingsPanel");
const appBox = document.getElementById("appBox");

// Default mode
let currentMode = modeSelect.value;
dareText.textContent = `Mode switched to ${currentMode}! Click Roll.`;

// Toggle settings panel with animation
settingsIcon.addEventListener("click", () => {
    settingsPanel.classList.toggle("open");
    settingsIcon.classList.toggle("open"); // rotate gear
});

// Change page background color
bgColorPicker.addEventListener("input", function() {
    document.body.style.background = bgColorPicker.value;
});

// Change middle box color
boxColorPicker.addEventListener("input", function() {
    appBox.style.background = boxColorPicker.value;
});

// Update mode when changed
modeSelect.addEventListener("change", function() {
    currentMode = modeSelect.value;
    lastIndex = -1; 
    dareText.textContent = `Mode switched to ${currentMode}! Click Roll.`;
});

// Roll dare function
function rollDare() {
    const dares = dareModes[currentMode];
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * dares.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    // Play sound
    rollSound.currentTime = 0;
    rollSound.play();

    // Animate text temporarily
    dareText.style.transform = "scale(1.2)";
    dareText.style.color = "#ff4b5c"; // temporary animation

    setTimeout(() => {
        dareText.style.transform = "scale(1)";
        dareText.style.color = "#333"; // always stays readable inside box
    }, 300);

    dareText.textContent = "I dare you " + dares[randomIndex];
}

// Roll button click
rollButton.addEventListener("click", rollDare);
