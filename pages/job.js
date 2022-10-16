let jobContainer = document.querySelector(".content .container");
let myData = "jobs.json";
fetch(myData)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.data.forEach((com) => {
      let myBox = `
      <div class="box">
            <img src="${com.companyLogo}" alt="photo" />
            <h3><a href="${com.jobLink}">${com.companyName}</a></h3>
            <p>${com.companyDescription}</p>
          </div>
      `;
      jobContainer.innerHTML += myBox;
    });
  });
