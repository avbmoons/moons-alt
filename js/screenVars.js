const screen = window.screen;

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

console.log(screenWidth, 'x', screenHeight);

const screenCoeff = screenHeight/screenWidth; 
//console.log('screenCoeff ' + screenCoeff);

let parags = [];
parags = document.querySelectorAll("p");

let butts = [];
butts = document.querySelectorAll("button");

let links =[];
links = document.querySelectorAll("a");

const btnMore = document.getElementById('btnMore');
const btnProjects = document.getElementById('btnProjects');
const selfinfoBtnBlock = document.getElementById('selfinfoBtnBlock');
const selfinfoBtnBox = document.getElementById('selfinfoBtnBox');

const mainLeft = document.getElementById('mainLeft');
const mainRight = document.getElementById('mainRight');

paragsFont();
buttsFont();
btnMorePadd();

window.addEventListener('resize', function() {
    this.location.reload();
});

function fontSizeVh(fontPixel, screenHeight) {
    return (fontPixel * 100) / screenHeight;
};
function fontSizeVw(fontPixel, screenWidth) {
    return (fontPixel * 100) / screenWidth;
};

function paragsFont() {
    parags.forEach(parag => {
    let paragCompStyles = window.getComputedStyle(parag);
    let paragFontSize = paragCompStyles.getPropertyValue("font-size");
    let currentParagFontSize = parseInt(paragFontSize);
    
    let paragColor = paragCompStyles.getPropertyValue("color");

    let paragFontVh = fontSizeVh(currentParagFontSize, screenHeight);
    let paragFontVhRound = paragFontVh.toFixed(4);

    let paragFontVw = fontSizeVh(currentParagFontSize, screenWidth);
    let paragFontVwRound = paragFontVw.toFixed(4);

    if (screenWidth >= screenHeight && screenWidth < 1024) {
        parag.style.fontSize = paragFontVwRound + 'vw';
    } else if (screenWidth >= screenHeight && screenWidth >= 1024) {
        parag.style.fontSize = currentParagFontSize;
    } else {
        parag.style.fontSize = paragFontVhRound + 'vh';
    }

});
};

function buttsFont() {
    butts.forEach(butt => {
    let buttCompStyles = window.getComputedStyle(butt);
    let buttFontSize = buttCompStyles.getPropertyValue("font-size");
    let currentButtFontSize = parseInt(buttFontSize);
    let buttColor = buttCompStyles.getPropertyValue("color");

    let buttFontVh = fontSizeVh(currentButtFontSize, screenHeight);
    let buttFontVhRound = buttFontVh.toFixed(4);

    let buttFontVw = fontSizeVh(currentButtFontSize, screenWidth);
    let buttFontVwRound = buttFontVw.toFixed(4);

    if (screenWidth >= screenHeight && screenWidth < 1024) {
        butt.style.fontSize = buttFontVwRound + 'vw';
    } else if (screenWidth >= screenHeight && screenWidth >= 1024) {
        butt.style.fontSize = currentButtFontSize;
    } else {
        butt.style.fontSize = buttFontVhRound + 'vh';
    }

});
}

function linksFont() {
    links.forEach(link => {
    let linkCompStyles = window.getComputedStyle(link);
    let linkFontSize = linkCompStyles.getPropertyValue("font-size");
    let currentLinkFontSize = parseInt(linkFontSize);
    let linkColor = linkCompStyles.getPropertyValue("color");

    let linkFontVh = fontSizeVh(currentLinkFontSize, screenHeight);
    let linkFontVhRound = linkFontVh.toFixed(4);

    let linkFontVw = fontSizeVh(currentLinkFontSize, screenWidth);
    let linkFontVwRound = linkFontVw.toFixed(4);

    if (screenWidth >= screenHeight && screenWidth < 1024) {
        link.style.fontSize = linkFontVwRound + 'vw';
    } else if (screenWidth >= screenHeight && screenWidth >= 1024) {
        link.style.fontSize = currentLinkFontSize;
    } else {
        link.style.fontSize = linkFontVhRound + 'vh';
    }
});
}

function btnMorePadd() {

    if (screenWidth >= screenHeight) {
        selfinfoBtnBlock.style.height = "fit-content";
        selfinfoBtnBox.style.height = "inherit";
        btnMore.style.height = "auto";
        btnMore.style.paddingTop = "10px";
        btnMore.style.paddingBottom = "10px";
        btnMore.style.paddingLeft = "30px";
        btnMore.style.paddingRight = "30px";
    }

    if (screenWidth < screenHeight && screenWidth <= 1024 && screenWidth > 768) {
        btnMore.style.paddingLeft = "50px";
        btnMore.style.paddingRight = "50px";
        btnMore.style.height = "5vh";   ////
        btnProjects.style.paddingLeft = "50px";
    }

    if (screenWidth <= 768) {
        selfinfoBtnBox.style.justifyContent = "center";
        btnProjects.style.textAlign = "center";
    }

    if (screenHeight <= 376) {
        mainLeft.style.justifyContent = "center";
        mainRight.style.justifyContent = "center";
    }
}
