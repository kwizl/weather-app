import { Conversion } from '../controller/conversion';

const Display = () => {
  const convert = Conversion();

  const result = () => {
    const content = document.querySelector('.content');
    const divResults = document.createElement('div');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    divResults.classList.add('results');
    h2.classList.add('name');
    p1.classList.add('temp');
    p2.classList.add('desc');
    p3.classList.add('humidity');

    p1.setAttribute('id', 'temp');

    content.appendChild(divResults);
    divResults.appendChild(h2);
    divResults.appendChild(p1);
    divResults.appendChild(p2);
    divResults.appendChild(p3);
  };

  const apiData = (data) => {
    document.querySelector('.name').textContent = `City: ${data.name}`;
    document.querySelector('.temp').textContent = `${convert.onloadConversion(data.main.temp)}`;
    document.querySelector('.desc').textContent = `Description: ${data.weather[0].description}`;
    document.querySelector('.humidity').innerHTML = `<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
  };

  const resetData = () => {
    document.querySelector('.name').textContent = '';
    document.querySelector('.temp').textContent = '';
    document.querySelector('.desc').textContent = '';
    document.querySelector('.humidity').textContent = '';
  };

  const errorDisplay = (error) => {
    document.querySelector('.error').textContent = error;
  };

  const errorErase = () => {
    document.querySelector('.error').textContent = '';
  };

  return {
    result, resetData, errorErase, apiData, errorDisplay,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Display };
