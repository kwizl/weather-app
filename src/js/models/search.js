import { Display } from '../views/display';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const display = Display();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=5b2f48f1d0bbdc18d1a72fba0922419e`, { mode: 'cors' });
      const result = await response.json();
      display.result();
      display.apiData(result);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
}