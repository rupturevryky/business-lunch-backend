// Установите необходимые модули: express
// Команда для установки: npm install express

const express = require('express');
const cors = require('cors');
const app = express();

// Подключаем CORS
app.use(cors());
app.use(cors({
    origin: 'http://127.0.0.1:5500' // Разрешить только этот источник
}));
// Пример данных

const dishes = [
    { keyword: 'gaspacho', name: 'Гаспачо', price: 300, category: 'soup', count: '250 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/soups/gazpacho', kind: 'вегетарианский' },
    { keyword: 'mushroom_soup', name: 'Грибной суп-пюре', price: 185, category: 'soup', count: '330 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/soups/mushroom_soup', kind: 'вегетарианский' },
    { keyword: 'chicken', name: 'chicken', price: 330, category: 'soup', count: '350 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/soups/chicken', kind: 'мясной' },
    { keyword: 'norwegian', name: 'Норвежский суп', price: 270, category: 'soup', count: '330 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/soups/norwegian_soup', kind: 'мясной' },
    { keyword: 'ramen', name: 'Рамен', price: 375, category: 'soup', count: '425 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/soups/ramen', kind: 'рыбный' },
    { keyword: 'tomyum', name: 'Том ям с креветками', price: 650, category: 'soup', count: '500 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/soups/tomyum', kind: 'рыбный' },
    { keyword: 'chickencutletsandmashedpotatoes', name: 'Котлеты из курицы с картофельным пюре', price: 225, category: 'main_course', count: '280 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/main_course/chickencutletsandmashedpotatoes', kind: 'мясное' },
    { keyword: 'fishrice', name: 'Рыбная котлета с рисом и спажей', price: 320, category: 'main_course', count: '270 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/main_course/fishrice', kind: 'рыбное' },
    { keyword: 'friedpotatoeswithmushrooms1', name: 'Жареная картошка с грибами', price: 150, category: 'main_course', count: '250 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/main_course/friedpotatoeswithmushrooms1', kind: 'вегетарианское' },
    { keyword: 'lasagna', name: 'Лазанья', price: 285, category: 'main_course', count: '310 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/main_course/lasagna', kind: 'мясное' },
    { keyword: 'pizza', name: 'Пицца Маргарита', price: 500, category: 'main_course', count: '250 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/main_course/pizza', kind: 'вегетарианское' },
    { keyword: 'shrimppasta', name: 'Паста с креветками', price: 340, category: 'main_course', count: '280 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/main_course/shrimppasta', kind: 'рыбное' },
    { keyword: 'tea', name: 'Чёрный чай', price: 90, category: 'beverages', count: '300 мл', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/beverages/tea', kind: 'горячий' },
    { keyword: 'orangejuice', name: 'Апельсиновый сок', price: 120, category: 'beverages', count: '300 мл', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/beverages/orangejuice', kind: 'холодный' },
    { keyword: 'greentea', name: 'Зелёный чай', price: 100, category: 'beverages', count: '300 мл', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/beverages/greentea', kind: 'горячий' },
    { keyword: 'carrotjuice', name: 'Морковный сок', price: 110, category: 'beverages', count: '300 мл', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/beverages/carrotjuice', kind: 'холодный' },
    { keyword: 'cappuccino', name: 'Капучина', price: 180, category: 'beverages', count: '300 мл', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/beverages/cappuccino', kind: 'горячий' },
    { keyword: 'applejuice', name: 'Яблочный сок', price: 500, category: 'beverages', count: '300 мл', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/beverages/applejuice', kind: 'холодный' },
    { keyword: 'caesar', name: 'Цезарь с цыплёнком', price: 370, category: 'salads_starters', count: '220 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/salads_starters/caesar', kind: 'мясной' },
    { keyword: 'caprese', name: 'Капреза с моцарелой', price: 350, category: 'salads_starters', count: '235 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/salads_starters/caprese', kind: 'вегетарианский' },
    { keyword: 'frenchfries1', name: 'Картофель фри с соусом Цезарь', price: 280, category: 'salads_starters', count: '235 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/salads_starters/frenchfries1', kind: 'вегетарианский' },
    { keyword: 'frenchfries2', name: 'Картофель фри с соусом кетчупом', price: 260, category: 'salads_starters', count: '235 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/salads_starters/frenchfries2', kind: 'вегетарианский' },
    { keyword: 'saladwithegg', name: 'Корейский салат с овощами и яйцом', price: 330, category: 'salads_starters', count: '250 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/salads_starters/saladwithegg', kind: 'вегетарианский' },
    { keyword: 'tunasalad', name: 'Салат с тунцом', price: 480, category: 'salads_starters', count: '250 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/salads_starters/tunasalad', kind: 'рыбный' },
    { keyword: 'baklava', name: 'Пахлава', price: 220, category: 'desserts', count: '300 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/desserts/baklava', kind: 'средняя порция' },
    { keyword: 'checheesecake', name: 'Чизкейк', price: 240, category: 'desserts', count: '125 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/desserts/checheesecake', kind: 'маленькая порция' },
    { keyword: 'chocolatecheesecake', name: 'Шоколадный чизкейк', price: 260, category: 'desserts', count: '150 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/desserts/chocolatecheesecake', kind: 'маленькая порция' },
    { keyword: 'chocolatecake', name: 'Шоколадный торт', price: 270, category: 'desserts', count: '140 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/desserts/chocolatecake', kind: 'маленькая порция' },
    { keyword: 'donuts', name: 'Пончики (6 штук)', price: 650, category: 'desserts', count: '700 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/desserts/donuts', kind: 'большая порция' },
    { keyword: 'donuts2', name: 'Пончики (3 штуки)', price: 410, category: 'desserts', count: '350 г', image: 'http://lab7-api.std-900.ist.mospolytech.ru/images/desserts/donuts2', kind: 'средняя порция' }
];


// Создаём маршрут для получения данных
app.get('/dishes', (req, res) => {
    res.json(dishes);
});

// Запускаем сервер
const PORT = 3000; // Вы можете указать любой доступный порт
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
