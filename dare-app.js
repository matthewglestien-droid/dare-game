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
        "say a random meme",
        "do a chicken dance",
        "pretend to be zesty"
    ],
    challenge: [
        "do 20 jumping jacks",
        "hold a plank for 30 sec",
        "run in place for 1 min",
        "do 10 push ups",
        "do a handstand",
        "do 10 pull ups"
    ]
};

let lastIndex = -1;

// Get HTML elements
const dareText = document.getElementById("dareText");
const rollButton = document.getElementById("rollButton");
const modeSelect = document.getElementById("modeSelect");
const rollSound = document.getElementById("rollSound");

// Set default mode from dropdown
let currentMode = modeSelect.value;
dareText.textContent = `Mode switched to ${currentMode}! Click Roll.`;

// Update mode when user selects a different one
modeSelect.addEventListener("change", function() {
    currentMode = modeSelect.value;
    lastIndex = -1; // reset last index for new mode
    dareText.textContent = `Mode switched to ${currentMode}! Click Roll.`;
});

// Roll function
function rollDare() {
    const dares = dareModes[currentMode];
    let randomIndex;

    // Ensure the same dare doesn't repeat twice in a row
    do {
        randomIndex = Math.floor(Math.random() * dares.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    // Play sound
    rollSound.currentTime = 0;
    rollSound.play();

    // Animate text
    dareText.style.transform = "scale(1.2)";
    dareText.style.color = "#ff4b5c";

    setTimeout(() => {
        dareText.style.transform = "scale(1)";
        dareText.style.color = "#333";
    }, 300);

    // Show the dare
    dareText.textContent = "I dare you " + dares[randomIndex];
}

// Add click listener to roll button
rollButton.addEventListener("click", rollDare);
