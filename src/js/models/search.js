export default class Search {
  constructor(query) {
    this.query = query;
  }

  // eslint-disable-next-line consistent-return
  async getResults() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=5b2f48f1d0bbdc18d1a72fba0922419e`, { mode: 'cors' });
      this.result = await response.json();
      return this.result;
    } catch (error) {
      return error.message;
    }
  }
}