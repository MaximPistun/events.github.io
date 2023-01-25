// Введение в JS события 
/*
Отлавливать возникаемые события мы будем с помощью специальных оброботчиков

Любому событию мы можем назначить оброботчик, то есть функцию,
которая сработает, как только пройзойдет нужное нам событие.
Именно благодоря этим оброботчикам JavaScript может
реагировать на действия прльзователя.

Есть несколько способов назначить событию обработчик.
О них далее:
*/


// 1 способо использование атрибута HTML
/*
Прямо в теги прописываем нужное нам событие:
<button onclick="console.log('Клик')" class="btn">Нажми на маня</button>
*/


// // // 2 способ через DOM:
// // // Получаем нужный объект
// const button = document.querySelector('.btn');
// // // Далее дабавляем обработчик события onclick и задаем функцию без названиея
// // button.onclick = functionI () {
// //         console.log('Клик'); // Клик
// // }
// // тоже самое
// function showMessage() {
//         console.log('Клик');
// }
// button.onclick = showMessage; // Клик
// // Важно без круглых скобок, так как если поставим скобки, то вызовем автоматическое
//  // выполниение функиии там где нам этого не нужно



/*
Фундоментальный недостаток описанных выше способов назначения обработчиков:
1. Невозможность повесить несколько обработчиков на одно событие
2. Каждое новое назначение обработчика перезапишеь предыдущее:
*/ 
// const btn = document.querySelector('.btn');
// btn.onclick = function () {
//         console.log('Клик');
// };
// btn.onclick = function () {
//         console.log('Клак');
// };
// // Высветится только последние 'Клак'



// обработчик событий addEventListener/removeEventListener

/*
Существует основной способо назначения
обработчиков при помощи специальных методов addEventListener и 
removeEventListener, которые лишены этого недостатка

elemtnt.addEventListener(event, handler[,options]);
event - событие при котором хотим чтоб возник наш обработчик
handler[,options] пишем функиию с именнем либо функцию без имени 
в которой код который хотим выполнить

options - существуют некие опции, некоторые параметры
*/

// const btn = document.querySelector('.btn');
// btn.addEventListener("click", function (e) {
//         console.log('Клик');
// });
// btn.addEventListener("click", function (e){
//         console.log('Клак');
// })


/*
Так же мы можем вынести наш код из обработчика событий в отдельную функуцию
*/
// const btn = document.querySelector('.btn')
// function showMessage() {
//         console.log('Клик');
//         btn.removeEventListener('click', showMessage)
// };
// btn.addEventListener('click', showMessage);
// /*
// В свизи с тем что addEventListener грузит браузер,
// то в код мы можем вставить removeEventListener,
// чтобы после выполнения кода снять прослушку,
// один раз выполнили(или сколько нам надо),
// прослушка снята
// */



// Опции (параметры)

// const options = {
//         "capture": false, // Фаза, на которой должен  сработать обработчик
//         "once": true, // Если true, тогда обработчик будет автоматически 
//         // Удален после выполнения собвытия. Что-то типо removeEventListener
//         "passive": false // если true, то указывает, что обрабочтчик 
//         // никогда не вызовет preventDefault()
// };
// const btn = document.querySelector('.btn');
// function showMessage () {
//         console.log('Клик');
// };
// btn.addEventListener('click', showMessage, options); //1 способ
// // btn.addEventListener('click', showMessage, {"capture:false"}); //2 способ


/*
Метод addEventListener может показаться сложнее чем , onclick.
но из-за того что он обладает преимуществом 'прослушивания' нескольких событий,
а так же учитывая тот факт что существуют события которые можно отловить
только лишь при помощи этого метода.
В результате разработчики чаще всего используют именно его.
*/ 



// Объект события
/*
Чтобы обработать событие, могут понадобиться детали того, что произошло.
Не просто "клик" или "нажатие клавиши", а так же какие координаты указателя
мыши, какая клавиша нажата и так далее.

Когда происходит событие, браузер создает объект события,
записывает в него детали и передает его в качестве 
аргумента функции - обработчику. 

Называть этот аргумент принято event
*/

// Получим объкт 
// const button = document.querySelector('.btn');

// function showConsole(event) {
//     // // Какой тип события произошел
//     // console.log(event.type); //click

