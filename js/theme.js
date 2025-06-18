
const btnTheme = document.querySelector(".btn-service");
const inlineStyles = btnTheme.style;
const modalCenter = document.querySelector(".modal-center");
const modalAbout = document.querySelector("#modalAbout");
const projectItems = document.querySelectorAll(".project-item");

initTheme();

themeColors();

document.getElementById('themeToggle').addEventListener('click', function() {

    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
        localStorage.setItem("theme", "dark-theme");
        window.location.reload();
        btnTheme.style.color = '#FAFFFF';
        modalCenter.style.backgroundColor = '#0a1414';
        modalAbout.style.backgroundColor = '#0a1414';
        projectItems.forEach(projectItem => {
            projectItem.style.borderColor = '#FAFFFF';
        });
    } else {
        document.body.className = 'light-theme';
        localStorage.setItem("theme", "light-theme");
        window.location.reload();
        btnTheme.style.color = '#0a1414';
        modalCenter.style.backgroundColor = '#FAFFFF'; 
        modalAbout.style.backgroundColor = '#FAFFFF'; 
        projectItems.forEach(projectItem => {
            projectItem.style.borderColor = '#0a1414';
        });
    }
    console.log(document.body.className);
    currentTheme = document.body.className;
    console.log(currentTheme);
});

document.getElementById('themeToggleBurger').addEventListener('click', function() {
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
        localStorage.setItem("theme", "dark-theme");
        window.location.reload();
        btnTheme.style.color = '#FAFFFF'; 
        modalCenter.style.backgroundColor = '#0a1414';
        modalAbout.style.backgroundColor = '#0a1414';
        projectItems.forEach(projectItem => {
            projectItem.style.borderColor = '#FAFFFF'; 
        });
    } else {
        document.body.className = 'light-theme';
        localStorage.setItem("theme", "light-theme");
        window.location.reload();
        btnTheme.style.color = '#0a1414';
        modalCenter.style.backgroundColor = '#FAFFFF';  
        modalAbout.style.backgroundColor = '#FAFFFF';  
        projectItems.forEach(projectItem => {
            projectItem.style.borderColor = '#0a1414';
        });
    }
    console.log(document.body.className);
    currentTheme = document.body.className;
    console.log(currentTheme);
});

function themeColors() {

    if (currentTheme === 'light-theme') {
        document.body.className = 'light-theme';
        btnTheme.style.color = '#0a1414';
        modalCenter.style.backgroundColor = '#FAFFFF';  
        modalAbout.style.backgroundColor = '#FAFFFF';  
        projectItems.forEach(projectItem => {
            projectItem.style.borderColor = '#0a1414';
        });
    } else {
        document.body.className = 'dark-theme';
        btnTheme.style.color = '#FAFFFF'; 
        modalCenter.style.backgroundColor = '#0a1414';
        modalAbout.style.backgroundColor = '#0a1414';
        projectItems.forEach(projectItem => {
            projectItem.style.borderColor = '#FAFFFF';  
        });
   }
    console.log(document.body.className);
    currentTheme = document.body.className;
    console.log("load theme: " + currentTheme);
}


