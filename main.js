var menuBtn = document.querySelector('.head-menu');
var closeBtn = document.querySelector('.head-close');
var bodyBar = document.querySelector('.body-bar');
var mainHidden = document.querySelector('.main-hidden');

menuBtn.onclick = function() {
    bodyBar.classList.add(`active`);
    mainHidden.style.display = 'block';
}

closeBtn.onclick = function() {
    bodyBar.classList.remove(`active`);
    mainHidden.style.display = 'none';

}