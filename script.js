// varuables
let titles = ["местом", "персонажем", "напитком", "песней", "животным", "едой", "цветом"];
let title_names = ["Мальдивы", "Марин", "Молоко", "Ed Sheeran - Perfect", "Котик", "Шашлык", "Белый"]
let title_info = [
                "хочу побывать в ней, ой то есть там, а еще там красиво и от одного вида на душе хорошо и спокойно..",
                "ну один в один же, точней с моей Кариночки и рисовали, но никакие 2д не сравнятся с ней...",
                "любожаю молоко, также как и её, всю жизнь пил бы только молоко, молоко - моя жизнь",
                "слова песни и так обо всем скажут, а также клип вдобавок (МЫ)",
                "топ-1 по миловости, топ-1 по красивовости, топ-1 по ласковости",
                "шашлычок и лучок тудудуду, подарил бы все шашлыки мира я тебе, но и это не выразит всю мою любооовь",
                "белый ассоциируется с чем-то светлым и хорошим, а она самое белое, что было в моей жизни"
                ];

let TIME_OF_SLIDE = 3000;
const SLIDE_COUNT = titles.length;
let slide = 0;
let heading_one = document.querySelector("#heading1");
let heading_two = document.querySelector("#heading2");
let image = document.querySelector("#image");
let paragraph = document.querySelector("#paragraph");

// запуск слайдов
let sliderInterval = setInterval(nextSlide, TIME_OF_SLIDE);

// смена слайда
function nextSlide() {
    change_inner();
    slide++;
    if (slide == SLIDE_COUNT) slide = 0;
}

// смена внутренностей слайда
 function change_inner(){
     heading_one.innerHTML = `Если бы Карина была ${titles[slide]}, то это определённо:`;
     heading_two.innerHTML = `${title_names[slide]}`;
     paragraph.innerHTML = `Потому что ${title_info[slide]}`;
     image.style.backgroundImage = `url(images/image${slide}.jpg)` 
} 
  
document.querySelector("#slider-speed").onchange = function(){
    TIME_OF_SLIDE = this.value * 1000;
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, TIME_OF_SLIDE);
}