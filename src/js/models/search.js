export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=5b2f48f1d0bbdc18d1a72fba0922419e`, { mode: 'cors' });
      this.result = await response.json();
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}