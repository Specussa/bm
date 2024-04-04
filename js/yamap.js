// yamap

// start del active points
const yamapPopup = document.querySelector('.yamap__popup');
const yamapPopupClose = document.querySelector('.yamap__popup_close');
const yamapPopupButton = document.querySelector('.yamap__popup_button');
const yamapOverlay = document.querySelector('.yamap__overlay');
const yamapButtonOne = document.querySelector('.yamap__button_one');
const yamapButtonTwo = document.querySelector('.yamap__button_two');
const yamapButtonThree = document.querySelector('.yamap__button_three');
const yamapButtonFour = document.querySelector('.yamap__button_four');
const yamapButtonFive = document.querySelector('.yamap__button_five');
const yamapButtonSix = document.querySelector('.yamap__button_six');
const yamapButtonSeven = document.querySelector('.yamap__button_seven');
const yamapButtonEight = document.querySelector('.yamap__button_eight');
const yamapButtonNine = document.querySelector('.yamap__button_nine');
const yamapButtonTen = document.querySelector('.yamap__button_ten');
const yamapButtonEleven = document.querySelector('.yamap__button_eleven');
const yamapInfoInner = document.querySelector('.yamap__info_inner');
const yamapInfoPopup = document.querySelector('.yamap__info_popup');
const yamapregionspan = document.querySelector(".header__region span")
function delmappoint() {
  document.querySelector('#yamapone').classList.remove("active");
  document.querySelector('#yamaptwo').classList.remove("active");
  document.querySelector('#yamapthree').classList.remove("active");
  document.querySelector('#yamapfour').classList.remove("active");
  document.querySelector('#yamapfive').classList.remove("active");
  document.querySelector('#yamapsix').classList.remove("active");
  document.querySelector('#yamapseven').classList.remove("active");
  document.querySelector('#yamapeight').classList.remove("active");
  document.querySelector('#yamapnine').classList.remove("active");
  document.querySelector('#yamapten').classList.remove("active");
  document.querySelector('#yamapeleven').classList.remove("active");
  yamapButtonOne.classList.remove("active");
  yamapButtonTwo.classList.remove("active");
  yamapButtonThree.classList.remove("active");
  yamapButtonFour.classList.remove("active");
  yamapButtonFive.classList.remove("active");
  yamapButtonSix.classList.remove("active");
  yamapButtonSeven.classList.remove("active");
  yamapButtonEight.classList.remove("active");
  yamapButtonNine.classList.remove("active");
  yamapButtonTen.classList.remove("active");
  yamapButtonEleven.classList.remove("active");
  yamapPopup.classList.remove("active");
  yamapPopupButton.classList.remove("active");
  yamapOverlay.classList.remove("active");
  yamapPopupButton.children[0].innerHTML = "Выберите город";
}
// end

// start yamap__popup
yamapPopupButton.addEventListener('click', () => {
  if (yamapPopupButton.classList.contains("active")) {
    yamapPopup.classList.remove("active");
    yamapPopupButton.classList.remove("active");
    yamapOverlay.classList.remove("active");
  } else {
    delmappoint();
    myMap.setCenter([55.253215,37.622504],5);
    yamapInfoPopup.classList.remove("active");
    yamapPopup.classList.add("active");
    yamapPopupButton.classList.add("active");
    yamapOverlay.classList.add("active");
  };
});
yamapOverlay.addEventListener('click', () => {
  yamapPopup.classList.remove("active");
  yamapPopupButton.classList.remove("active");
  yamapOverlay.classList.remove("active");
});
yamapPopupClose.addEventListener('click', () => {
  yamapPopup.classList.remove("active");
  yamapPopupButton.classList.remove("active");
  yamapOverlay.classList.remove("active");
});
// end