//     // /* Получаем бъект на который кликнул мышью,
//     // именно тот на который кликнул, так как объект может содержать
//     // в себе дочерние элементы тип span и тд*/
//     // console.log(event.target); 
//     // //<button class="btn">Нажми на маня</button>
//     // // <span>Нажми на маня</span>

//     // // Получим только тот объект на который назначен обработчик
//     // console.log(event.currentTarget); //<button class="btn">Нажми на маня</button>

//     // // Получение координаты курсора мыши относительно окна браузера,
//     // // поэтому значения будут меняться
//     // console.log(event.clientX); // 115
//     // console.log(event.clientY); // 164

//     // Все детали события
//     console.log(event); //PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
// }


// button.addEventListener("click", showConsole);
// // button.addEventListener("mouseenter", showConsole); // Наведение мыши на объект




// Всплытие и погружение

// Получим объекты
// const block = document.querySelector('.block');
// const blockInner = document.querySelector('.block__inner');
// const blockInnerInner = document.querySelector('.block__inner-inner');
/*
Всплытие
Когда на элементе происходит событие, обработчик сначала срабатывает на нем,
потом на его родителе, потом на ролителе  родителя, затем выше выше
и так далее, вверх по цепочке.
*/
// block.addEventListener('click', function (event) {
//     console.log('Клик на блок');
//     // Клик на блок
//     console.log(event.target);
// });
// blockInner.addEventListener('click', function (event) {
//     console.log('Клик на блок второго уровня');
//     // Клик на блок второго уровня
//     // Клик на блок
// });
// blockInnerInner.addEventListener('click', function (event) {
//     console.log('Клик на блок третьего уровня');
//     // Клик на блок третьего уровня
//     // Клик на блок второго уровня
//     // Клик на блок
// });
// Получается произошло всплытие

// если допустим мы закоментируем прослушки на втором и третьем блоке
// и применем event.targer то при нажатии на третий(второй и тд блок),
// всеравно сработает прослушка на первом
/*
Клик на блок
<div class="block__inner-inner">блок третьего уровня</div>
*/



// // Остановка всплытия
// // event.stopPropagation();
// const block = document.querySelector('.block');
// const blockInner = document.querySelector('.block__inner');
// const blockInnerInner = document.querySelector('.block__inner-inner');

// block.addEventListener('click', function (event) {
//     console.log('Клик на блок');
// });
// blockInner.addEventListener('click', function (event) {
//     console.log('Клик на блок второго уровня');
// });
// blockInnerInner.addEventListener('click', function (event) {
//     console.log('Клик на блок третьего уровня');
//     event.stopPropagation();
//     // Теперь при клике на блок третьего уровня
//     // всплытие до родителей происходить не будет
// });



// Погружение
/*
Для того чтоб что-то всплыло, оно сначало должно погрузиться:)
*/
// const block = document.querySelector('.block');
// const blockInner = document.querySelector('.block__inner');
// const blockInnerInner = document.querySelector('.block__inner-inner');

// block.addEventListener('click', function (event) {
//     console.log('Клик на блок');
// });
// blockInner.addEventListener('click', function (event) {
//     console.log('Клик на блок второго уровня');
// }, {'capture': true});
// blockInnerInner.addEventListener('click', function (event) {
//     console.log('Клик на блок третьего уровня');
// });
/*
Тобишь, когда мы добавили опцию capture:true, то пр клике на 
третий блок, у нас происходит следующее

Клик на блок второго уровня
Клик на блок третьего уровня
Клик на блок

Мы видим результат выполнения обработчика второго уровня
потом третьего 
потом первого

в момент погружения мы отловили обработчик второго уровня,
и вывели его в консоль
далее мы погрузились до блока третьего уровня
сработал обработчик и мы начали всплывать до блока первого уровня

'capture': false - если будет так, то всплытие будет как обычно
так как в момент погружения мы ничего не отлавливали и начали всплывать

метод погружение используется крайне редко, хватает обычно всплытия*/




// Делегирование событий

/*
Всплытие и перехват событий позволяет реализовать 
один из самых выжных приемов разработки - делегирование
*/

// При нажатии на любую кнопку, выполняется код, который выводит 
// в консоль 'Ура!'
// const button = document.querySelectorAll('.btn');
// function showConsole () {
//     console.log('Ура!');
// };
// // так как button это коллекция из всех кнопок
// // Проходим циклом по всем кнопкам
// // а buttonItem отдельная кнопка 
// button.forEach(buttonItem =>{
//     buttonItem.addEventListener('click', showConsole);
// })

