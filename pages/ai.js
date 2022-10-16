const list = document.querySelectorAll("aside ul li");
const data = "ai.json";
let mediaContainer = document.querySelector(".content-holder");
// console.log(mediaContainer.innerHTML);
getAiData();
function getAiData() {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", (e) => {
      //   console.log(e.target.dataset.cont);
      list.forEach((li) => {
        li.style.color = "#fff";
      });
      e.target.style.color = "rgb(165, 165, 165)";
      fetch(data)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data.data[e.target.dataset.cont].vedioURLId);
          // console.log(data.data[e.target.dataset.cont].vedioURLogg);
          mediaContainer.innerHTML = `
          <iframe width="550" src="https://www.youtube.com/embed/${
            data.data[e.target.dataset.cont].vedioURLId
          }">
          </iframe>
            `;
        });
    });
  }
}
