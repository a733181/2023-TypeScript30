"use strict";
// 使用類型斷言告訴 TypeScript SpeechRecognition 的類型
const SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    null;
if (SpeechRecognition) {
    // 在支持的情況下，定義 SpeechRecognition 變數
    const recognition = new SpeechRecognition();
    // 下一步操作 SpeechRecognition 對象
}
else {
    // 在不支持的情況下，給出錯誤處理或提示
    console.error('SpeechRecognition is not supported in this browser.');
}
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'zh-TW';
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '');
    p.textContent = poopScript;
    if (event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});
recognition.addEventListener('end', recognition.start);
recognition.start();