// start map buttons
// Москва
if(yamapButtonOne){
  yamapButtonOne.addEventListener('click', () => {
    if (yamapButtonOne.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonOne.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonOne.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonOne.classList.add("active");
      myMap.setCenter([55.88082856885077,37.423437499999956],12);
      document.querySelector('#yamapone').classList.add("active");
    };
  });
}
// Рязань
if(yamapButtonTwo){
  yamapButtonTwo.addEventListener('click', () => {
    if (yamapButtonTwo.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonTwo.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonTwo.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonTwo.classList.add("active");
      myMap.setCenter([54.64721307003627,39.63870999999999],12);
      document.querySelector('#yamaptwo').classList.add("active");
    };
  });
}
// Пенза
if(yamapButtonThree){
  yamapButtonThree.addEventListener('click', () => {
    if (yamapButtonThree.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonThree.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonThree.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonThree.classList.add("active");
      myMap.setCenter([53.2699360711638,45.02489149999999],12);
      document.querySelector('#yamapthree').classList.add("active");
    };
  });
}
// Орёл
if(yamapButtonFour){
  yamapButtonFour.addEventListener('click', () => {
    if (yamapButtonFour.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonFour.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonFour.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonFour.classList.add("active");
      myMap.setCenter([52.92358707142793,36.07856949999995],12);
      document.querySelector('#yamapfour').classList.add("active");
    };
  });
}
// Курск
if(yamapButtonFive){
  yamapButtonFive.addEventListener('click', () => {
    if (yamapButtonFive.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonFive.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonFive.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonFive.classList.add("active");
      myMap.setCenter([51.627834072323296,36.117241999999955],12);
      document.querySelector('#yamapfive').classList.add("active");
    };
  });
}
// Воронеж
if(yamapButtonSix){
  yamapButtonSix.addEventListener('click', () => {
    if (yamapButtonSix.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonSix.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonSix.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonSix.classList.add("active");
      myMap.setCenter([51.631278072332194,39.33890599999997],12);
      document.querySelector('#yamapsix').classList.add("active");
    };
  });
}
// Липецк
if(yamapButtonSeven){
  yamapButtonSeven.addEventListener('click', () => {
    if (yamapButtonSeven.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonSeven.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonSeven.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonSeven.classList.add("active");
      myMap.setCenter([52.59647607167905,39.45774449999999],12);
      document.querySelector('#yamapseven').classList.add("active");
    };
  });
}
// Тамбов
if(yamapButtonEight){
  yamapButtonEight.addEventListener('click', () => {
    if (yamapButtonEight.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonEight.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonEight.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonEight.classList.add("active");
      myMap.setCenter([52.65324657162419,41.43672399999999],12);
      document.querySelector('#yamapeight').classList.add("active");
    };
  });
}
// Павловск
if(yamapButtonNine){
  yamapButtonNine.addEventListener('click', () => {
    if (yamapButtonNine.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonNine.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonNine.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonNine.classList.add("active");
      myMap.setCenter([50.4533660730111,40.148216500000004],12);
      document.querySelector('#yamapnine').classList.add("active");
    };
  });
}
// Псков
if(yamapButtonTen){
  yamapButtonTen.addEventListener('click', () => {
    if (yamapButtonTen.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonTen.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonTen.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonTen.classList.add("active");
      myMap.setCenter([57.83131806677265,28.298539499999958],12);
      document.querySelector('#yamapten').classList.add("active");
    };
  });
}
// Санкт-Петербург
if(yamapButtonEleven){
  yamapButtonEleven.addEventListener('click', () => {
    if (yamapButtonEleven.classList.contains("active")) {
      delmappoint();
      myMap.setCenter([55.253215,37.622504],5);
      yamapInfoPopup.classList.remove("active");
    } else {
      delmappoint();
      yamapInfoInner.innerHTML = yamapButtonEleven.nextElementSibling.children[0].children[0].innerHTML;
      yamapPopupButton.children[0].innerHTML = yamapButtonEleven.children[0].innerHTML;
      yamapInfoPopup.classList.add("active");
      yamapButtonEleven.classList.add("active");
      myMap.setCenter([59.61838206459388,30.172981999999966],12);
      document.querySelector('#yamapeleven').classList.add("active");
    };
  });
}
// end

