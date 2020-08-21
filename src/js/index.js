import Search from './models/search';
import { elements } from './controller/base';
import { Display } from './views/display';

const city = elements.inputName.value;
const search = new Search(String(city));
const display = Display();
display.result();

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  search.getResults();
});