// // Тоже самое но короче
// const button = document.querySelectorAll('.btn');
// button.forEach(buttonItem => {
// buttonItem.addEventListener('click', (e) => console.log('Ура!'))
// });


// Но проблемма этого метода в оптимизации, так как этих объектов
// может быть не 4 а 40000, и прослушка на каждом, тормозит браузер

// Делегирование помогает избежать навешивания такого 
// большого колличества обработчиков

/*
Вместо назначения обработчика для каждого элемента, мы назначим 
обработчик для их родителя
*/


/*
1. Обращаюсь к блоку в котором есть те элементы, которые мне нужны
2. объявляю нужную функцию
3. Назначаю обработчик событий при клике 
на данный блок  сраюотает функция
где  если мы нажимаем на элемент в этом блоке у которого класс .btn
то срабатывает функция showConsole();
closest для того чтоб если внутри нужного нам объекта
находится еще один дочерний объект, то мы всеравно перешли к родителю .btn
*/
// // event это объект на который нажали в данной ситуации
// const lesson = document.querySelector('.lesson');
// function showConsole() {
//     console.log('Ура');
// };
// lesson.addEventListener('click', function(event){
//     if (event.target.closest('.btn')){
//         showConsole()
//     }
// });

// Вывод: здесь всего один обработчик,а не великое множество


















// Открывающее меню пример:

/*
1. Вызываем тот элемент на странице, с которым хотим работать
2. Навешиваем слушатель на весь документ, который делает следующее 
при клике на любой пространство в документе срабатывает функция menu
3. В функции меню для event(объект на который нажали),
мы ставим условие если он является дочерним элементом menu__button
или самим menu__button, то ему добавляетс  класс _active;

так же нажатие на любою область кроме menu__button 
убирает класс _active

hidden в html убирается когда мы ставим для list display: block
*/

// const menuBody = document.querySelector('.menu');
// document.addEventListener('click', menu);
// function menu(event){
//     if(event.target.closest('.menu__button')) {
//         menuBody.classList.toggle('_active');
//     }
//     if(!event.target.closest('.menu')){
//         menuBody.classList.remove('_active')
//     }
// };















// Действие браузера по умолчанию

/*
Многие события автоматически влекут за собою действия браузера.
Например:
 - Клик по ссылке инициирует переход на новый URL.
 - Нажатие на кнопку отправить в форме - отсылку ее на сервер.
 - Зажатие кнопки мыши над текстом и ее движение 
   в таком состоянии - инициирует его выделение и т.д.

   Если мы обрабатываем событие в JavaScript
   то зачастую такое действие браузера нам не нужно.
   К счастью мы его можем отменитью
*/

// const link = document.querySelector('.link-google');
// link.addEventListener('click', function(event){
//     console.log('Наши действия');
//     // Отменить действия браузера (переход по ссылке);
//     event.preventDefault();
// })

// // // Если используем onclick
// // link.onclick = function () {
// //     console.log('ada');
// //     return false;
// // }

/*
Необезательная опция pssive: true для addEventListener
сигнолизирует браузеру о том, что обработчик не собирается выполнять 
preventDefault(). Почему это может быть полезно?
Есть некоторые события как touchmove на мобильных устройствах(когда пользователь
перемещает пальцем по экрану), которое по умолчанию начинает прокрутку,
но мы можем отменить это действие используя parentDefault() в обработчике.
поэтому когда браузер обнаружит такое событие, он должен запустить все обработчики
и после, если preventDefault() не вызывается не где, он  может начинать прокрутку.
Это может вызвать ненужные задержкив пользовательском интерфейсе.

Опци passive: true сообщает браузеру, что обработчик не собирается отменять прокрутку.
Тогда браузер начинает ее немедленно, обеспечивая максимально плавный интерфейс,
параллельно обрабатывая события.
Для некоторых браузеров(FireFox, Chrome)опция passive по умолчанию включена
в true для таких событий, как touchstart и  touchmove.

*/
// const link = document.querySelector('.link-google');
// link.addEventListener('click', function(event){
//     console.log('Наши действия');
//     // Отменить действия браузера (переход по ссылке);
//     event.preventDefault();
// },{passive:true})