// start yandex map
const maps = document.querySelector('.yamap');
if(maps) {
  var myMap,ymaps;
  function init() {
    myMap = document.getElementById("yamap");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.253215, 37.622504],
      zoom: 5, 
      controls: []
      },{
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    // if(oldWidth <= 1200){
    //     myMap.behaviors.disable('drag');
    // }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }
  
    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }
    var data = {
      'points': [{
        "infoPoint": 
        '<div id="yamapone" map="г.Москва" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 55.88082856885077,
        "longitude": 37.423437499999956,
        },
        {
        "infoPoint": 
        '<div id="yamaptwo" map="г.Рязань" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 54.64721307003627,
        "longitude": 39.63870999999999,
        },
        {
        "infoPoint": 
        '<div id="yamapthree" map="г.Пенза" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 53.2699360711638,
        "longitude": 45.02489149999999,
        },
        {
        "infoPoint": 
        '<div id="yamapfour" map="г.Орёл" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 52.92358707142793,
        "longitude": 36.07856949999995,
        },
        {
        "infoPoint": 
        '<div id="yamapfive" map="г.Курск" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 51.627834072323296,
        "longitude": 36.117241999999955,
        },
        {
        "infoPoint": 
        '<div id="yamapsix" map="г.Воронеж" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 51.631278072332194,
        "longitude": 39.33890599999997,
        },
        {
        "infoPoint": 
        '<div id="yamapseven" map="г.Липецк" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 52.59647607167905,
        "longitude": 39.45774449999999,
        },
        {
        "infoPoint": 
        '<div id="yamapeight" map="г.Тамбов" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 52.65324657162419,
        "longitude": 41.43672399999999,
        },
        {
        "infoPoint": 
        '<div id="yamapnine" map="г.Павловск" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 50.4533660730111,
        "longitude": 40.148216500000004,
        },
        {
        "infoPoint": 
        '<div id="yamapten" map="г.Псков" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 57.83131806677265,
        "longitude": 28.298539499999958,
        },
        {
        "infoPoint": 
        '<div id="yamapeleven" map="г.Санкт-Петербург" class="yamap__point{% if properties.active %} active{% endif %}">\
          <div class="yamap__point_back">\
            <svg width="60" height="73" viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M60 30.2355C60 46.9336 30 72.7879 30 72.7879C30 72.7879 0 46.9336 0 30.2355C0 13.5374 13.4315 0.000976562 30 0.000976562C46.5685 0.000976562 60 13.5374 60 30.2355Z" fill="currentColor"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_logo">\
            <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">\
              <path d="M10.5129 12.4304H18.7634V14.9124H10.5129V12.4304Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5129 16.8216V24.3312H15.9273C20.8442 24.3519 20.9953 16.8401 15.9273 16.8216H10.5129ZM13.2201 21.9765V19.1126H15.4116C17.7546 19.1191 17.5904 21.9841 15.4116 21.9765H13.2201Z" fill="white"></path>\
              <path d="M21.3416 12.4304V24.3312H24.2422V18.7308L25.9181 24.3312H28.8831L30.5589 18.7308V24.3312H33.4595V12.4304H29.721L27.4006 20.0673L25.0801 12.4304H21.3416Z" fill="white"></path>\
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8481 14.3761C44.7956 23.8774 37.0404 33.4448 25.5263 35.7455C14.0123 38.0462 3.0995 32.2089 1.15201 22.7076C-0.79548 13.2062 6.95976 3.63882 18.4738 1.33816C29.9879 -0.962502 40.9007 4.87479 42.8481 14.3761ZM25.0546 33.2644C34.9107 31.295 41.5492 23.1053 39.8822 14.9721C38.2151 6.83895 28.8737 1.84221 19.0177 3.81158C9.16156 5.78096 2.52304 13.9707 4.1901 22.1039C5.85716 30.237 15.1985 35.2338 25.0546 33.2644Z" fill="white"></path>\
            </svg>\
          </div>\
          <div class="yamap__point_image">\
            <img src="./img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 59.61838206459388,
        "longitude": 30.172981999999966,
        },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    // if(window.innerWidth <= 800){
    //   myMap.behaviors.disable('scrollZoom');
    // }

  // Создать метку
    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [-25, -80],
            [30, 0],
          ],
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function(item, index){
        item.properties.set('active', false);
        if(e.get('target') == item && !that){
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });

      // start map__point function
      function mappoint() {
        yamapButtonOne.classList.remove("active");
        yamapButtonTwo.classList.remove("active");
        yamapButtonThree.classList.remove("active");
        yamapButtonFour.classList.remove("active");
        yamapButtonFive.classList.remove("active");
        yamapButtonSix.classList.remove("active");
        yamapButtonSeven.classList.remove("active");
        yamapButtonEight.classList.remove("active");
        yamapButtonNine.classList.remove("active");
        yamapButtonTen.classList.remove("active");
        yamapButtonEleven.classList.remove("active");
      }
      // end
      // Москва
      if (document.querySelector('#yamapone').classList.contains("active")) {
        mappoint();
        yamapButtonOne.parentNode.parentNode.scrollTop =  yamapButtonOne.offsetTop - yamapButtonOne.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonOne.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonOne.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonOne.classList.add("active");
        myMap.setCenter([55.88082856885077,37.423437499999956],12);
      } else {
        myMap.setCenter([55.253215,37.622504],5);
        mappoint();
        yamapInfoPopup.classList.remove("active");
        yamapPopupButton.children[0].innerHTML = "Выберите город";
      };
      // Рязань
      if (document.querySelector('#yamaptwo').classList.contains("active")) {
        mappoint();
        yamapButtonTwo.parentNode.parentNode.scrollTop =  yamapButtonTwo.offsetTop - yamapButtonTwo.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonTwo.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonTwo.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonTwo.classList.add("active");
        myMap.setCenter([54.64721307003627,39.63870999999999],12);
      } else {};
      // Пенза
      if (document.querySelector('#yamapthree').classList.contains("active")) {
        mappoint();
        yamapButtonThree.parentNode.parentNode.scrollTop =  yamapButtonThree.offsetTop - yamapButtonThree.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonThree.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonThree.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonThree.classList.add("active");
        myMap.setCenter([53.2699360711638,45.02489149999999],12);
      } else {};
      // Орёл
      if (document.querySelector('#yamapfour').classList.contains("active")) {
        mappoint();
        yamapButtonFour.parentNode.parentNode.scrollTop =  yamapButtonFour.offsetTop - yamapButtonFour.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonFour.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonFour.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonFour.classList.add("active");
        myMap.setCenter([52.92358707142793,36.07856949999995],12);
      } else {};
      // Курск
      if (document.querySelector('#yamapfive').classList.contains("active")) {
        mappoint();
        yamapButtonFive.parentNode.parentNode.scrollTop =  yamapButtonFive.offsetTop - yamapButtonFive.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonFive.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonFive.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonFive.classList.add("active");
        myMap.setCenter([51.627834072323296,36.117241999999955],12);
      } else {};
      // Воронеж
      if (document.querySelector('#yamapsix').classList.contains("active")) {
        mappoint();
        yamapButtonSix.parentNode.parentNode.scrollTop =  yamapButtonSix.offsetTop - yamapButtonSix.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonSix.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonSix.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonSix.classList.add("active");
        myMap.setCenter([51.631278072332194,39.33890599999997],12);
      } else {};
      // Липецк
      if (document.querySelector('#yamapseven').classList.contains("active")) {
        mappoint();
        yamapButtonSeven.parentNode.parentNode.scrollTop =  yamapButtonSeven.offsetTop - yamapButtonSeven.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonSeven.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonSeven.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonSeven.classList.add("active");
        myMap.setCenter([52.59647607167905,39.45774449999999],12);
      } else {};
      // Тамбов
      if (document.querySelector('#yamapeight').classList.contains("active")) {
        mappoint();
        yamapButtonEight.parentNode.parentNode.scrollTop =  yamapButtonEight.offsetTop - yamapButtonEight.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonEight.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonEight.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonEight.classList.add("active");
        myMap.setCenter([52.65324657162419,41.43672399999999],12);
      } else {};
      // Павловск
      if (document.querySelector('#yamapnine').classList.contains("active")) {
        mappoint();
        yamapButtonNine.parentNode.parentNode.scrollTop =  yamapButtonNine.offsetTop - yamapButtonNine.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonNine.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonNine.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonNine.classList.add("active");
        myMap.setCenter([50.4533660730111,40.148216500000004],12);
      } else {};
      // Псков
      if (document.querySelector('#yamapten').classList.contains("active")) {
        mappoint();
        yamapButtonTen.parentNode.parentNode.scrollTop =  yamapButtonTen.offsetTop - yamapButtonTen.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonTen.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonTen.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonTen.classList.add("active");
        myMap.setCenter([57.83131806677265,28.298539499999958],12);
      } else {};
      // Санкт-Петербург
      if (document.querySelector('#yamapeleven').classList.contains("active")) {
        mappoint();
        yamapButtonEleven.parentNode.parentNode.scrollTop =  yamapButtonEleven.offsetTop - yamapButtonEleven.scrollHeight;
        yamapInfoInner.innerHTML = yamapButtonEleven.nextElementSibling.children[0].children[0].innerHTML;
        yamapPopupButton.children[0].innerHTML = yamapButtonEleven.children[0].innerHTML;
        yamapInfoPopup.classList.add("active");
        yamapButtonEleven.classList.add("active");
        myMap.setCenter([59.61838206459388,30.172981999999966],12);
      } else {};
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
      if (yamapregionspan.innerText.includes("Москва")) {
        yamapButtonOne.click();
      } else if (yamapregionspan.innerText.includes("Рязань")) {
        yamapButtonTwo.click();
      } else if (yamapregionspan.innerText.includes("Пенза")) {
        yamapButtonThree.click();
      } else if (yamapregionspan.innerText.includes("Орёл")) {
        yamapButtonFour.click();
      } else if (yamapregionspan.innerText.includes("Курск")) {
        yamapButtonFive.click();
      } else if (yamapregionspan.innerText.includes("Воронеж")) {
        yamapButtonSix.click();
      } else if (yamapregionspan.innerText.includes("Липецк")) {
        yamapButtonSeven.click();
      } else if (yamapregionspan.innerText.includes("Тамбов")) {
        yamapButtonEight.click();
      } else if (yamapregionspan.innerText.includes("Павловск")) {
        yamapButtonNine.click();
      } else if (yamapregionspan.innerText.includes("Псков")) {
        yamapButtonTen.click();
      } else if (yamapregionspan.innerText.includes("Санкт-Петербург")) {
        yamapButtonEleven.click();
      }
    }, 500);
  });
}
// end yandex map
// yamap