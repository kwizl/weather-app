import { Display } from './views/display';
import Search from './models/search';
import { elements } from './controller/base';

const city = elements.inputName.value;
const search = new Search(String(city));
elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  search.getResults();
});
