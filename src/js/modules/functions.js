
/*Проверка поддержки webp, добавление класса webp илb no-webp для HTML */
export function isWebP() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  //Добавление класса _webp или _no-webp для HTML  
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

//=========== Каталог ============================//

const headerSpanlist = document.querySelector(".header_spanlist"); // span "Каталог"
const headerSublist = document.querySelector(".header_sublist"); // Вложенный список ul


headerSpanlist.addEventListener("click", function (evt) {
  evt.preventDefault();
  headerSublist.classList.toggle('visually-hidden');
});

// ============= Язык ============================= //

const headerLang = document.querySelector(".header__lang");
const headerLangSubmenu = document.querySelector(".header__lang_submenu");
// const langImg = document.querySelector('.lang__img');
// const headerLangSubmenuItem = document.querySelector(".header__lang_submenu_item");
// const langItem = document.querySelector("lang__item");


headerLang.addEventListener("click", function (e) {
  e.preventDefault();
  headerLangSubmenu.classList.toggle('visually-hidden');
  });

//================ бургер =======================//

const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	//document.body.classList.toggle('no-scroll');
});


//==============Слайдер ===========================//




const prev = document.getElementById('btn_prev');
const next = document.getElementById('btn_next');

const slides = document.querySelectorAll('.slide');  //  
const dots = document.querySelectorAll('.dot');


let index = 0; // Переменная для отслеживания текущего слайда
let slide;
let dot;

const activeSlide = n => {  // n-номер активного слайда 
  
  for (slide of slides) { // перебираем массив slides и задаем переменную slide
    slide.classList.remove('active');  // убираем у каждого слайда класс 'active'
  }
  slides[n].classList.add('active'); // добавляем текущему слайду класс 'active'
};


const activeDot = n => {  // ф-ция для кнопок под слайдером 
  
  for (dot of dots) { // перебираем массив dots
    dot.classList.remove('active');  // убираем у каждой кнопки класс 'active'
  }
  dots[n].classList.add('active'); // добавляем кнопке класс 'active'
};

const prepareCurrentSlide = ind => { // ф-ция кот. обЪединяет вызовы 2-х ф-ций: activeSlide(index) и activeDot(index);
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {   //  ф-ция для цикличности слайдера после посл. слайда след.-первый, 
  if (index == slides.length - 1) {  // проверка является ли слайд последним
    index = 0;  //  переход на первый слайд
    // activeSlide(index);  // вызываем ф-цию activeSlide и в качестве аргумента передаем index
    // activeDot(index);
    prepareCurrentSlide(index);
  } else {
    index++;  // переход на следующий слайд
    // activeSlide(index);
    // activeDot(index);
    prepareCurrentSlide(index);
  }
};


const prevSlide = () => {   //  ф-ция для цикличности слайдера после посл. слайда след.-первый, 
  if (index == 0) {  // проверка является ли слайд первым
    index = slides.length - 1; // если слайд нулевой-след. последний
   // activeSlide(index);  // вызываем ф-цию activeSlide и в качестве аргумента передаем index
    prepareCurrentSlide(index);
  } else {
    index--; // при пролистывании назад index уменьшаем
    //activeSlide(index);
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {    // переключение слайдера по клику на кнопках под слайдером 
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



// ==============Слайдер Swiper=================================================//

const swiper = new Swiper('.swiper1', {

  slidesPerView: 3,
  spaceBetween: 10,

  breakpoints: {
    
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      //spaceBetween: 40,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,  // бесконечный слайдер
  //loopedSlides: 1, // кол-во дублирующих слайдов при бесконечном слайдере

  //spaceBetween: 10, // пробел между слайдами
  //autoHeight: false, // автовысота слайдов
  //slidesPerView: 3, // кол-во показываемых слайдов
  //slidesPerGroup: 1, // кол-во пролистываемых слайдов
  //centered: true,  // активный слайд по центру
  //initialSlide: 1, // Стартовый слайд (начинается с 0)
  //freeMode: false, // свободный режим (нет фиксированных позиций у слайдов)
  //direction: vertical, // вертикальная прокрутка слайдов
});


//===================================================================================




//===========  Slider mainblock5 =========================//


let position = 0; //== отслеживание начального положения скролла
  const slidesToShow = 4; // ======  сколько элементов показывать
  const slidesToScroll = 1; // ===    сколько элементов проскроливать
  const container = document.querySelector('.slider-container');
  const track = document.querySelector('.slider-track');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');
  const items = document.querySelectorAll('.slider-item');
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow; // Разделили ширину контейнера на кол-во слайдов для показа иполучили ширину элемента
const movePosition = slidesToScroll * itemWidth; 
  
items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

  btnNext.addEventListener('click', () => { //перемещаем слайдер по клику вправо
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });


  btnPrev.addEventListener('click', () => {  // перемещаем слайдер по клику влево
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });
  
  const setPosition = () => { // ф-ция перемещения
    track.style.transform = `translateX(${position}px)`;
};
  
  

const checkBtns = () => { // ф-ция проверки активности кнопок
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

  checkBtns();

//=======================================================================================//






