let busiSport = document.getElementById('businessNews');



// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ecc034d761444958a674b8b3848c6cec

const bsy = new XMLHttpRequest();

bsy.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`, true);


bsy.onload = function () {
    if (this.status === 200) {
        let articlesBs = JSON.parse(this.responseText).articles;
        let busiNewsHtm = "";
        articlesBs.forEach(function (element, index) {

            let busiNews = `  <div class="row g-0 my-3" style="border: 1px solid rgba(0,0,0,.125);">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="Sorry Cann't found">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">${element.content}</p>
                                <a href="${element.url}">Read more in ${element.source['name']}</a>
                                </div>
                            </div>
                        </div>`;
            busiNewsHtm += busiNews;

        });
        busiSport.innerHTML = busiNewsHtm;

    } else {
        console.log("error");
    }

}

bsy.send();