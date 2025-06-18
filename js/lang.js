let theme = localStorage.getItem("theme");
console.log(theme);
let currentTheme;

document.addEventListener('DOMContentLoaded', function() {
    initTheme();
})

const page = window.location.href;
//console.log(page);
const langEng = document.querySelector("#langEng");
const langRus = document.querySelector("#langRus");
const langEngBurger = document.querySelector('#langEngBurger');
const langRusBurger = document.querySelector('#langRusBurger');


if (page.includes('index-rus.html')) {
    console.log("russian");
    langRus.style.color = "rgb(218,172,138)"; 
    langRusBurger.style.color = "rgb(218,172,138)";
    langEng.style.color = "rgb(57,114,114)";  
    langEngBurger.style.color = "rgb(57,114,114)"; 
} else if (page.includes('index.html')) {
    console.log("english");
    langRus.style.color = "rgb(57,114,114)"; 
    langRusBurger.style.color = "rgb(57,114,114)"; 
    langEng.style.color = "rgb(218,172,138)"; 
    langEngBurger.style.color = "rgb(218,172,138)";
} else {
    console.log("general");
    langRus.style.color = "rgb(57,114,114)"; 
    langRusBurger.style.color = "rgb(57,114,114)"; 
    langEng.style.color = "rgb(218,172,138)"; 
    langEngBurger.style.color = "rgb(218,172,138)";
}

langEng.addEventListener('click', function() {
    window.location = 'index.html';
    currentTheme = localStorage.getItem("theme");
    document.body.className = currentTheme;
    console.log(currentTheme);
});

langRus.addEventListener('click', function() {
    window.location = 'index-rus.html';
    currentTheme = localStorage.getItem("theme");
    document.body.className = currentTheme;
    console.log(currentTheme);
});

function initTheme() {
    if (theme !== null) {
        currentTheme = theme;
        document.body.className = currentTheme;
    } else {
        currentTheme = document.body.className;
    }

    currentTheme = document.body.className;
    console.log('current theme: ' + currentTheme);
}
