"use strict";
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];
function addItem(event) {
    event.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false,
    };
    items.push(item);
    randerList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}
function randerList(plates = [], platesList) {
    platesList.innerHTML = plates
        .map((plate, i) => {
        return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    })
        .join('');
}
function toggleDone(event) {
    const target = event.target;
    if (!target || !target.matches('input'))
        return;
    const index = Number(target.dataset.index);
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    randerList(items, itemsList);
}
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
randerList(items, itemsList);
