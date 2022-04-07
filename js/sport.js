let newsSport = document.getElementById('sports-card');


// https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ecc034d761444958a674b8b3848c6cec

const cpr = new XMLHttpRequest();

cpr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`, true);


cpr.onload = function () {
  if (this.status === 200) {
    let articlesSp = JSON.parse(this.responseText).articles;
    let sportNewsHtm = "";
    articlesSp.forEach(function (element, index) {

      let sportNews = `<div class="col">
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
      sportNewsHtm += sportNews;

    });
    newsSport.innerHTML = sportNewsHtm;

  } else {
    console.log("error");
  }

}

cpr.send();