/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    document.querySelectorAll('.promo__adv img').forEach((item) => {
        item.remove();
    });
    document.querySelector('div.promo__genre').innerText = "ДРАМА";
    document.querySelector('div.promo__bg').style.cssText = 'background-image: url("img/bg.jpg")';
    
    const alreadyWatched = document.getElementsByClassName("promo__interactive-list")[0];

    const createFilmList = () => {
        alreadyWatched.innerHTML = '';
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => {
        alreadyWatched.innerHTML += `<li class = "promo__interactive-item">${i+1}. ${film}<div class = "delete"></div></li>`;
    });
    };
    createFilmList();
    
    const adder = document.getElementsByClassName('adding__input')[0];
    const fav = document.querySelector('[type="checkbox"]');
    const btnConf = document.getElementsByClassName('yes')[0].nextElementSibling;
    
    btnConf.addEventListener('click', (e) => {
        e.preventDefault();
        if (adder.value) {
            if (fav.checked == true) {
                console.log("Adding favourite film!");
            }
            if (adder.value.length < 21) {
                movieDB.movies.push(adder.value);
            }
            else {
                movieDB.movies.push(adder.value.slice(0,21) + '...');
            }
            createFilmList();
        } 
    });
    
    document.querySelectorAll('.delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            let filmName = e.target.parentElement.innerText.toLowerCase();
            filmName = filmName.slice(3);
            filmName = filmName[0].toUpperCase() + filmName.slice(1);
            let i = movieDB.movies.indexOf(filmName);
            movieDB.movies.splice(i, 1);
            console.log(movieDB.movies);
            createFilmList();
        });
    });
});








