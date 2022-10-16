let jobContainer = document.querySelector(".content .container");
let myData = "certification.json";
fetch(myData)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.data.forEach((com) => {
      let myBox = `
      <div class="box">
        <img src="${com.companyLogo}" alt="photo">
        <h3><a href="${com.companyURL}">${com.companyName}</a></h3>
      </div>
      `;
      jobContainer.innerHTML += myBox;
    });
  });
