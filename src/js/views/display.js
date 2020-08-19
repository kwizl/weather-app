const Display = () => {
  const result = () => {
    const content = document.getElementById('content');
    const divResults = document.createElement('div');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const hr1 = document.createElement('hr');
    const hr2 = document.createElement('hr');
    const hr3 = document.createElement('hr');
    const hr4 = document.createElement('hr');
    const hr5 = document.createElement('hr');

    divResults.classList.add('results');
    h2.classList.add('name');
    hr1.classList.add('line');
    hr2.classList.add('line');
    hr3.classList.add('line');
    hr4.classList.add('line');
    hr5.classList.add('line');
    p1.classList.add('temp');
    p2.classList.add('descp');
    p3.classList.add('humidity');
    p4.classList.add('wind');

    content.appendChild(divResults);
    divResults.appendChild(h2);
    divResults.appendChild(hr1);
    divResults.appendChild(p1);
    divResults.appendChild(h2);
    divResults.appendChild(p2);
    divResults.appendChild(hr3);
    divResults.appendChild(p3);
    divResults.appendChild(hr4);
    divResults.appendChild(p4);
    divResults.appendChild(hr5);
  };

  return { result };
};

// eslint-disable-next-line import/prefer-default-export
export { Display };
