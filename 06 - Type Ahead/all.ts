interface City {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}

const searchEl = document.querySelector<HTMLInputElement>('.search')!;
const suggestionsEl = document.querySelector<HTMLUListElement>('.suggestions')!;

const endpoint: string =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities: City[] = [];

(async function () {
  try {
    const res: Response = await fetch(endpoint);
    const data: City[] = await res.json();
    cities.push(...data);
  } catch (error) {
    console.log(error);
  }
})();

function renderMatchesHandler(this: HTMLInputElement) {
  const matchArray: City[] = findMatches(this.value, cities);
  const html = matchArray
    .map((place: City) => {
      const regex = new RegExp(this.value.toString(), 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
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

function findMatches(wordToMatch: string, cities: City[]) {
  return cities.filter((place: City) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x: string) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

searchEl.addEventListener('change', renderMatchesHandler);
searchEl.addEventListener('keyup', renderMatchesHandler);
