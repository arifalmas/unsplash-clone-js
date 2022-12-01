window.addEventListener("load", () => {
  unsplashApiFun();
  setTimeout(function () {
    bodyFun();
  }, 500);
});

function unsplashApiFun() {
  // ============================= variable start for this unsplashApiFun function =========================================
  const photo__one_row = document.querySelector("#photo__one_row");
  const photo__two_row = document.querySelector("#photo__two_row");
  const photo__three_row = document.querySelector("#photo__three_row");
  const search_div = document.querySelector(".search_div");
  const notFound = document.querySelector(".notFound");
  let searchParam = null;
  let search__photos__url = null;
  let all__Images = null;
  let search_all__Images = null;

  // key for unsplash................................
  let key = `TKZT_xUixNimk5LvinsTDD7MUl3IKYtd4EH0QUx4J3o`;
  // api url for photos .............................
  let photos__url = `https://api.unsplash.com/photos?client_id=${key}&per_page=100`;

  if (location.search) {
    searchParam = location.search.split("=")[1].replaceAll("+", " ");
     // url for search url..........
    search__photos__url = `https://api.unsplash.com/search/photos?client_id=${key}&query=${searchParam}&per_page=100`;
    search_div.innerHTML = `<h1 class="app__title"> Search: ${searchParam} </h1>`;
  }
  // ============================= variable end for this unsplashApiFun function =========================================
  // =============================function area start=====================================================================

  // create photos ..................................................
  function makePhoto(all__Images, ele_ROWone, ele_ROWtwo, ele_ROWthree) {
    ele_ROWone.innerHTML = "";
    ele_ROWtwo.innerHTML = "";
    ele_ROWthree.innerHTML = "";

    function mediajs(x,y) {
      if(y.matches) { // If media query matches
        insertRow(all__Images)
      }else if((x.matches)){
        let dividetData = Math.floor(all__Images.length / 2);
        let rowOne = all__Images.slice(0, dividetData);
        let rowTwo = all__Images.slice(rowOne.length);
        insertRow(rowOne, rowTwo);
      }else {
          let dividetData = Math.floor(all__Images.length / 3);
          let rowOne = all__Images.slice(0, dividetData);
          let rowTwo = all__Images.slice(rowOne.length, dividetData + dividetData);
          let rowThree = all__Images.slice(rowOne.length + rowTwo.length);
          
          insertRow(rowOne, rowTwo, rowThree);
      }
    }
    var x = window.matchMedia("(max-width: 767px)")
    var y = window.matchMedia("(max-width: 520px)")
    mediajs(x,y)

    function insertRow(rowOne, rowTwo, rowThree){
      // first row insert images
      rowOne.forEach((element) => {
        let htmlElement = `
          <div class="main__img_item">
              <img class="mainImg" src=${element?.urls?.regular} alt=${
          element?.id
        }>
              <div class="sub__img_description sponsored">
                  <div class="sub__img_description__control">
                      <div>
                          <div>
                              ${
                                element.sponsorship
                                  ? `<a href=${
                                      element?.sponsorship &&
                                      element?.sponsorship.sponsor.links.html
                                    } class="small">
                                  <span>sponsored</span>
                                  </a>`
                                  : ""
                              }
                          </div>
                          <div>
                              <button>
                                  <i class="uil uil-heart-alt"></i>
                              </button>
                              <button>
                                  <i class="uil uil-plus"></i>
                              </button>
                          </div>
                      </div>
                      <div>
                          <div>
                              <div>
                                  <a href=${element?.user?.links.html}>
                                      <img class="userImg" src=${
                                        element?.user?.profile_image?.small
                                      } />
                                  </a>
                              </div>
                              <div>
                                  <a href=${
                                    element?.user?.links.html
                                  }><span class="username">${
          element?.user?.username
        } </span></a>
                                  <a href=${
                                    element?.user?.links.html
                                  } class="small"><span class="location">
                                      ${
                                        element?.user?.location
                                          ? element?.user?.location
                                          : ""
                                      } 
                                  </span></a>
                              </div>
                          </div>
                          <div>
                              <button>
                                  <a class="Dload" href=${
                                    element?.links?.html
                                  } download="true">
                                      <i class="uil uil-cloud-download"></i>
                                  </a>
                              </button>
                              <div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
        ele_ROWone.innerHTML += htmlElement;
      });

      // second row insert images.................................
      rowTwo.forEach((element) => {
        let htmlElement = `
          <div class="main__img_item">
              <img class="mainImg" src=${element?.urls?.regular} alt=${
          element?.id
        }>
              <div class="sub__img_description sponsored">
                  <div class="sub__img_description__control">
                      <div>
                          <div>
                              ${
                                element.sponsorship
                                  ? `<a href=${
                                      element?.sponsorship &&
                                      element?.sponsorship.sponsor.links.html
                                    } class="small">
                                  <span>sponsored</span>
                                  </a>`
                                  : ""
                              }
                          </div>
                          <div>
                              <button>
                                  <i class="uil uil-heart-alt"></i>
                              </button>
                              <button>
                                  <i class="uil uil-plus"></i>
                              </button>
                          </div>
                      </div>
                      <div>
                          <div>
                              <div>
                                  <a href=${element?.user?.links.html}>
                                      <img class="userImg" src=${
                                        element?.user?.profile_image?.small
                                      } />
                                  </a>
                              </div>
                              <div>
                                  <a href=${
                                    element?.user?.links.html
                                  }><span class="username">${
          element?.user?.username
        } </span></a>
                                  <a href=${
                                    element?.user?.links.html
                                  } class="small"><span class="location">
                                      ${
                                        element?.user?.location
                                          ? element?.user?.location
                                          : ""
                                      } 
                                  </span></a>
                              </div>
                          </div>
                          <div>
                              <button>
                                  <a class="Dload" href=${
                                    element?.links?.html
                                  } download="true">
                                      <i class="uil uil-cloud-download"></i>
                                  </a>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
        // ele_ROWtwo.innerHTML = null
        ele_ROWtwo.innerHTML += htmlElement;
      });

      // third row insert images.................................
      rowThree.forEach((element) => {
        let htmlElement = `
          <div class="main__img_item">
              <img class="mainImg" src=${element?.urls?.regular} alt=${
          element?.id
        }>
              <div class="sub__img_description sponsored">
                  <div class="sub__img_description__control">
                      <div>
                          <div>
                              ${
                                element.sponsorship
                                  ? `<a href=${
                                      element?.sponsorship &&
                                      element?.sponsorship.sponsor.links.html
                                    } class="small">
                                  <span>sponsored</span>
                                  </a>`
                                  : ""
                              }
                          </div>
                          <div>
                              <button>
                                  <i class="uil uil-heart-alt"></i>
                              </button>
                              <button>
                                  <i class="uil uil-plus"></i>
                              </button>
                          </div>
                      </div>
                      <div>
                          <div>
                              <div>
                                  <a href=${element?.user?.links.html}>
                                      <img class="userImg" src=${
                                        element?.user?.profile_image?.small
                                      } />
                                  </a>
                              </div>
                              <div>
                                  <a href=${
                                    element?.user?.links.html
                                  }><span class="username">${
          element?.user?.username
        } </span></a>
                                  <a href=${
                                    element?.user?.links.html
                                  } class="small"><span class="location">
                                      ${
                                        element?.user?.location
                                          ? element?.user?.location
                                          : ""
                                      } 
                                  </span></a>
                              </div>
                          </div>
                          <div>
                              <button>
                                  <a class="Dload" href=${
                                    element?.links?.html
                                  } download="true">
                                      <i class="uil uil-cloud-download"></i>
                                  </a>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
        // ele_ROWthree.innerHTML = null
        ele_ROWthree.innerHTML += htmlElement;
      });
    }

  }
 // create photos for search ........................................
  function searchmakePhoto(all__Images, ele_ROWone, ele_ROWtwo, ele_ROWthree) {
    // console.log(all__Images);
    let dividetData = Math.floor(all__Images.length / 3);
    let rowOne = all__Images.slice(0, dividetData);
    let rowTwo = all__Images.slice(rowOne.length, dividetData + dividetData);
    let rowThree = all__Images.slice(rowOne.length + rowTwo.length);

    // design first row insert images
    rowOne.forEach((element) => {
      let htmlElement = `
        <div class="main__img_item">
            <img class="mainImg" src=${element?.urls?.regular} alt=${
        element?.id
      }>
            <div class="sub__img_description sponsored">
                <div class="sub__img_description__control">
                    <div>
                        <div>
                            ${
                              element.sponsorship
                                ? `<a href=${
                                    element?.sponsorship &&
                                    element?.sponsorship.sponsor.links.html
                                  } class="small">
                                <span>sponsored</span>
                                </a>`
                                : ""
                            }
                        </div>
                        <div>
                            <button>
                                <i class="uil uil-heart-alt"></i>
                            </button>
                            <button>
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <a href=${element?.user?.links.html}>
                                    <img class="userImg" src=${
                                      element?.user?.profile_image?.small
                                    } />
                                </a>
                            </div>
                            <div>
                                <a href=${
                                  element?.user?.links.html
                                }><span class="username">${
        element?.user?.username
      } </span></a>
                                <a href=${
                                  element?.user?.links.html
                                } class="small"><span class="location">
                                    ${
                                      element?.user?.location
                                        ? element?.user?.location
                                        : ""
                                    } 
                                </span></a>
                            </div>
                        </div>
                        <div>
                            <button>
                                <a class="Dload" href=${
                                  element?.links?.html
                                } download="true">
                                    <i class="uil uil-cloud-download"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      // ele_ROWone.innerHTML = null
      ele_ROWone.innerHTML += htmlElement;
    });

    // design second row insert images
    rowTwo.forEach((element) => {
      let htmlElement = `
        <div class="main__img_item">
            <img class="mainImg" src=${element?.urls?.regular} alt=${
        element?.id
      }>
            <div class="sub__img_description sponsored">
                <div class="sub__img_description__control">
                    <div>
                        <div>
                            ${
                              element.sponsorship
                                ? `<a href=${
                                    element?.sponsorship &&
                                    element?.sponsorship.sponsor.links.html
                                  } class="small">
                                <span>sponsored</span>
                                </a>`
                                : ""
                            }
                        </div>
                        <div>
                            <button>
                                <i class="uil uil-heart-alt"></i>
                            </button>
                            <button>
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <a href=${element?.user?.links.html}>
                                    <img class="userImg" src=${
                                      element?.user?.profile_image?.small
                                    } />
                                </a>
                            </div>
                            <div>
                                <a href=${
                                  element?.user?.links.html
                                }><span class="username">${
        element?.user?.username
      } </span></a>
                                <a href=${
                                  element?.user?.links.html
                                } class="small"><span class="location">
                                    ${
                                      element?.user?.location
                                        ? element?.user?.location
                                        : ""
                                    } 
                                </span></a>
                            </div>
                        </div>
                        <div>
                            <button>
                                <a class="Dload" href=${
                                  element?.links?.html
                                } download="true">
                                    <i class="uil uil-cloud-download"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      // ele_ROWtwo.innerHTML = null
      ele_ROWtwo.innerHTML += htmlElement;
    });

    // design third row insert images
    rowThree.forEach((element) => {
      let htmlElement = `
        <div class="main__img_item">
            <img class="mainImg" src=${element?.urls?.regular} alt=${
        element?.id
      }>
            <div class="sub__img_description sponsored">
                <div class="sub__img_description__control">
                    <div>
                        <div>
                            ${
                              element.sponsorship
                                ? `<a href=${
                                    element?.sponsorship &&
                                    element?.sponsorship.sponsor.links.html
                                  } class="small">
                                <span>sponsored</span>
                                </a>`
                                : ""
                            }
                        </div>
                        <div>
                            <button>
                                <i class="uil uil-heart-alt"></i>
                            </button>
                            <button>
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <a href=${element?.user?.links.html}>
                                    <img class="userImg" src=${
                                      element?.user?.profile_image?.small
                                    } />
                                </a>
                            </div>
                            <div>
                                <a href=${
                                  element?.user?.links.html
                                }><span class="username">${
        element?.user?.username
      } </span></a>
                                <a href=${
                                  element?.user?.links.html
                                } class="small"><span class="location">
                                    ${
                                      element?.user?.location
                                        ? element?.user?.location
                                        : ""
                                    } 
                                </span></a>
                            </div>
                        </div>
                        <div>
                            <button>
                                <a class="Dload" href=${
                                  element?.links?.html
                                } download="true">
                                    <i class="uil uil-cloud-download"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      // ele_ROWthree.innerHTML = null
      ele_ROWthree.innerHTML += htmlElement;
    });
  }

  // fetch photos for index page......................................
  const getPhotos = () => {
    fetch(photos__url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        all__Images = data;
        makePhoto(
          all__Images,
          photo__one_row,
          photo__two_row,
          photo__three_row
        );
      })
      .catch((e) => {
        console.log("THE PROBLEM IS FETCH API-index page");
        console.log(e);
      });
  };

  // fetch photos for search page......................................
  const searchPhotos = () => {
    fetch(search__photos__url)
      .then((res) => res.json())
      .then((Sdata) => {
        // console.log(Sdata.results.length);
        search_all__Images = Sdata.results;
        searchmakePhoto(
          search_all__Images,
          photo__one_row,
          photo__two_row,
          photo__three_row
        );

        if (Sdata.results.length == 0) {
          notFound.innerHTML = `<span style="color:#ff0000ad;font-weight: bold;">Search Not Found 😪</span>`;
        }
      })
      .catch((e) => {
        console.log("THE PROBLEM IS FETCH API- search page");
        console.log(e.message);
      });
  };

  //======================================= function call area strat=======================================
  if (searchParam) searchPhotos();
  else getPhotos();
  // ======================================= function call area end=======================================
}

