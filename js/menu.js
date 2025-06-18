const burger = document.getElementById('burger');
const burgerContent = document.getElementById('burgerContent');
const burgerMenuClose = document.getElementById('burgerMenuClose');

//console.log(burger, burgerContent);

burger.addEventListener('click', function() {
    burgerContent.style.display = 'flex';
});

burgerMenuClose.addEventListener('click', function() {
    burgerContent.style.display = 'none';
});
