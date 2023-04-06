"use strict";
const bandsEl = document.querySelector('#bands');
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];
function stripHandler(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
const sortedBandsHandler = bands.sort((a, b) => stripHandler(a) > stripHandler(b) ? 1 : -1);
bandsEl.innerHTML = sortedBandsHandler
    .map((band) => `<li>${band}</li>`)
    .join('');
