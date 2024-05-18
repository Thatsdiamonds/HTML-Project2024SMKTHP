(function() {
    window.loadJS = window.loadJS || 0;

    var scripts = document.getElementsByTagName("script");
    var selfScript = scripts[scripts.length - 1];
    var scriptSrc = selfScript.src;
    console.log("Script loaded: " + scriptSrc);
    window.loadJS++;
})();

const dynamicText = document.querySelector("#typingSelect");
const words = [
    "Technologies Problem Solver.",
    "Artificial Intelligence.",
    "Network Defender.",
    "IOT's."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 60);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 500);
    }
};

typeEffect();
