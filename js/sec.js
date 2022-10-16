let title = "../sectionTitle.json";
let coursesContainer = document.querySelector(
  "#courses .container .box-container"
);
let newsContainer = document.querySelector("#news .container .box-container");
getSection();
function getSection() {
  fetch(title)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //courses
      for (let i = 0; i < data.courses.length; i++) {
        let courseBox = `
        <div class="box">
            <div class="img">
              <img src="${data.courses[i].img}" alt="photo" />
            </div>
            <div class="name"><a href="${data.courses[i].url}">${data.courses[i].title}</a></div>
          </div>
        `;
        coursesContainer.innerHTML += courseBox;
      }
      //news
      for (let i = 0; i < data.news.length; i++) {
        let newsBox = `
            <div class="box">
                <div class="img">
                  <img src="${data.news[i].img}" alt="photo" />
                </div>
                <div class="name"><a href="${data.news[i].url}">${data.news[i].title}</a></div>
                </div>
            `;
        newsContainer.innerHTML += newsBox;
      }
    });
}
