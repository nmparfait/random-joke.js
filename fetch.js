const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData({value: joke}) {
  img.classList.add('shake-img');
  //const joke = JSON.parse(xhr.responseText).value;
  //const {value: joke} = data;
  content.textContent = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
}
