declare const cornify_add: () => void;

const pressed: string[] = [];
const secretCode = 'web';

window.addEventListener('keyup', (event: KeyboardEvent) => {
  pressed.push(event.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
  console.log(pressed);
});