function bodyFun() {
  // ============================= variable start for this bodyFun function =========================================
  const closeDown = document.querySelector("#closeDown");
  const model__ID = document.querySelector("#model__ID");
  const All__img_item = document.querySelectorAll(".main__img_item");
  const mainImg_C = document.querySelector(".mainImg_C");
  const related_row_one = document.querySelector("#related_row_one");
  const related_row_two = document.querySelector("#related_row_two");
  const related_row_three = document.querySelector("#related_row_three");
  let model_main__Div = document.querySelector(".model_main__Div");
  let userImg_C = document.querySelector(".userImg_C");
  let username_C = document.querySelector(".username_C");
  let location_C = document.querySelector(".location_C");
  let body_img_control = document.querySelector(".body_img_control");
  let zoomIN = document.querySelector(".zoomIN");
  let leftBtn = document.querySelector("#left");
  let rightBtn = document.querySelector("#right");
  let menusearch = document.querySelectorAll(".menusearch")
  let shareCommunity = document.querySelectorAll("#shareCommunity")
  let currentImg = 0;
  let related_all__Images = null;
  let relatedcurrentImg;
  // Api key 
  let key = `TKZT_xUixNimk5LvinsTDD7MUl3IKYtd4EH0QUx4J3o`;
  // ============================= variable end for this bodyFun function =========================================

  // ============================= function start for this bodyFun function =========================================

  // fetch related users photos ........................................
  const relatedImg = (user_photos__url) => {
    fetch(user_photos__url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        related_all__Images = data;
        related_makePhoto(
          related_all__Images,
          related_row_one,
          related_row_two,
          related_row_three
        );
      })
      .catch((e) => {
        console.log("THE PROBLEM IS related FETCH API-related photos");
        console.log(e);
      });
  };
  // create photos for related user ....................................
  function related_makePhoto(
    related_all__Images,
    ele_ROWone,
    ele_ROWtwo,
    ele_ROWthree
  ) {
    // console.log(related_all__Images);
    let dividetData = Math.floor(related_all__Images.length / 3);
    let rowOne = related_all__Images.slice(0, dividetData);
    let rowTwo = related_all__Images.slice(
      rowOne.length,
      dividetData + dividetData
    );
    let rowThree = related_all__Images.slice(rowOne.length + rowTwo.length);
    ele_ROWone.innerHTML = "";
    ele_ROWtwo.innerHTML = "";
    ele_ROWthree.innerHTML = "";
    // design first row insert images
    rowOne.forEach((element) => {
      let htmlElement = `
        <div class="releted_main__img_item">
            <img class="mainImg" src=${element?.urls?.regular} alt=${
        element?.id
      }>
            <div class="sub__img_description sponsored">
                <div class="sub__img_description__control">
                    <div>
                        <div>
                            ${
                              element.sponsorship
                                ? `<a href=${
                                    element?.sponsorship &&
                                    element?.sponsorship.sponsor.links.html
                                  } class="small">
                                <span>sponsored</span>
                                </a>`
                                : ""
                            }
                        </div>
                        <div>
                            <button>
                                <i class="uil uil-heart-alt"></i>
                            </button>
                            <button>
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <a href=${element?.user?.links.html}>
                                    <img class="userImg" src=${
                                      element?.user?.profile_image?.small
                                    } />
                                </a>
                            </div>
                            <div>
                                <a href=${
                                  element?.user?.links.html
                                }><span class="username">${
        element?.user?.username
      } </span></a>
                                <a href=${
                                  element?.user?.links.html
                                } class="small"><span class="location">
                                    ${
                                      element?.user?.location
                                        ? element?.user?.location
                                        : ""
                                    } 
                                </span></a>
                            </div>
                        </div>
                        <div>
                            <button>
                                <a class="Dload" href=${element?.links?.html} download="true">
                                    <i class="uil uil-cloud-download"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      ele_ROWone.innerHTML += htmlElement;
    });

    // design second row insert images
    rowTwo.forEach((element) => {
      let htmlElement = `
        <div class="releted_main__img_item">
            <img class="mainImg" src=${element?.urls?.regular} alt=${
        element?.id
      }>
            <div class="sub__img_description sponsored">
                <div class="sub__img_description__control">
                    <div>
                        <div>
                            ${
                              element.sponsorship
                                ? `<a href=${
                                    element?.sponsorship &&
                                    element?.sponsorship.sponsor.links.html
                                  } class="small">
                                <span>sponsored</span>
                                </a>`
                                : ""
                            }
                        </div>
                        <div>
                            <button>
                                <i class="uil uil-heart-alt"></i>
                            </button>
                            <button>
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <a href=${element?.user?.links.html}>
                                    <img class="userImg" src=${
                                      element?.user?.profile_image?.small
                                    } />
                                </a>
                            </div>
                            <div>
                                <a href=${
                                  element?.user?.links.html
                                }><span class="username">${
        element?.user?.username
      } </span></a>
                                <a href=${
                                  element?.user?.links.html
                                } class="small"><span class="location">
                                    ${
                                      element?.user?.location
                                        ? element?.user?.location
                                        : ""
                                    } 
                                </span></a>
                            </div>
                        </div>
                        <div>
                            <button>
                                <a class="Dload" href=${
                                  element?.links?.html
                                } download="true">
                                    <i class="uil uil-cloud-download"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      // ele_ROWtwo.innerHTML = null
      ele_ROWtwo.innerHTML += htmlElement;
    });

    // design third row insert images
    rowThree.forEach((element) => {
      let htmlElement = `
        <div class="releted_main__img_item">
            <img class="mainImg" src=${element?.urls?.regular} alt=${
        element?.id
      }>
            <div class="sub__img_description sponsored">
                <div class="sub__img_description__control">
                    <div>
                        <div>
                            ${
                              element.sponsorship
                                ? `<a href=${
                                    element?.sponsorship &&
                                    element?.sponsorship.sponsor.links.html
                                  } class="small">
                                <span>sponsored</span>
                                </a>`
                                : ""
                            }
                        </div>
                        <div>
                            <button>
                                <i class="uil uil-heart-alt"></i>
                            </button>
                            <button>
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <a href=${element?.user?.links.html}>
                                    <img class="userImg" src=${
                                      element?.user?.profile_image?.small
                                    } />
                                </a>
                            </div>
                            <div>
                                <a href=${
                                  element?.user?.links.html
                                }><span class="username">${
        element?.user?.username
      } </span></a>
                                <a href=${
                                  element?.user?.links.html
                                } class="small"><span class="location">
                                    ${
                                      element?.user?.location
                                        ? element?.user?.location
                                        : ""
                                    } 
                                </span></a>
                            </div>
                        </div>
                        <div>
                            <button>
                                <a class="Dload" href=${
                                  element?.links?.html
                                } download="true">
                                    <i class="uil uil-cloud-download"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      // ele_ROWthree.innerHTML = null
      ele_ROWthree.innerHTML += htmlElement;
    });
  }
  // model function 
  function popupassets(All__img_item, currentImg) {
    let mainImg = All__img_item[currentImg].querySelector(".mainImg");
    let userImg = All__img_item[currentImg].querySelector(".userImg");
    let username = All__img_item[currentImg].querySelector(".username");
    let location = All__img_item[currentImg].querySelector(".location");

    mainImg_C.setAttribute("src", `${mainImg.src}`);
    userImg_C.setAttribute("src", `${userImg.src}`);
    username_C.innerHTML = username.textContent;
    location_C.innerHTML = location.textContent;
  }
  // next images slider function..........................................
  const forwardfun = () => {
    if (currentImg === All__img_item.length - 1) {
      currentImg = 0;
      popupassets(All__img_item, currentImg);
      // console.log(All__img_item[currentImg]);
      relatedFun(
        All__img_item[currentImg].querySelector(".username").textContent.trim()
      );
      setTimeout(() => {
        relatedPhotoActive();
      }, 500);
      model_main__Div.scrollTo(0,0);
    } else {
      currentImg = currentImg + 1;
      popupassets(All__img_item, currentImg);
      relatedFun(
        All__img_item[currentImg].querySelector(".username").textContent.trim()
      );
      setTimeout(() => {
        relatedPhotoActive();
      }, 500);
      model_main__Div.scrollTo(0,0);
    }
  };
  // previous images slider function.......................................
  const backwardfun = () => {
    if (currentImg === 0) {
      currentImg = allElement.length - 1;
      // leftBtn.setAttribute("disabled", "true")
      popupassets(All__img_item, currentImg);
      relatedFun(
        All__img_item[currentImg].querySelector(".username").textContent.trim()
      );
      setTimeout(() => {
        relatedPhotoActive();
      }, 500);
      model_main__Div.scrollTo(0,0);
    } else {
      currentImg = currentImg - 1;
      popupassets(All__img_item, currentImg);
      relatedFun(
        All__img_item[currentImg].querySelector(".username").textContent.trim()
      );
      setTimeout(() => {
        relatedPhotoActive();
      }, 500);
      model_main__Div.scrollTo(0,0);
    }
  };
  // get related user photos function.......................................
  function relatedFun(user) {
    // console.log(user);
    let user_photos__url = `https://api.unsplash.com/users/${user}/photos?client_id=${key}&per_page=100`;
    // get related photos 
    relatedImg(user_photos__url);
  }
  // related phot active.......... ........................................
  function relatedPhotoActive(){
        const Related_All__img_item = document.querySelectorAll(".releted_main__img_item");
        const model_main__Div = document.querySelector(".model_main__Div");

        Related_All__img_item.forEach((e, i) => {
            e.addEventListener("click", function () {
                relatedcurrentImg = i
                // model popup
                popupassets(Related_All__img_item, relatedcurrentImg);
                // scroll up click related photo 
                model_main__Div.scrollTo(0,0);
            });
          });
  }
  // share function .........................................................
  function shareNow(){
    const shareData = {
      title: "arifalmas",
      text : "Frontend Development",
      url : "https://www.linkedin.com/in/freelancerarifar/"
    }

      async function share(){
        try {
          await navigator.share(shareData)
        } catch(err) {
          console.log(err)
        }
      }
      share()
  }

  //======================================= addEventListener area strat=====================================
  // model addEventListener ...................................
  All__img_item.forEach((e, i) => {
    e.addEventListener("click", function () {
      model__ID.style.display = "none";
      model__ID.style.display = "block";
      currentImg = i;
      // call model 
      popupassets(All__img_item, currentImg);
      // call related photos 
      relatedFun(`${e.querySelector(".username").textContent.trim()}`);
      setTimeout(() => {
        // related photo active with click 
        relatedPhotoActive();
      }, 500);
    });
  });
  // close button addEventListener............................................
  closeDown.addEventListener("click", function () {
    model__ID.style.display = "none";

    body_img_control.style.minWidth = "min(100%, 870px)";
    body_img_control.style.maxWidth = "calc((100vh - 175px) * 1.5)";
    mainImg_C.classList.remove("zoomOUT");
    mainImg_C.classList.add("zoomIN");
  });
  // image zoom-in and zoom out addEventListener...............................
  zoomIN.addEventListener("click", function () {
    if (mainImg_C.classList.contains("zoomIN")) {
      body_img_control.style.minWidth = "unset";
      body_img_control.style.maxWidth = "unset";
      mainImg_C.classList.remove("zoomIN");
      mainImg_C.classList.add("zoomOUT");
    } else {
      body_img_control.style.minWidth = "min(100%, 870px)";
      body_img_control.style.maxWidth = "calc((100vh - 175px) * 1.5)";
      mainImg_C.classList.remove("zoomOUT");
      mainImg_C.classList.add("zoomIN");
    }
  });
  // slider left button addEventListener........................................
  leftBtn.addEventListener("click", backwardfun);
  // slidr right button addEventListener........................................
  rightBtn.addEventListener("click", forwardfun);
  // submenu search for click addEventListener..................................
  menusearch.forEach(item =>{
    item.addEventListener("click", function(e){
      e.stopPropagation()
      item.submit()
    })
  })
  // share addEventListener.......................................................
  shareCommunity.forEach((e)=>{
    e.addEventListener("click", shareNow)
  })

  //======================================= addEventListener area end=======================================

}

// globel javascript Work 
const menuBarher = document.querySelector(".menuBarher");
const dropDown_subMenu = document.querySelector(".dropDown_subMenu");
const dropdown_Item = document.querySelectorAll(".dropdown_Item");
const body = document.querySelector("body");
let _700 = window.matchMedia("(max-width: 700px)")

//================================================ function start===================================
  // menu barger dropdown function 
  function menubarger(){
    menuBarher.addEventListener("click", function(e){
      e.stopPropagation()
      dropDown_subMenu.classList.toggle("active")
      dropdown_Item.forEach(re => {
        re.classList.remove("active")
      })
    })
  }
  // menu model for responsive 
  function media_js_Submenu(x) {
    let sub_Current_manu_item;
    dropdown_Item.forEach((e,i) =>{
      e.addEventListener("click", function(of){
        of.stopPropagation()
        if(sub_Current_manu_item == i){
          this.classList.toggle("active")
        }else{
          dropdown_Item.forEach(re => {
            re.classList.remove("active")
          })
          this.classList.add("active")
        }
        sub_Current_manu_item = i
      })
    })
  }
//================================================ function end===================================
//================================================ addEventListener start===================================
  // remove active submenu button 
  body.addEventListener("click", function(){
    dropDown_subMenu.classList.remove("active")
  })
  // call menu barger model 
  menubarger()
  // mobile menu model 
  media_js_Submenu(_700)
  // dropDown_subMenu stopPropagation
  dropDown_subMenu.addEventListener("click", function(e){
    e.stopPropagation()
  })
  
//================================================ addEventListener end===================================

// thanks
