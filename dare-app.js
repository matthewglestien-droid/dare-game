const dareModes = {
    school: [
        "call the teacher mommy or daddy instead of Mr/Mrs",
        "say you're gay to one of your friends",
        "say 'I love you' to a random girl/boy in your class",
        "fail an easy question in class",
        "in the middle of lunch, stand up and say 'I am the Lorax'",
        "in the middle of class say 'I need to go poo Mr./Mrs. Name'",
        "in the middle of class ask the teacher and say can I take a poo",
        "call the teachers by their first name"
    ],
    funny: [
        "make a silly face",
        "talk like a robot for 1 min",
        "say a random meme",
        "do a chicken dance",
        "pretend to be a zesty",
        "say something goofy/funny ",
        "say a joke",
        "do a random tiktok dance",
        "talk in a wierd voise for 1 min"
    ],
    challenge: [
        "do 20 jumping jacks",
        "hold a plank for 30 sec",
        "run in place for 1 min",
        "do 10 push ups",
        "do 10 pull ups",
        "do an arm wrestle",
        "do a hand stand",
        "do a cart wheel",
        "do a backflip",
        "do a frontflip"
    ],
};

let currentMode = "school";
let lastIndex = -1;

const rollButton = document.getElementById("rollButton");
const dareText = document.getElementById("dareText");
const modeSelect = document.getElementById("modeSelect");
const rollSound = document.getElementById("rollSound");
const settingsSound = document.getElementById("settingsSound");

const appBox = document.getElementById("appBox");

const settingsIcon = document.getElementById("settingsIcon");
const ratingIcon = document.getElementById("ratingIcon");
const creditsIcon = document.getElementById("creditsIcon");

const settingsPanel = document.getElementById("settingsPanel");
const ratingPanel = document.getElementById("ratingPanel");
const creditsPanel = document.getElementById("creditsPanel");

/* PANEL TOGGLE */
function togglePanel(panel, icon) {
    settingsSound.currentTime = 0;
    settingsSound.play();

    [settingsIcon, ratingIcon, creditsIcon].forEach(i =>
        i.classList.remove("spin")
    );

    icon.classList.add("spin");

    [settingsPanel, ratingPanel, creditsPanel].forEach(p => {
        if (p !== panel) p.classList.remove("open");
    });

    panel.classList.toggle("open");
}

settingsIcon.onclick = () => togglePanel(settingsPanel, settingsIcon);
ratingIcon.onclick = () => togglePanel(ratingPanel, ratingIcon);
creditsIcon.onclick = () => togglePanel(creditsPanel, creditsIcon);

/* COLORS */
bgColorPicker.oninput = () => {
    document.body.style.background = bgColorPicker.value;
};

boxColorPicker.oninput = () => {
    appBox.style.background = boxColorPicker.value;
};

/* MODE */
modeSelect.onchange = () => {
    currentMode = modeSelect.value;
    lastIndex = -1;
};

/* ROLL WITH FULLY WORKING ANIMATIONS */
rollButton.onclick = () => {
    const dares = dareModes[currentMode];
    let i;

    do {
        i = Math.floor(Math.random() * dares.length);
    } while (i === lastIndex);

    lastIndex = i;

    rollSound.currentTime = 0;
    rollSound.play();

    // RESET ANIMATIONS PROPERLY
    dareText.classList.remove("pop", "shake");
    appBox.classList.remove("glow");

    void dareText.offsetWidth;
    void appBox.offsetWidth;

    dareText.textContent = "I dare you to " + dares[i];

    dareText.classList.add("pop", "shake");
    appBox.classList.add("glow");
    if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

};
