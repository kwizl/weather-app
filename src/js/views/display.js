const Display = () => {
  const result = () => {
    const content = document.getElementById('content');
    const divResults = document.createElement('div');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    divResults.classList.add('results');
    h2.classList.add('name');
    p1.classList.add('temp');
    p2.classList.add('desc');
    p3.classList.add('humidity');
    p4.classList.add('wind');

    content.appendChild(divResults);
    divResults.appendChild(h2);
    divResults.appendChild(p1);
    divResults.appendChild(p2);
    divResults.appendChild(p3);
    divResults.appendChild(p4);
  };

  const apiData = (data) => {
    document.querySelector('.name').textContent = `City: ${data.name}`;
    document.querySelector('.temp').textContent = `Temp: ${data.main.temp} °C`;
    document.querySelector('.desc').textContent = `Description: ${data.weather[0].description}`;
    document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.querySelector('.wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
  };

  const errorDisplay = (error) => {
    document.querySelector('.error').textContent = error;
  };

  return { result, apiData, errorDisplay };
};

module.exports = {
  Display,
};
