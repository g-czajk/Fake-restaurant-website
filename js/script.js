// HEADER SLIDER

let activeElement = 0;
const timeChange = 8000;

const header = document.querySelector('header');
const title = document.querySelector('.title');
const titleH1 = document.querySelector('.title h1');
const titleParagraph = document.querySelector('.title p');


const titleH1Change = ['Lorem', 'Ipsum', 'Explicabo'];
const titleParagraphChange = ['Quos optio saepe enim facilis rem.', 'Lorem, ipsum dolor sit amet consectetur adipisicing.', 'Iste quae asperiores magnam explicabo.'];
const titleMove = ['position-1', 'position-2', 'position-3'];

function changeElement() {
    activeElement++;
    if (activeElement == titleH1Change.length) {
        activeElement = 0;
    }

    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight) {
        header.style.backgroundImage = `url(../Strona-restauracja/img/restaurant_main_mobile_portrait_small_${activeElement + 1}.jpg)`;
    }

    if (window.innerWidth >= 768 && window.innerWidth < window.innerHeight) {
        header.style.backgroundImage = `url(../Strona-restauracja/img/restaurant_main_mobile_portrait_big_${activeElement + 1}.jpg)`;
    }

    if (window.innerWidth >= 520 && window.innerWidth < 900 && window.innerWidth > window.innerHeight) {
        header.style.backgroundImage = `url(../Strona-restauracja/img/restaurant_main_mobile_horizontal_small_${activeElement + 1}.jpg)`;
    }

    if (window.innerWidth >= 900 && window.innerWidth > window.innerHeight) {
        header.style.backgroundImage = `url(../Strona-restauracja/img/restaurant_main_mobile_horizontal_big_${activeElement + 1}.jpg)`;
    }

    if (window.innerWidth >= 1025 && window.innerWidth > window.innerHeight) {
        header.style.backgroundImage = `url(../Strona-restauracja/img/restaurant_main_desktop_${activeElement + 1}.jpg)`;
    }

    titleH1.textContent = titleH1Change[activeElement];
    titleParagraph.textContent = titleParagraphChange[activeElement];
    title.className = `title ${titleMove[activeElement]}`;
}

setInterval(changeElement, timeChange);

// BURGER MENU TOGGLE

const burger = document.querySelector('.burger');
const navBar = document.querySelector('nav');

function burgerToggle() {
    burger.classList.toggle('active');
    navBar.classList.toggle('show');
}

burger.addEventListener('click', burgerToggle);

// NAV SCROLL TO SECTION

const menuBtn = document.querySelectorAll('.nav-btn');
const backToTopBtn = document.querySelector('.back');

function scrollToElement(event) {
    const clickedBtnClass = event.target.classList[1];
    const clickedSectionId = document.getElementById(clickedBtnClass);
    clickedSectionId.scrollIntoView({
        behavior: 'smooth'
    })
    if (window.innerWidth <= 1024) {
        burgerToggle();
    }
}

menuBtn.forEach(function (btn) {
    btn.addEventListener('click', scrollToElement);
})

function scrollToTop() {
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth'
    })
}

backToTopBtn.addEventListener('click', scrollToTop);

// BURGER COLOR CHANGE ON SCROLL

const sectionAbout = document.querySelector('.about');
const sectionGallery = document.querySelector('.gallery');
const sectionMenuRestaurant = document.querySelector('.restaurant');
const sectionMenuBar = document.querySelector('.bar');
const sectionReservation = document.querySelector('.reservation');
const sectionContact = document.querySelector('.contact');

function burgerColorChange() {
    if (window.scrollY < header.clientHeight - (burger.clientHeight / 2 + burger.offsetTop)) {
        burger.classList.remove('dark');
    }

    if (window.scrollY > sectionAbout.offsetTop - (burger.clientHeight / 2 + burger.offsetTop) && window.scrollY < sectionGallery.offsetTop - (burger.clientHeight / 2 + burger.offsetTop)) {
        burger.classList.add('dark');
    }

    if (window.innerWidth < window.innerHeight) {
        if (window.scrollY > sectionGallery.offsetTop - (burger.clientHeight / 2 + burger.offsetTop) && window.scrollY < sectionMenuRestaurant.offsetTop - (burger.clientHeight / 2 + burger.offsetTop)) {
            burger.classList.remove('dark');
        }
    }

    if (window.scrollY > sectionMenuRestaurant.offsetTop - (burger.clientHeight / 2 + burger.offsetTop) && window.scrollY < sectionMenuBar.offsetTop - (burger.clientHeight / 2 + burger.offsetTop)) {
        burger.classList.add('dark');
    }

    if (window.scrollY > sectionMenuBar.offsetTop - (burger.clientHeight / 2 + burger.offsetTop) && window.scrollY < sectionReservation.offsetTop - (burger.clientHeight / 2 + burger.offsetTop)) {
        burger.classList.remove('dark');
    }

    if (window.scrollY > sectionReservation.offsetTop - (burger.clientHeight / 2 + burger.offsetTop) && window.scrollY < sectionContact.offsetTop - (burger.clientHeight / 2 + burger.offsetTop)) {
        burger.classList.add('dark');
    }

    if (window.scrollY > sectionContact.offsetTop - (burger.clientHeight / 2 + burger.offsetTop)) {
        burger.classList.remove('dark');
    }
}

// NAV STICK TO WINDOW TOP ON DESKTOP DEVICES