// Основые события мыши

// Типы событий мыши
/*
Мы можем разделить события мыши на две категории:
простые и комплексные
*/

// Простые события
// Самые часто используемые события:
/*
mousedown / mouseup - курсор мыши нажата / курсор мыши опущен над элементом
mouseover / mouseout - курсор мыши появляется над элементом и уходит с него
mousemove - каждое движение мыши над элементом генерирует это событие.
contextmenu - вызывается при попытке открытия контекстного меню,
                как правило, нажатие правой кнопки мыши.
                Но , заметим, это не совсем событие мыши,
                оно может вызываться специальной клавищей клавиатуры.
*/

// Комплексные события
/*
click - вызывается про mousedown, а затем mouseup над одним и тем же элементом,
если использованна основная кнопка мыщи.
dblcklick - вызывается двойным кликом на элемент.

Комлексные состоят изи простыхЮ поэтому в теории,
мы могли бы без них обойтись.
Но хорошо, что они есть, так как с ними работать на много удобней.
*/

// const button = document.querySelector('.btn');
// button.addEventListener('mousedown', function(event){
//     console.log(`Нажата кнопка: ${event.which}`);
// });
// button.addEventListener('click', function(event){
//     console.log('Нажата основная кнопка мыши');
// });
// button.addEventListener('contextmenu', function(event){
//     console.log('Вызванно контекстное меню (не основная кнопка мыши)');
// })
// /*
// event.which = 1 - Нажата основная кнопка (обычно левая)
// event.which = 2 - Нажата средняя кнопка мыши (колесо)
// event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
// */



// Отслеживание движения мыши
// Координаты: clientX/Y, pageX/Y

// const blockForMouse = document.querySelector('.block-for-mouse');
// blockForMouse.addEventListener('mousemove', function(event){
//     blockForMouse.innerHTML = 
//     `clientX - ${event.clientX}
//     <br>
//     clientY - ${event.clientY}`
// })
// // Это может использоваться например в парадаксе




//Наведение мыши: mouseover/out, mouseenter/Leave

/*
Событие mouseoveer происходит в момент, когда курсор оказывается над 
элементом, а событие mouseout - в момент когда курсор уходит с элемента.
*/
// const block = document.querySelector('.block-for-mouse');
// block.addEventListener('mouseover', function(event){
//     block.innerHTML = `Над блоком`
// });
// block.addEventListener('mouseout', function(event){
//     block.innerHTML = `Не над блоком`
// });



// Событие mouseover/out, reLatedTarget
/*
Это событие является особенным, потому что у них имеется свойство 
relatedTarget. Оно "Дополняет" target. Когда мышь переходит с одного элемента
на другой, то один из них будет target  а другой relatedTarget

Для события mouseover:
event.target - это элемент, на который курсор перешел
event.relatedTarget - это элемент с которого перешел курсор
с которого ушел(relatedTarget- target)

Для события mouseout:
event.target - это элемент с которого ушел курсор.
event.relatedTarget - это элемент на который курсор ушел
(target - relatedTarget)
*/

// const block = document.querySelector('.block-for-mouse');
// block.addEventListener('mouseover', function(event){
//     console.log(event.target);//<div class="block-for-mouse"></div>
//     console.log(event.relatedTarget);  //<div class="lesson">...</div>
// });
// block.addEventListener('mouseout', function(event){
//     console.log(event.target);
//     console.log(event.relatedTarget);
// });



// // Всплытие mouseover/ mouseout
// const block = document.querySelector('.block-for-mouse');
// block.addEventListener('mouseover', function(event){
//     console.log(`Курсор над элементом`);
// });
// block.addEventListener('mouseout', function(event){
//     console.log(`Курсор покидает элемент`);
// })
// /*Ситуация следующая при наведение на блок, выводится
// `Курсор над элементом`
// Но при передвежение мыши в этом же блоке на <span>Что-то</span>
// Курсор покидает элемент`
// `Курсор над элементом`

// Происходит всплытие
// */




