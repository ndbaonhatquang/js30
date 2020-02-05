const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
const searchInput = document.querySelector('.search');
searchInput.addEventListener('keyup', updateFilter);

function updateFilter() {
    inputValue = this.value;
    let data = getData(inputValue);
    console.log(data);
    
    const suggestions = document.querySelector('.suggestions');
    const html = data.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${(place.population)}</span>
          </li>
        `;
      }).join('');
    suggestions.innerHTML = html;
}
function getData(value) {
    return cities.filter(place => {
        const regex = new RegExp(value, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}