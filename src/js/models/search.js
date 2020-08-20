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
      const result = JSON.stringify(json);
      display.result();
      document.querySelector('.name').textContent = json.name;
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
}