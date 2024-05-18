(function() {
    window.loadJS = window.loadJS || 0;

    var scripts = document.getElementsByTagName("script");
    var selfScript = scripts[scripts.length - 1];
    var scriptSrc = selfScript.src;
    console.log("Script loaded: " + scriptSrc);
    window.loadJS++;
})();

let backgroundIndex = 0;

const changeBackground = () => {
    const currentBackground = document.getElementById("background1");
    const nextBackground = document.getElementById("background2");
    currentBackground.style.backgroundImage = backgrounds[backgroundIndex];
    nextBackground.style.opacity = 0;

    setTimeout(() => {
        backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
        nextBackground.style.backgroundImage = backgrounds[backgroundIndex];
        nextBackground.style.opacity = 1;
    }, 1000); // Duration of the fade transition
};

setInterval(changeBackground, 5000); // Change background every 5 seconds
