



// https://newsapi.org/v2/top-headlines?country=in&apiKey=ecc034d761444958a674b8b3848c6cec

let newsAcc = document.getElementById('accordionFlushExample');


let key = '43ef22a332bf4fbbbdbb1f9abde8b07b';
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`, true);


xhr.onload = function () {
  if (this.status === 200) {
    let articles = JSON.parse(this.responseText).articles;
    let allNewsHtm = "";
    articles.forEach(function (element, index) {



      let allNews = `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
              <strong>${element.title}</strong>
              </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
              <p>${element.description}</p>
              <a href="${element.url}">Read more in ${element.source['name']}</a>
              
              </div>
            </div>
          </div>
          `
      allNewsHtm += allNews;

    });
    newsAcc.innerHTML = allNewsHtm;

  } else {
    console.log("error");
  }

}

xhr.send();





