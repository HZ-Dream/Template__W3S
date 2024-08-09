var menuBtn = document.querySelector('.navbar-mobile__menu'); // Select the menu button
var menuBars = document.querySelector('.navbar-menu__list'); // Select the menu list

menuBtn.addEventListener('click', () => {
    menuBars.classList.toggle('block');
    // toggole sẽ thêm nếu không có hoặc xóa khi đã có
});
