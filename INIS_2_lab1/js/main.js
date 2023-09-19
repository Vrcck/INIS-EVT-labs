const config = { //создается объект
    'lineSize': 5,  //толщина линии
    'color': 'black' //цвет линии
}

window.onload = () => { //событие onload для объекта window и стрелочная функция, то, что в фигурных скобках, выполнится после того, как вся страница прогрузится 

    
    const canvas = document.getElementById('canvas');//тут ищем элемент с id и сохраняем в переменную, будет использоваться для создания канваса
    const ctx = canvas.getContext('2d');//создаем 2д контекст рисования для канваса 
    const indicator = document.getElementById('indicator');//ищем элемент с id и сохраняем в переменную 

    //устанавливаем ширину и высоту канваса 
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);

   
    ctx.lineWidth = config.lineSize; //толщина линии для рисования 
    ctx.lineJoin = 'round'; //тип угла от пересечения двух линий, выбрали закругленный 
    ctx.lineCap = 'round'; //стиль концов линии, выбрали закругленные 
    ctx.strokeStyle = config.color; //цвет, градиент или шаблон для обводки, выбрали color (черный) 
    ctx.fillStyle = config.color; //то же самое для заливки, выбрали черный 

    var isRec = false, //идет ли запись (рисование) 
        newDraw = false, //начата ли новая запись 
        posX = [], //координата х 
        posY = [] //координата у 

   
    canvas.addEventListener("mousedown", (e) => { //при нажатии левой кнопки мыши запускается функция 
        if (isRec) return; 
        clearCanvas(); //чистим холст 
        canvas.onmousemove = (e) => recordMousePos(e); //запись позиции мыши 
    }); 

   
    canvas.addEventListener("mouseup", () => stopDrawing()); //кнопка отпущена - запуск функции 

    
    document.addEventListener("keydown", (e) => { //если нажата кнопка 
        if(e.code == "Space") { //и эта кнопка пробел 
            if(!isRec) { //и запись не активирована 
                ctx.clearRect(0, 0, canvas.width, canvas.height); //чистим холст 
                ctx.beginPath(); //сбрасываем контур 
                isRec = true; //меняем на тру 
                switchIndicator(false); //меняем индикатор 
                autoDraw(); //вызываем функцию 
            } 
        } 
    }) 

    
    function recordMousePos(e) { //записываем координаты и рисуем линию между предыдущей и текущей позициями мыши 
        posX.push(e.clientX); //push добавляет один или более элементов в конец массива и возвращает новую длину массива 
        posY.push(e.clientY); 
        drawLine(e.clientX, e.clientY); 
    } 

    
    function drawLine(x, y) { //рисуем линию между двумя заданными координатами на холсте 
        ctx.lineTo(x, y); //lineTo добавляет новую точку контура и создает линию к этой точке от последней заданной точки, не рисует линию 
        ctx.stroke(); //а вот этот метод уже рисует линию 
    } 

    
    function clearCanvas() { //чистит холст, начинает новый контур и, если newDraw = true, делает sketch видимым 
        if(newDraw) { 
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clearRect стирает любое ранее нарисованное 
            newDraw = false; 
            if(sketch != null) { 
                sketch.style.visibility = 'visible'; 
            } 
        } 
        ctx.beginPath(); //начинает новый контур или сбрасывает текущий контур 
    } 

   
    function stopDrawing() { //прекращает запись движения мыши, добавляет undefined (неизвестное или неопределенное значение) в массивы posX и posY 
        canvas.onmousemove = null; 
        posX.push(undefined); 
        posY.push(undefined); 
    } 

   
    function switchIndicator(enable) { //тот самый индикатор, который меняется, для обозначения состояния записи 
        if(enable) { 
            indicator.classList.add('isWrite'); 
        }else { 
            indicator.classList.remove('isWrite'); 
        } 
    } 

    function autoDraw() { //автоматом рисует на холсте с помощью массивов posX и posY 
        var sketch = document.getElementById("sketch"); 
        var x = posX; 
        var y = posY;

        var drawing = setInterval(() => { //создает интервал, который выполняет функцию каждую миллисекунду, выполняется многократно, чтобы рисовать линии между точками 
            var currentX = x.shift(); //извлекается первый элемент из массива, сохраняется в currentX и удаляется из массива 
            var currentY = y.shift(); //то же самое 
            if (x.length <= 0 && y.length <= 0) { //если массивы пустые (все координаты использованы) 
                clearInterval(drawing); //останавливает выполнение интервала drawing, чтобы прекратить рисование 
                switchIndicator(true); //меняем индикатор (опять) 
                isRec = false; //запись завершена 
                newDraw = true; //начнем новую 
            }else { //просто продолжаем выполнение 
                if(currentX == undefined && currentY == undefined) { //нужно ли начать новую линию 
                    ctx.beginPath(); //начинаем новую линию 
                }else { //если не нужно 
                    drawLine(currentX, currentY); //рисуем дальше 
                } 
            } 
        }, 1); //это тот самый интервал в 1 миллисекунду 

        if(sketch != null) { 
            sketch.style.visibility = 'hidden'; //скрыли, если скетч не ноль 
        } 
    } 
     
}