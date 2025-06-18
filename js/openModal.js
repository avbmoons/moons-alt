const modal = document.getElementById("modal");
//console.log(modal);
//console.log(modal.className);
const openModal = () => {
    //console.log(modal.className);
    if (modal.className = "hide") {
        modal.className = 'modal-block'
    }
    modal.style.display = "flex";   // "block";
};
const closeModal = () => {
    modal.classList.toggle('hide');
    //console.log(modal.className);
    //modal.style.opacity = "0";
    // setTimeout(()=> {
    //     modal.style.display = "none";
    // }, 1000);
    //modal.style.display = "none";
};

const about = document.getElementById("about");

const openAbout = () => {
    //console.log(modal.className);
    if (about.className = "hide") {
        about.className = 'modal-block'
    }
    about.style.display = "flex";   // "block";
};
const closeAbout = () => {
    about.classList.toggle('hide');
    //console.log(modal.className);
    //modal.style.opacity = "0";
    // setTimeout(()=> {
    //     modal.style.display = "none";
    // }, 1000);
    //modal.style.display = "none";
};

const btnProjectsAbout = document.getElementById("btnProjectsAbout");

btnProjectsAbout.addEventListener('click', function() {
    const modalBlock = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");
    modalBlock.style.zIndex = '99999';
    modalClose.style.zIndex = '99999';
})

// const modalProjects = document.getElementById("projects");
// //console.log(modalProjects);

// const openProjects = () => {
//     //console.log(modal.className);
//     if (modalProjects.className = "hide2") {
//         modalProjects.className = 'modal-block'
//     }
//     modalProjects.style.display = "flex";   // "block";
// };
// const closeProjects = () => {
//     modalProjects.classList.toggle('hide2');
//     //console.log(modal.className);
//     //modal.style.opacity = "0";
//     // setTimeout(()=> {
//     //     modal.style.display = "none";
//     // }, 1000);
//     //modal.style.display = "none";
// };