const initialNavBarOffsetTop = navBar.offsetTop;

function navFollow() {
    if (window.scrollY >= navBar.offsetTop) {
        navBar.classList.add('follow');
    }

    if (window.scrollY < initialNavBarOffsetTop) {
        navBar.classList.remove('follow');
    }
}

// GALLERY SLIDER

const galleryImage = [...document.querySelectorAll('.carousel-wrap img')];
const dots = [...document.querySelectorAll('.dots i')];
const arrows = [...document.querySelectorAll('.carousel-wrap span i')]

const slideInterval = 6000;

function changeDot() {
    const activeDotIndex = dots.findIndex(dot => dot.classList.contains('fa-circle'));
    if (activeDotIndex == dots.length - 1) {
        dots[0].className = 'fas fa-circle';
        dots[dots.length - 1].className = 'far fa-dot-circle';
    } else {
        dots[activeDotIndex].className = 'far fa-dot-circle';
        dots[activeDotIndex + 1].className = 'fas fa-circle';
    }
}

function changeImage() {
    const visibleElementIndex = galleryImage.findIndex(img => img.classList.contains('visible'));

    galleryImage[visibleElementIndex].classList.remove('visible');
    if (visibleElementIndex == galleryImage.length - 1) {
        galleryImage[visibleElementIndex].classList.remove('visible');
        galleryImage[0].classList.add('visible');
    } else {
        galleryImage[visibleElementIndex + 1].classList.add('visible');
    }
    changeDot()
}

let indexInterval = setInterval(changeImage, slideInterval);

function clickDot(event) {
    const clickedDotIndex = event.target.dataset.dot;
    dots.forEach(dot => dot.className = 'far fa-dot-circle');
    dots[clickedDotIndex].className = 'fas fa-circle';
    galleryImage.forEach(img => img.classList.remove('visible'));
    galleryImage[clickedDotIndex].classList.add('visible');
    clearInterval(indexInterval);
    indexInterval = setInterval(changeImage, slideInterval);
}

dots.forEach(function (dot) {
    dot.addEventListener('click', clickDot)
})

function clickArrow(event) {
    let arrowBehaviour

    if (event.target.classList.contains('fa-chevron-left')) {
        arrowBehaviour = -1;
    } else {
        arrowBehaviour = 1;
    }

    let activeDotIndex = dots.findIndex(dot => dot.classList.contains('fa-circle'));

    if (activeDotIndex == 0 && arrowBehaviour == -1) {
        activeDotIndex = dots.length;
    } else if (activeDotIndex == dots.length - 1 && arrowBehaviour == 1) {
        activeDotIndex = -1;
    };

    dots.forEach(dot => dot.className = 'far fa-dot-circle');
    dots[activeDotIndex + arrowBehaviour].className = 'fas fa-circle';
    galleryImage.forEach(img => img.classList.remove('visible'));
    galleryImage[activeDotIndex + arrowBehaviour].classList.add('visible');
    clearInterval(indexInterval);
    indexInterval = setInterval(changeImage, slideInterval);
}

arrows.forEach(function (arrow) {
    arrow.addEventListener('click', clickArrow);
})

// MENU CATEGORY SLIDE DOWN ON MOBILE DEVICES

const menuCategoryH3 = [...document.querySelectorAll('.menu-category h3')];

function showMenuCategory(event) {

    let menuCategoryList;
    let arrowIcon;

    if (!event.target.nextElementSibling) {
        menuCategoryList = event.target.parentNode.nextElementSibling;
        arrowIcon = event.target;
    } else {
        menuCategoryList = event.target.nextElementSibling;
        arrowIcon = event.target.firstElementChild;
    }

    if (!menuCategoryList.clientHeight) {
        menuCategoryList.style.height = `${menuCategoryList.scrollHeight}px`;
        arrowIcon.classList.add('rotate');
    } else {
        menuCategoryList.style.height = `0px`;
        arrowIcon.classList.remove('rotate');
    }
}

if (window.innerWidth <= 1024) {
    menuCategoryH3.forEach(h3 => h3.addEventListener('click', showMenuCategory));
}

// MENU CATEGORY SHOW ON DESKTOP DEVICES

const menuContainer = [...document.querySelectorAll('.menu-items')];

function showMenuContainerOnScroll() {
    for (let i = 0; i < menuContainer.length; i++) {
        if (window.scrollY >= menuContainer[i].offsetTop - window.innerHeight + 40) {
            menuContainer[i].classList.add('visible');
        }
    }
}

// LIMIT SCROLL EVENT THROTTLING + TRIGGER ON-SCROLL FUNCTIONS

let scrolling = false;

window.addEventListener('scroll', () => {
    scrolling = true;
})

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        burgerColorChange();
        if (window.innerWidth > 1024) {
            navFollow();
            showMenuContainerOnScroll();
        }
    }
}, 200);

// SET HEIGHT OF GALLERY SLIDER 

const carousel = document.querySelector('.carousel-wrap');

function carouselHeightSet() {
    carousel.style.height = `${galleryImage[0].clientHeight}px`;
}

carouselHeightSet()

// RELOAD PAGE ON FLIP ON MOBILE DEVICES (TO ADJUST SIZE OF IMAGES AND GALLERY SLIDER HEIGHT)

if (window.innerWidth <= 1024) {

    window.addEventListener('resize', function () {
        location.reload();
    })
}