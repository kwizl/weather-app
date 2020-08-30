import Search from './models/search';
import { elements } from './controller/base';
import { Display } from './views/display';
import { Conversion } from './controller/conversion';

(() => {
  const display = Display();
  const convert = Conversion();

  display.result();

  document.querySelector('.temp').addEventListener('click', () => {
    const text = document.querySelector('.temp').textContent;
    if (text.includes('F')) {
      const val = text.replace(' °F', '');
      const num = Number(val);
      console.log(num);
      document.querySelector('.temp').textContent = '';
      document.querySelector('.temp').textContent = convert.fahrenheitToCelsius(num, 'C');
    } else if (text.includes('C')) {
      const val = text.replace(' °C', '');
      const num = Number(val);
      console.log(num);
      document.querySelector('.temp').textContent = '';
      document.querySelector('.temp').textContent = convert.celsiusToFahrenheit(num, 'F');
    }
  });

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = elements.inputName.value;
    const search = new Search(String(city));
    display.resetData();
    search.getResults();
  });
})();