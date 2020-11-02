var t = +prompt("Введите температуру в градусах по Цельсию"); 
var T = (9 / 5) * t + 32;
alert("Температура по Фаренгейту равна  "+ T);

var name;
var admin;
name = "Василий";
admin = name;
alert(admin);
JS = 1000 + "108";
alert("Выражение JS равно  " + JS);
alert("Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и запускать скрипт, только после готовности DOM - дерева.\
Скрипты с атрибутом defer никогда не заблокирует страницу.Отложенные скрипты с помощью атрибута defer, сохраняют порядок относительно друг друга, как и скрипты без данного атрибута.\
В теории все ссылки на скрипты с тегом defer можно поместить в тег head, но в реальной жизни так все равно не нужно делать.\
Например сервис Google PageSpeed на такое будет ругаться и занижать оценку по скорости загрузки сайта.");
alert("Асинхронные скрипты с атрибутом async, не ждут загрузки элементов страницы и не ждут загрузки друг друга.\
 Они абсолютно независимые. Мы не знаем какой из двух скриптов загрузится первым и начнет работать. \
 Чем полезно такое на первый взгляд непредсказуемое поведение скрипта? Дело в том, что иногда мы будем подключать различные сторонние скрипты,\
 которые не особо привязаны к DOM-структуре. Например сторонним скриптам, таким как метрикам и счетчикам главное отловить, что пользователь зашел на сайт.\
 Когда мы используем скрипты с атрибутом async, то мы должны быть абсолютно точно уверены, что этот скрипт не зависит от DOM-структуры. \
 Для него совершенно не важно успела она сформироваться или нет. Кроме того он должен не зависеть от каких-то других скриптов и библиотек.");
