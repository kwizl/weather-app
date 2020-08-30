/* eslint-disable no-throw-literal */
import { Display } from '../views/display';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const display = Display();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&&units=metric&appid=5b2f48f1d0bbdc18d1a72fba0922419e`, { mode: 'cors' });
    const result = await response.json();
    if (this.query === '' || typeof result.name === 'undefined') {
      display.errorDisplay('Invalid Data');
    } else {
      display.apiData(result);
      console.log(result.name);
      display.errorErase();
    }
  }
}