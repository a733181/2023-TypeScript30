const msg = new SpeechSynthesisUtterance();
let voices: SpeechSynthesisVoice[] = [];
const voicesDropdown =
  document.querySelector<HTMLSelectElement>('[name="voice"]')!;
const options = document.querySelectorAll('[type="range"], [name="text"]')!;

const speakButton = document.querySelector('#speak')!;
const stopButton = document.querySelector('#stop')!;
msg.text = document.querySelector<HTMLTextAreaElement>('[name="text"]')!.value;

function populateVoices(this: SpeechSynthesis) {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes('en'))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join('');
}

function setVoice(this: HTMLOptionElement) {
  msg.voice = voices.find((voice) => voice.name === this.value) ?? null;
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption(this: HTMLInputElement) {
  console.log(this.name, this.value);
  switch (this.name) {
    case 'rate':
      msg.rate = parseFloat(this.value);
      break;
    case 'pitch':
      msg.pitch = parseFloat(this.value);
      break;
    case 'volume':
      msg.volume = parseFloat(this.value);
      break;
    case 'text':
      msg.text = this.value;
      break;
    default:
      break;
  }
  toggle();
}
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach((option) => option.addEventListener('change', setOption));
speakButton.addEventListener('click', () => {
  toggle();
});
stopButton.addEventListener('click', () => toggle(false));
