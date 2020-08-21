import Search from './models/search';
import { elements } from './controller/base';
import { Display } from './views/display';

(() => {
  const display = Display();
  display.result();

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = elements.inputName.value;
    const search = new Search(String(city));
    display.resetData();
    search.getResults();
  });
})();