// События mouseenter / mouseleave
/*
Пара важных отличий:
1. Переходы внутри элемента на его потомков не считаются.
2. События mouseenter / mouseleave не всплывают
*/
// const block = document.querySelector('.block-for-mouse');
// block.addEventListener('mouseenter', function(event){
//     console.log(`Курсор на объекте`);
// });
// block.addEventListener('mouseleave', function(event){
//     console.log(`Курсор ушел с объекта`);
// });
// /*
// Очивидный плюс, снижение нагрузки на браузер, нет не нужного всплытия,
// а не выполнять перемещение между его потомками, когда мы внутри объекта.
// */





/*
Но есть огромное но и примущества в сторону mouswover/out которые всплывают.
Речь идет о делегировние.
Та штука которая снижает нагрузку на браузер и отменяет задачу навешивать
кучу событий на каждый объект
*/
/*
1. Объявляем блок в котором работаем
2. создаем событие где при наведение на общий блок,
происходит функция которая 
    1. дает переменной тот элемент на который наводят внутри блока
    и задает/отбирает  цвет.
    если мышь уходит за пределы поля, то ничего не происходит
*/
// const blockCalc = document.querySelector('.calc');
// blockCalc.addEventListener('mouseover', function(event){
//     let num = event.target.closest('.calc__num');
//     // Если курсор не на .calc__sum,
//     // то тогда мы ничего не делаем 
//     if(!num) return;
//     num.style.cssText = `	background-color: rgb(220, 211, 40);
//                           color: #333;`
// });
// blockCalc.addEventListener('mouseout', function(event){
//     let num = event.target.closest('.calc__num');
//     // Если курсор не на .calc__sum,
//     // то тогда мы ничего не делаем 
//     if(!num) return;
//     num.style.cssText = ``
// });
// // Если бы заменили на mouseenter и mouseout
// //  то ничего бы не сработало, так как с помощью них нельзя перейти
// // на дочерние элементы










// События клаавиатуры
/*
Основные событияя при работе с клавиатурой
    keydown - происходит при нажатие клавиши
    keyup - при отпускании клавиши
*/

// event.code и event.key
/*
event.code - KeyG
event.key - (g)
*/

// Случай простого нажатия клавиши на всем документе
// document.addEventListener('keydown', function(event){
//     console.log(`Нажата клавиша: ${event.code} ${event.key}`);
// }); //Нажата клавиша: KeyF f
// document.addEventListener('keyup', function(event){
//     console.log(`Отпушена клавиша: ${event.code} ${event.key}`);
// });//Отпушена клавиша: KeyF f
// /*
// Но если допустим мы нажмем капс, или же поменяем язык,
// то и размер либо язык буквы изменится
// */

// // Работа с счоитаниями кнопкок
// document.addEventListener('keydown', function(event){
//     if(event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)){
//         console.log('Отмена действия'); // Отмена действия
//     }
// })



//Автоповтор
/*
При долгом нажатии клавиши возникает автоповто: keydown срабатывает
снова и снова, и когла клавишу отпускают, то отрабатывает keyup.
Так что ситуайия когда много keydown и один  keyup, абсолютно нормальная.
Для события, вызванных автоповтором, у обекта события
свойство event.repeat равно true
*/ 

// document.addEventListener('keydown', function(event){
//     console.log(`Нажата клавиша ${event.code} ${event.key}`);
//     console.log(event.repeat);
// });




// Практическая работа
// Изменение счетчика оставшихся символов
/*
txtItem - само текстовое поле
txtItemLimit - атрибута maxlength текстового поля
txtCounter - это span в который мы будем выводить колличество
 оставшихся символов

Дальше создаем событие, которое при отпускании клавиши
вызывает функцию textSetCounter

В этой функции создаем переменную которая вычесляет 
из всего лимита допустимых символов вычитает количчество уже введенных
символов в текстовое поле
и дальше вставляем в span этот результат
*/
const txtItem = document.querySelector('.textenter');
const txtItemLimit = txtItem.getAttribute('maxlength')
const txtCounter = document.querySelector('.text__counter span');
txtItem.addEventListener('keyup', textSetCounter);
txtCounter.innerHTML = txtItemLimit //вывод общего колличества
// проверка на автоповтор
txtItem.addEventListener('keydown',function(event){
    if(event.repeat) textSetCounter();
})

function textSetCounter() {
    textCounterResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = textCounterResult
}



