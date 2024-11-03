// Scroll to transform navbar
window.onscroll = function() {
    var navbar = document.querySelector(".header")
    if(window.pageYOffset > 100 ) {
        navbar.classList.add("henshin")
    } else {
        navbar.classList.remove("henshin")
    }
}

// Hide show navbar
var header = document.getElementById('header');
var moblieMenu = document.getElementById('moblie-menu');
var headerHeight = header.clientHeight;
//đóng mở moblie menu
moblieMenu.onclick=function(){
    var isClose = header.clientHeight===headerHeight ;
    // có bug ìf ss trực tiếp clientHeight === 43;
    if(isClose){
        header.style.height='auto';
    }else{
        header.style.height='43px';
    }
}

//tự động đóng menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i=0;i<menuItems.length;i++){
    var menuItem=menuItems[i];

    menuItem.onclick= function(event) {       
        header.style.height=null;
    }

}

// Get all project images
let projectImages = document.querySelectorAll('.project__item-img');
let coverImage = document.querySelector('.cover-image');
let coverImageClose = document.querySelector('.cover-image__close-icon');
let coverImageSrc = document.querySelector('.cover-image__img-src img');
let coverImageSpan = document.querySelector('.cover-image__img-span');

// Add click event to each project image
projectImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Set the src of the cover image to the src of the clicked image
        coverImageSrc.src = image.src;

        // Set the span text to the alt text of the clicked image
        coverImageSpan.textContent = image.alt;

        // Show the cover image div
        coverImage.style.display = 'block';
    });
});

// Add click event to the close icon
coverImageClose.addEventListener('click', function() {
    // Hide the cover image div
    coverImage.style.display = 'none';
});
