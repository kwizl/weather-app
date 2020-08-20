import { Display } from '../views/display';
import { elements } from '../controller/base';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const display = Display();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=5b2f48f1d0bbdc18d1a72fba0922419e`, { mode: 'cors' });
      const json = await response.json();
      display.result();
      document.querySelector('.name').textContent = json.name;
      document.querySelector('.temp').textContent = json.main.temp;
      document.querySelector('.desc').textContent = json.weather[0].description;
      document.querySelector('.humidity').textContent = json.main.humidity;
      document.querySelector('.wind').textContent = json.wind.speed;
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  }
}