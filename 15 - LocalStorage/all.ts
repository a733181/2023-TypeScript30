interface Item {
  text: string;
  done: boolean;
}

const addItems = document.querySelector<HTMLFormElement>('.add-items')!;
const itemsList = document.querySelector<HTMLUListElement>('.plates')!;

const items: Item[] = [];

function addItem(this: HTMLFormElement, event: SubmitEvent) {
  event.preventDefault();

  const text = this.querySelector<HTMLInputElement>('[name=item]')!.value;

  const item = {
    text,
    done: false,
  };

  items.push(item);

  randerList(items, itemsList);

  localStorage.setItem('items', JSON.stringify(items));

  this.reset();
}

function randerList(plates: Item[] = [], platesList: HTMLUListElement) {
  platesList.innerHTML = plates
    .map((plate: Item, i: number) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    })
    .join('');
}

function toggleDone(event: MouseEvent) {
  const target = event.target as HTMLInputElement;

  if (!target || !target.matches('input')) return;

  const index: number = Number(target.dataset.index as string);

  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  randerList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

randerList(items, itemsList);
