const list = document.querySelectorAll("aside ul li");
const data = "br.json";
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
          //   console.log(data.data[e.target.dataset.cont].vedioURLmp4);
          //   console.log(data.data[e.target.dataset.cont].vedioURLogg);
          mediaContainer.innerHTML = `
            <video width="550" controls>
            <source src="${
              data.data[e.target.dataset.cont].vedioURLmp4
            }" type="video/mp4" />
            <source src="${
              data.data[e.target.dataset.cont].vedioURLogg
            }" type="video/ogg" />
            Your browser does not support HTML5 video.
          </video>
            `;
        });
    });
  }
}
