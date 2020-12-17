    let data = [];

$(document).ready(function () {
    console.log("ready!");
    loadData();
});



async function loadData() {
    await $.getJSON("data.json", function (projects) {
        parseData(projects);
        console.log(data)


      let currPage = $("#renderheader").attr("title")
      console.log(currPage)

      let currProject = data.filter(x => x.id == currPage)
      loadHeader(data[currPage -1])
    });

  }


function parseData(projects) {
  $.each(projects, function(i) {
    let card
      data.push(projects[i]);

card = `<div role="listitem" class="collection-item w-dyn-item w-col w-col-6">
  <a href="${projects[i].link}" class="card-link w-inline-block">
    <div class="product-card">
      <div class="div-block-12" style="background-image: url('${projects[i].image}'); background-color: ${projects[i].color}"></div>
      <div class="product-card-description">
        <div>
          <div class="tagline tagline-promo-40">${projects[i].client}</div>
          <h3 class="heading-3 cardtitle">${projects[i].Title}</h3>
          <h5 class="heading-3 subtitle">${projects[i].subtitle}</h5>
        </div>
      </div>
      <div class="tag-wrapper">
        <div class="tag">${projects[i].tag_1}</div>
        <div class="tag">${projects[i].tag_support}</div>
        <div class="tag">${projects[i].tag_2}</div>
      </div>
    </div>
  </a>
</div>`
      $("#rendercards").append(card);

    });



}

function loadHeader(project){

  console.log(project.id)


  let header = `<div role="listitem" class="w-dyn-item" id="${project.id}_header">
    <div class="project-hero" style="background: ${project.color}">
      <div class="wrapper">
        <div class="row align-centre">
          <div class="col lg-5 md-3"><img width="571" src="${project.image}" alt="" class="side-image"></div>
          <div class="col lg-1"></div>
          <div class="col lg-5 md-4">
            <div class="margin-bottom">
              <h4 class="heading-3 faded">${project.subtitle}</h4>
              <h4 class="heading-3 faded">${project.client}</h4>
              <h2 class="heading-1">${project.Title}</h2>
              <p class="heading-3">${project.Overview}</p>
            </div>
            <div class="col">
              <div>
                <h4 class="heading_5 whiteshadow">Contributions</h4>
              </div>
              <div class="paragraph-small dark w-richtext">${project.contributions}</div>
            </div>
            <div class="row flex-horizontal">
              <div class="col">
                <div>
                  <h4 class="heading_5 whiteshadow">Goals</h4>
                </div>
                <div class="paragraph-small dark w-richtext">${project.Goals}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`


  $("#renderheader").append(header);
}
