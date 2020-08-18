// async function GetData(query) {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=5b2f48f1d0bbdc18d1a72fba0922419e`, { mode: 'cors' });
//   const data = await response.json();
//   console.log(data);
// }

// GetData('London,uk');

const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

function getCity() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}'&appid=5b2f48f1d0bbdc18d1a72fba0922419e`, { mode: 'cors' })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(() => console.log('Wrong city name'));
}

button.addEventListener('click', getCity);
