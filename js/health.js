let newsHealth = document.getElementById('health');


// https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ecc034d761444958a674b8b3848c6cec

const hlt = new XMLHttpRequest();

hlt.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`, true);


hlt.onload = function () {
  if (this.status === 200) {
    let articlesHl = JSON.parse(this.responseText).articles;
    let healthNewsHtm = "";
    articlesHl.forEach(function (element, index) {

      let healthNews = `<div class="col">
      <div class="card">
          <img src="${element.urlToImage}" alt="Sorry cann't found">
          <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text" class="accordion-body">
          ${element.content}</p>
          <a href="${element.url}">Read more in ${element.source['name']}</a>
          </div>
      </div>
  </div>`;
      healthNewsHtm += healthNews;

    });
    newsHealth.innerHTML = healthNewsHtm;

  } else {
    console.log("error");
  }

}

hlt.send();