// function mapInit() { 
//     ymaps.ready(() => { 
//         let myMap = new ymaps.Map('map', {
//             center: [59.938,30.3],
//             zoom: 10, 
//             controls: ['zoomControl']
//         });

//         let coord = myMap.getCenter();
//         let obj = {
//             // Зададим содержимое заголовка балуна.
//             balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
//                 '<span class="description">Сеть кинотеатров</span>',
//             // Зададим содержимое основной части балуна.
//             balloonContentBody: '<img src="#" height="150" width="200"> <br/> ' +
//                 '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
//                 '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
//             // Зададим содержимое нижней части балуна.
//             balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
//             // Зададим содержимое всплывающей подсказки.
//             hintContent: 'Рога и копыта'
//         }

//         var placemark = new ymaps.Placemark(coord, obj);
//         myMap.geoObjects.add(placemark);

//         placemark.events
//         .add('mouseenter', function (e) {
//             // Ссылку на объект, вызвавший событие,
//             // можно получить из поля 'target'.
//             e.get('target').options.set('preset', 'islands#greenIcon');
//         })
//         .add('mouseleave', function (e) {
//             e.get('target').options.unset('preset');
//         });

//     });
// }
   
// export { 
//   mapInit
// }