"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const searchEl = document.querySelector('.search');
const suggestionsEl = document.querySelector('.suggestions');
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(endpoint);
            const data = yield res.json();
            cities.push(...data);
        }
        catch (error) {
            console.log(error);
        }
    });
})();
function renderMatchesHandler() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
        .map((place) => {
        const regex = new RegExp(this.value.toString(), 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
        .join('');
    suggestionsEl.innerHTML = html;
}
function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}
function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
searchEl.addEventListener('change', renderMatchesHandler);
searchEl.addEventListener('keyup', renderMatchesHandler);
