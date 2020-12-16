// HEADER SLIDER

let activeElement = 0;
const timeChange = 8000;

const header = document.querySelector('header');
const title = document.querySelector('.title');
const titleH1 = document.querySelector('.title h1');
const titleParagraph = document.querySelector('.title p');


const titleH1Change = ['Place', 'Food', 'Excellence'];
const titleParagraphChange = ['Quos optio saepe enim facilis rem.', 'Lorem, ipsum dolor sit amet consectetur adipisicing.', 'Iste quae asperiores magnam explicabo.'];
const titleMove = ['position-1', 'position-2', 'position-3'];

function changeElement() {
    activeElement++;
    if (activeElement == titleH1Change.length) {
        activeElement = 0;
    }
    header.style.backgroundImage = `url(../Strona-restauracja/img/restaurant_main_mobile_portrait_small_${activeElement + 1}.jpg)`;
    titleH1.textContent = titleH1Change[activeElement];
    titleParagraph.textContent = titleParagraphChange[activeElement];
    title.className = `title ${titleMove[activeElement]}`;
}

setInterval(changeElement, timeChange);

// BURGER MENU 

const burger = document.querySelector('.burger');
const navBar = document.querySelector('nav');

function burgerToggle() {
    burger.classList.toggle('active');
    navBar.classList.toggle('show');
};

burger.addEventListener('click', burgerToggle);

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

// MENU CATEGORY SLIDE DOWN

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

    const menuCategoryListScrollHeight = menuCategoryList.scrollHeight;
    const menuCategoryListClientHeight = menuCategoryList.clientHeight;

    if (!menuCategoryListClientHeight) {
        menuCategoryList.style.height = `${menuCategoryListScrollHeight}px`;
    } else {
        menuCategoryList.style.height = `0px`;
    }

    arrowIcon.classList.toggle('rotate');
}

menuCategoryH3.forEach(h3 => h3.addEventListener('click', showMenuCategory));