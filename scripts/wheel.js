let wheel = document.querySelector("#wheel");
let spinButton = document.querySelector("button");
let options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9"
];

// Customize the text position offset
let textPositionOffset = 200; // Change this value to control the position

function createSlices() {
    let numSlices = options.length;
    let rotateAngle = 360 / numSlices;

    for (let i = 0; i < numSlices; i++) {
        let option = options[i];
        let color = getRandomUniqueColor(i, numSlices);
        let textPosition = i * rotateAngle + rotateAngle / 2 - textPositionOffset;

        let slice = document.createElement("div");
        slice.classList.add("slice");
        slice.style.background = color;
        slice.style.transform = `rotate(${i * rotateAngle}deg)`;
        wheel.appendChild(slice);

        let optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.textContent = option;
        optionDiv.style.setProperty("--angle", `${textPosition}deg`);
        wheel.appendChild(optionDiv);
    }
}

function getRandomUniqueColor(index, numSlices) {
    let hue = (360 / numSlices) * index; // Spread hues evenly
    let saturation = 100; // Full saturation
    let lightness = 50 + (Math.random() * 25); // Vary lightness slightly

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function spinWheel() {
    createSlices();
    let randomAngle = 360 * (4 + Math.floor(Math.random() * 4)); // Rotate multiple times
    wheel.style.transform = `rotate(${randomAngle}deg)`;
    wheel.style.transition = "transform 5s ease-in-out";
}

spinButton.addEventListener("click", spinWheel);
createSlices();
