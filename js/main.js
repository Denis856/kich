var burger = document.querySelector('.header__burger');
var item0 = document.querySelectorAll('.menu__item');
var menu = document.querySelector('.menu');

function show_menu() {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   item0.forEach(el => {
      el.classList.toggle('active');
   });
}

burger.onclick = show_menu;

// page3

var btn1 = document.querySelector('.page3__btn');

var indexValue = 0;

function showSlide() {
   var x;
   const item = document.querySelectorAll(".page3__item1");
   for(x = 0; x < item.length; x++){
      item[x].style.display = 'none';
      item[x].querySelector('.item31__title').style.display = 'none';
      item[x].querySelector('.item31__text').style.display = 'none';
   }
   indexValue++;
   if(indexValue > item.length) {
      indexValue = 1;
   }
   item[indexValue - 1].style.display = 'block';
   item[indexValue - 1].querySelector('.item31__title').style.display = 'block';
   item[indexValue - 1].querySelector('.item31__text').style.display = 'block';
}

btn1.onclick = showSlide;

// next

var check1 = document.getElementById('one');
var check2 = document.getElementById('two');
var check3 = document.getElementById('three');
var item321 = document.querySelector('.img_1');
var item322 = document.querySelector('.img_2');
var item323 = document.querySelector('.img_3');

check1.addEventListener('click', ()=> {
   item321.classList.add('dis_bl');
   item322.classList.add('dis_no');
   item323.classList.add('dis_no');
   item322.classList.remove('dis_bl');
   item323.classList.remove('dis_bl');
});
check2.addEventListener('click', ()=> {
   item322.classList.add('dis_bl');
   item321.classList.add('dis_no');
   item323.classList.add('dis_no');
   item321.classList.remove('dis_bl');
   item323.classList.remove('dis_bl');
});
check3.addEventListener('click', ()=> {
   item323.classList.add('dis_bl');
   item322.classList.add('dis_no');
   item321.classList.add('dis_no');
   item322.classList.remove('dis_bl');
   item321.classList.remove('dis_bl');
});

// next

var productContainers = [...document.querySelectorAll('.page3__items3')];
var nxtBtn = [...document.querySelectorAll('.arr1')];
var preBtn = [...document.querySelectorAll('.arr2')];

productContainers.forEach((item, i) => {
   var containerDimensions = item.getBoundingClientRect();
   var containerWidth = containerDimensions.width;

   nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
   });

   preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
   });
});