// Доработка  по нажатию клавиши ESC
// const menuBody = document.querySelector('.menu');
// document.addEventListener('click', menu);
// function menu(event){
//     if(event.target.closest('.menu__button')){
//         menuBody.classList.toggle('_active')
//     }
//     if(!event.target.closest('.menu')){
//         menuBody.classList.remove('_active')
//     }
// };
// // Вот это дополнение
// document.addEventListener('keyup', function(event){
//     if(event.code === 'Escape'){
//         menuBody.classList.remove('_active')
//     }
// });







// Событие при скролле
// Прокрутка

// window.addEventListener('scroll', function(event){
//     /*
//     Колличество прокрученных пикселей по вертикали
//     ScrollY или pageYOffset(устарел)
//     Колличество прокрученых пикселей по горизонтали
//     ScrollX или pageXoffset(устарел)
//     */
//     console.log(`${scrollY}px`);
// });

// Предотвращение прокрутки
/*
Нельзя предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll, потому что он сработает после того,
как прокрутка произошла.

Но можно предотвратить проккрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например на событие keydown
для клавиш pageUp и pageDown.

Способов инициировать прокрутку много, более надежный
способ - использовать CSS, свойство overflow: hidden;
*/


// Использование
/*
Событие прокрутки scroll позволяет реагировать на прокрутку страницы
или элемента. Есть много хороших вещей, которые можно сделать.

- Показать / скрыть дополнительные элементы управления или информацию,
основываяснь на том в какой части документа находится пользователь.
Например анимация при скролле или ленивая подгрузка
- Подгрузить данные когда пользователь прокручивает страницу вниз
до концаю Бесконечный скролл.

Так же стоит погуглить метод
IntersectionObserver
Так как он является болеее оптимизированным
*/













// События загрузки странницы
/*
1. DOMContentLoaded - браузер полностью загрузил HTML,
было построено DOM - дерево, но внешние ресурсы,
такие как картинки <img> и стили, могут быть еще не загружены.
2. load - браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
3. beforunload / unload - пользователь покидает страницу.
*/

/*
document.readState - сщстояние загрузки

Есть три возможных значения:
"loading" - документ загружается
"interactive" - документ был полностью загружен
"compleat" - документ был полностью прочитан
и все ресурсы (такие как изображение) были тоже загружены.
*/


// Пример

// // События DOMcontentLoaded срабатывает на объекте document
// document.addEventListener('DOMContentLoaded', readyDom);

// // Событие load срабатывает на объект window
// window.addEventListener('load', readyLoad);

// function readyDom() {
//     const image = document.querySelector('.image') // получаем картинку
//     console.log(document.readyState); //interactive показывает что страница прочитана
//     console.log('Dom загружен'); // Дом загружен
//     console.log(image.offsetWidth); // 0 картинка еще не была загружена
// }
// function readyLoad(){
//  console.log(document.readyState); //complete тоесть документ полностью загружен 
//  const image = document.querySelector('.image'); // берем изображение
//  console.log('Страница загружена'); // показывает что страница загружена
//  console.log(image.offsetWidth); // ширина изображения
// };




// События beforunload / unload срабатывает на объекте window
// window.addEventListener('beforeunload', beforUnload);
// function beforUnload(event){
//     // Отменить события как указано в стандарте
//     event.preventDefault();
//     // Chrome требуется установка возвратного значения
//     event.returnValue = '';
// };
/*
Фишка в том, что при перезагрузки страницы выйдет окно, которое спросит точно
ли мы хотим перезагрузить страницу, для Хрома есть доп условие иначе
работать ничего не будет.

Полезно при вводе данных, на случай если случайно человек захочет перзагрузить 
страницу. То его предупредят о том, что данные не сохранятся
*/




// Unload 
// Пользователь уже ушел с нашей странцы
// Но в фоновом режиме мы можем попрасить его выполнить еще какие то действия

// как заставить браузер выполняять что-то в фоновом режиме нужно почитать
// https://w3c.github.io/beacon/

// window.addEventListener('unload', function(e){
//     // отправка статистики в фоновом режиме и т.д.
//     // navigator.sendBeacon(url, data)
//     // https://w3c.github.io/beacon/
// });






// Home work
// Task
/*
Пишем форму поиска, которая открывается по клику на иконку,
а закрывается по клику на любое место страницы, кроме самой формы.
Также, закрыть форму можно по клавише (Esc) на клавиатуре.
Для поля ввода поискового запроса добавляем счетчик символов.
*/

