'use strict';

(function () {
    const ROOT_ID = 'root';
    const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
    const displayFruits = fruits.map(fruit => fruit === 'Apple' ? 'Only ' + fruit : fruit);

    const root = document.getElementById(ROOT_ID);

    displayFruits.forEach((fruit) => {
       const container = document.createElement('li');
       container.innerText = fruit;
       root.appendChild(container);
    });
})();