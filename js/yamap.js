// yamap

// start yandex map
const map = document.querySelectorAll('.yamap');
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

    if(oldWidth <= 1200){
        myMap.behaviors.disable('drag');
    }

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
        '<div id="mapmoscow" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 55.88088924541,
        "longitude": 37.423524915344,
        },
        {
        "infoPoint": 
        '<div id="mappeterburg" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 59.618243,
        "longitude": 30.172631,
        },
        {
        "infoPoint": 
        '<div id="mapvoronezh" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 51.639685,
        "longitude": 39.324973,
        },
        {
        "infoPoint": 
        '<div id="mapkursk" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 51.627834,
        "longitude": 36.117242,
        },
        {
        "infoPoint": 
        '<div id="maplipetsk" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 52.597220203418,
        "longitude": 39.458276316873,
        },
        {
        "infoPoint": 
        '<div id="maporel" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 52.923587,
        "longitude": 36.078570,
        },
        {
        "infoPoint": 
        '<div id="mappavlovsck" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 50.452752,
        "longitude": 40.148549,
        },
        {
        "infoPoint": 
        '<div id="mappenza" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 53.270195255583,
        "longitude": 45.024497906746,
        },
        {
        "infoPoint": 
        '<div id="mappskov" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 56.9816779,
        "longitude": 29.9243012,
        },
        {
        "infoPoint": 
        '<div id="mapryazan" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 54.647213,
        "longitude": 39.638701,
        },
        {
        "infoPoint": 
        '<div id="maptambov" class="yamap__point{% if properties.active %} active{% endif %}">\
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
            <img src="../img/map/map_1.webp" alt="">\
          </div>\
        </div>',
        "latitude": 52.650429,
        "longitude": 41.407760,
        },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    if(window.innerWidth <= 800){
      myMap.behaviors.disable('scrollZoom');
    }

  // Создать метку
    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [15, -40],
            [60, 40],
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
      var idmap = document.querySelectorAll('.map__search_city');
      var thismapinfo = document.querySelector('.map__search_info');
      var mapmoscow = document.getElementById('mapmoscow');
      const maphead = document.querySelectorAll('.map__search_city .map__search_head');
      const mapinfo = document.querySelectorAll('.map__search_city .map__search_info');

      // start map__point function
      function mappoint() {
      }
      // end
      
      if (mapmoscow.classList.contains("active")) {
        mappoint();
        myMap.setCenter([55.88088924541,37.423524915344],12);
      } else {
        myMap.setCenter([55.253215,37.622504],5);
      };
      var mappeterburg = document.getElementById('mappeterburg');
      if (mappeterburg.classList.contains("active")) {
        mappoint();
        myMap.setCenter([59.618243,30.172631],12);
      } else {};
      var mapvoronezh = document.getElementById('mapvoronezh');
      if (mapvoronezh.classList.contains("active")) {
        mappoint();
        myMap.setCenter([51.639685,39.324973],12);
      } else {};
      var mapkursk = document.getElementById('mapkursk');
      if (mapkursk.classList.contains("active")) {
        mappoint();
        myMap.setCenter([51.627834,36.117242],12);
      } else {};
      var maplipetsk = document.getElementById('maplipetsk');
      if (maplipetsk.classList.contains("active")) {
        mappoint();
        myMap.setCenter([52.597220203418,39.458276316873],12);
      } else {};
      var maporel = document.getElementById('maporel');
      if (maporel.classList.contains("active")) {
        mappoint();
        myMap.setCenter([52.923587,36.078570],12);
      } else {};
      var mappavlovsck = document.getElementById('mappavlovsck');
      if (mappavlovsck.classList.contains("active")) {
        mappoint();
        myMap.setCenter([50.452752,40.148549],12);
      } else {};
      var mappenza = document.getElementById('mappenza');
      if (mappenza.classList.contains("active")) {
        mappoint();
        myMap.setCenter([53.270195255583,45.024497906746],12);
      } else {};
      var mappskov = document.getElementById('mappskov');
      if (mappskov.classList.contains("active")) {
        mappoint();
        myMap.setCenter([56.9816779,29.9243012],12);
      } else {};
      var mapryazan = document.getElementById('mapryazan');
      if (mapryazan.classList.contains("active")) {
        mappoint();
        myMap.setCenter([54.647213,39.638701],12);
      } else {};
      var maptambov = document.getElementById('maptambov');
      if (maptambov.classList.contains("active")) {
        mappoint();
        myMap.setCenter([52.650429,41.407760],12);
      } else {};
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
}
// end yandex map
// yamap