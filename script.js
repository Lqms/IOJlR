// varuables
let titles = ["местом", "персонажем", "напитком", "песней", "животным", "едой", "цветом"];
let title_names = ["Мальдивы", "Микаса", "Молоко", "Ed Sheeran - Perfect", "котик", "картошечка", "голубой"]
let title_info = [
                "там мило, красиво и хорошо, прям как с ней, ну т.е в смысле она красивая и милая и с ней хорошо...",
                "если я Эрен, то она Микаса, она для меня также важна как и для него, а еще есть схожести в характере и внешности",
                "обожаю молоко, также как и её c: всю жизнь пил бы только молоко, молоко - моя жизнь, МОЛОКО!...",
                "слова песни и так обо всем скажут, а также клип вдобавок (МЫ в клипе, кста)",
                "топ-1 по миловости, топ-1 по красивовости, топ-1 по ласковости. БАСИГ...",
                "с виду простая, но таит в себе кучу загадок и можно приготовить столькими (ну и слово) способами и каждый раз получается круто...",
                "голубой - это цвет мира и гармонии, что прям и ощущается при общении с ней <3"
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
     heading_one.innerHTML = `Если бы Юля была ${titles[slide]}, то это определённо:`;
     heading_two.innerHTML = `${title_names[slide]}`;
     paragraph.innerHTML = `Потому что ${title_info[slide]}`;
     image.style.backgroundImage = `url(image${slide}.jpg)` 
} 
  
document.querySelector("#slider-speed").onchange = function(){
    TIME_OF_SLIDE = this.value * 1000;
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, TIME_OF_SLIDE);
}
