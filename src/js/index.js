// import { Display } from './views/display.js';
import Search from './models/search';

const city = document.querySelector('.inputName').value;
const search = new Search(String(city));
document.querySelector('.inputSubmit').addEventListener('click', () => {
  search.getResults();
});