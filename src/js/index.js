import { Detail } from './views/detailView';
import Search from './models/search';
import { elements } from './controller/base';

function Init() {
  const city = elements.inputName.value;
  const search = new Search(String(city));
  const detail = Detail();

  elements.submit.addEventListener('submit', (e) => {
    e.preventDefault();
    search.getResults();
    detail.result();
  });

  const data = search.getResults();
  elements.name.textContent = data.name;
  elements.temp.textContent = data.main.temp;
  elements.desc.textContent = data[0].description;
  elements.humidity.textContent = data.humidity;
  elements.wind.textContent = data.wind;
}

Init();