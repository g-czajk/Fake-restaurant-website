// MAIN SLIDER

let activeElement = 0;
const timeChange = 8000;

const header = document.querySelector('header');
const title = document.querySelector('.title');
const titleH1 = document.querySelector('.title h1');
const titleParagraph = document.querySelector('.title p');


const titleH1Change = ['Lorem.', 'Ipsum.', 'Quod.'];
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

setInterval(changeElement, timeChange)