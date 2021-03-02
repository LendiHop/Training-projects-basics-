'use strict';

const hearts = document.querySelectorAll(".heart");

hearts.forEach((item) => {
    item.style.cssText = "background-color: blue; width: 300px";
});

const div = document.createElement('div');
div.classList.add('black');

document.getElementsByTagName('button')[0].replaceWith(div);
document.getElementsByClassName('circle')[0].remove();
div.innerHTML = "<h3>Hello World</h3>";
div.insertAdjacentHTML("afterbegin","<h1>Big TEXT</h1>");

