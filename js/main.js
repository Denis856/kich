var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.menu');

function burg() {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
}

burger.onclick = burg;

// next

var productContainers = document.querySelectorAll('.projects__items');
var item20 = document.querySelectorAll('.projects__item')[0];
var nxtBtn = document.querySelectorAll('.projects_left');
var preBtn = document.querySelectorAll('.projects_right');

productContainers.forEach((item, i) => {
    let containerWidth = item20.clientWidth + 24;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

// next

var indexValue = 1;
showImg(indexValue);

function side_slide(e) {showImg(indexValue += e);}
function showImg(e) {
    var i;
    var img = document.querySelectorAll('.world__item');
    if(e > img.length) {indexValue = 1;}
    if(e < 1) {indexValue = img.length;}
    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}

// next

var quetion = document.querySelectorAll('.quetions__item');

quetion.forEach(item =>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active');
        item.querySelector('.item9__icon').classList.toggle('active');
        item.querySelector('.item9__text2').classList.toggle('active');
    });
});