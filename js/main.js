var i;

// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
const htopblock = document.querySelector('.header__top_block');
const menulinkActive = document.querySelectorAll(".header__bottom_block .header__nav_link");
const menusublinkActive = document.querySelectorAll(".header__bottom_block .header__nav_sublink");
const menusublistActive = document.querySelectorAll(".header__bottom_block .header__nav_subsublist");
const headerpopup = document.querySelectorAll(".header__nav_list .popup");
const popup = document.querySelectorAll("html .popup");
const cf = document.querySelector(".catalog_filter");
const bodyOverlay = document.querySelector('.overlay');
const headerOverlay = document.querySelector('.header__overlay');
const formSuccessfully = document.querySelectorAll("html .form__successfully");
const formHidden = document.querySelectorAll("html .form");

docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
    headerpopup.forEach((n) => n.style.maxHeight = null);
    popup.forEach((n) => n.classList.remove("active"));
    menulinkActive.forEach((n) => n.classList.remove("active"));
    menusublinkActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.style.maxHeight = null);
    bodyOverlay.classList.remove("active");
    headerOverlay.classList.remove("active");
    html.classList.remove("noscroll");
    formSuccessfully.forEach((n) => n.classList.remove("active"));
    formHidden.forEach((n) => n.classList.remove("hidden"));
    if(cf){
      cfLinksActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.style.maxHeight = null);
    };
    if (!document.querySelector('.has-scroll-smooth')) {
      if (window.scrollY < htopblock.scrollHeight) {
        docheight.style.setProperty('--hscroll', `${htopblock.scrollHeight - window.scrollY}px`);
      } else {
        docheight.style.setProperty('--hscroll', `0px`);
      }
    }
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start scroll
const html = document.querySelector('html');
const showreelbutton = document.querySelector('.showreel__button');
const showreel = document.querySelector('.showreel');
const hbottom = document.querySelector('.header__bottom');
const htop = document.querySelector('.header__top');
const showreelhead = document.querySelector('.showreel__head');

if (!document.querySelector('.has-scroll-smooth')) {
  if (window.scrollY < htopblock.scrollHeight) {
    docheight.style.setProperty('--hscroll', `${htopblock.scrollHeight - window.scrollY}px`);
  } else {
    docheight.style.setProperty('--hscroll', `0px`);
  }

  if (showreel) {
    if (oldWidth < 1440) {
      showreelbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${window.scrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight + showreelhead.scrollHeight)}, 0, 1)`;
    } else {
      showreelbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${window.scrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight + htop.scrollHeight + showreelhead.scrollHeight)}, 0, 1)`;
    }
  }

  if (window.scrollY >= htop.scrollHeight) {
    hbottom.classList.add("fixed");
  } else {
    hbottom.classList.remove("fixed");
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY < htopblock.scrollHeight) {
      docheight.style.setProperty('--hscroll', `${htopblock.scrollHeight - window.scrollY}px`);
    } else {
      docheight.style.setProperty('--hscroll', `0px`);
    }

    if (showreel) {
      if (oldWidth < 1440) {
        showreelbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${window.scrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight + showreelhead.scrollHeight)}, 0, 1)`;
      } else {
        showreelbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${window.scrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight + htop.scrollHeight + showreelhead.scrollHeight)}, 0, 1)`;
      }
    }

    if (window.scrollY >= htop.scrollHeight) {
      hbottom.classList.add("fixed");
    } else {
      hbottom.classList.remove("fixed");
    }
  });
}
// end scroll

// start year
const year = document.querySelector('.footer__year');
if(year){
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start navbar
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const popupClose = document.getElementsByClassName("popup__close");
const cfLinksActive = document.querySelectorAll(".catalog_filter .catalog_filter__link");
const cfPopupActive = document.querySelectorAll("html .catalog_filter__popup");
const headernslpActive = document.querySelectorAll("html .header__nav_sublist");
const headernlpActive = document.querySelectorAll("html .header__nav_link");
const headerregionpopup = document.querySelector(".header__region_popup");
const headertelpopup = document.querySelector(".header__tel_popup");
const headervacancypopup = document.querySelector(".header__vacancy_popup");
const videopopup = document.querySelector('.video__popup');
const videoinner = document.querySelector('.video__inner');

for (i = 0; i < popupClose.length; i++) {
  popupClose[i].onclick = function(e) {
    html.classList.remove("noscroll");
    headerpopup.forEach((n) => n.style.maxHeight = null);
    popup.forEach((n) => n.classList.remove("active"));
    menulinkActive.forEach((n) => n.classList.remove("active"));
    menusublinkActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.style.maxHeight = null);
    headerregionpopup.classList.remove("active");
    headertelpopup.classList.remove("active");
    formSuccessfully.forEach((n) => n.classList.remove("active"));
    formHidden.forEach((n) => n.classList.remove("hidden"));
    if(headervacancypopup){headervacancypopup.classList.remove("active")};
    if(cf){
      cfLinksActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.style.maxHeight = null);
    };
    if(videopopup){
      headerOverlay.classList.remove("active");
      videopopup.classList.remove("active");
      videoinner.innerHTML = "";
    };
    bodyOverlay.classList.remove("active");
    headerOverlay.classList.remove("active");
    hbottom.classList.remove("active");
    burger.classList.remove("active");
  }
}

// start header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    hbottom.classList.remove("active");
    html.classList.remove("noscroll");
    headerpopup.forEach((n) => n.style.maxHeight = null);
    popup.forEach((n) => n.classList.remove("active"));
    menulinkActive.forEach((n) => n.classList.remove("active"));
    menusublinkActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.style.maxHeight = null);
    bodyOverlay.classList.remove("active");
    headerOverlay.classList.remove("active");
    burger.classList.remove("active");
    headerregionpopup.classList.remove("active");
    headertelpopup.classList.remove("active");
    formSuccessfully.forEach((n) => n.classList.remove("active"));
    formHidden.forEach((n) => n.classList.remove("hidden"));
    if(headervacancypopup){headervacancypopup.classList.remove("active")};
    if(cf){
      cfLinksActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.style.maxHeight = null);
    };
    if(videopopup){
      videopopup.classList.remove("active");
      videoinner.innerHTML = "";
    };
  } else {
    hbottom.classList.add("active");
    html.classList.add("noscroll");
    bodyOverlay.classList.add("active");
    headerOverlay.classList.add("active");
    burger.classList.add("active");
    headerregionpopup.classList.remove("active");
    headertelpopup.classList.remove("active");
    if(headervacancypopup){headervacancypopup.classList.remove("active")};
    if(cf){
      cfLinksActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.style.maxHeight = null);
    };
    if(videopopup){
      videopopup.classList.remove("active");
      videoinner.innerHTML = "";
    };
  }
})
// end header__burger

// start overlay
bodyOverlay.addEventListener('click', function() {
  if (bodyOverlay.classList.contains("active")) {
    html.classList.remove("noscroll");
    headerpopup.forEach((n) => n.style.maxHeight = null);
    popup.forEach((n) => n.classList.remove("active"));
    menulinkActive.forEach((n) => n.classList.remove("active"));
    menusublinkActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.style.maxHeight = null);
    headerregionpopup.classList.remove("active");
    headertelpopup.classList.remove("active");
    formSuccessfully.forEach((n) => n.classList.remove("active"));
    formHidden.forEach((n) => n.classList.remove("hidden"));
    if(headervacancypopup){headervacancypopup.classList.remove("active")};
    if(cf){
      cfLinksActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.style.maxHeight = null);
    };
    if(videopopup){
      headerOverlay.classList.remove("active");
      videopopup.classList.remove("active");
      videoinner.innerHTML = "";
    };
    bodyOverlay.classList.remove("active");
    headerOverlay.classList.remove("active");
    hbottom.classList.remove("active");
    burger.classList.remove("active");
  }
})
headerOverlay.addEventListener('click', function() {
  if (headerOverlay.classList.contains("active")) {
    html.classList.remove("noscroll");
    headerpopup.forEach((n) => n.style.maxHeight = null);
    popup.forEach((n) => n.classList.remove("active"));
    menulinkActive.forEach((n) => n.classList.remove("active"));
    menusublinkActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.classList.remove("active"));
    menusublistActive.forEach((n) => n.style.maxHeight = null);
    headerregionpopup.classList.remove("active");
    headertelpopup.classList.remove("active");
    formSuccessfully.forEach((n) => n.classList.remove("active"));
    formHidden.forEach((n) => n.classList.remove("hidden"));
    if(headervacancypopup){headervacancypopup.classList.remove("active")};
    if(cf){
      cfLinksActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.classList.remove("active"));
      cfPopupActive.forEach((n) => n.style.maxHeight = null);
    };
    if(videopopup){
      headerOverlay.classList.remove("active");
      videopopup.classList.remove("active");
      videoinner.innerHTML = "";
    };
    bodyOverlay.classList.remove("active");
    headerOverlay.classList.remove("active");
    hbottom.classList.remove("active");
    burger.classList.remove("active");
  }
})
// end overlay

// start menu
if(menu) {
  const headernl = document.getElementsByClassName("header__nav_link");
  for (i = 0; i < headernl.length; i++) {
    headernl[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        const headernlNext = this.nextElementSibling;
        const headernsl = document.getElementsByClassName("header__nav_sublist");
        const headernlActive = document.getElementsByClassName("header__nav_link active");
  
        if (headernlNext && headernlNext.classList.contains("active")) {
          this.classList.remove("active");
          headernlNext.classList.remove("active");
          bodyOverlay.classList.remove("active");
          headerOverlay.classList.remove("active");
          headernlNext.style.maxHeight = null;
          menusublinkActive.forEach((n) => n.classList.remove("active"));
          menusublistActive.forEach((n) => n.classList.remove("active"));
          menusublistActive.forEach((n) => n.style.maxHeight = null);
          html.classList.remove("noscroll");
        } else if (headernlNext) {
          for (var q = 0; q < headernlActive.length; q++) {
            headernlActive[q].classList.remove("active");
            headernsl[q].classList.remove("active");
          }
          for (var p = 0; p < headernsl.length; p++) {
            this.classList.remove("active");
            headernsl[p].classList.remove("active");
            headernsl[p].style.maxHeight = null;
          }
          e.preventDefault();
          headerregionpopup.classList.remove("active");
          headertelpopup.classList.remove("active");
          if(headervacancypopup){headervacancypopup.classList.remove("active")};
          if(cf){
            cfLinksActive.forEach((n) => n.classList.remove("active"));
            cfPopupActive.forEach((n) => n.classList.remove("active"));
            cfPopupActive.forEach((n) => n.style.maxHeight = null);
          };
          if(videopopup){
            headerOverlay.classList.remove("active");
            videopopup.classList.remove("active");
            videoinner.innerHTML = "";
          };
          menusublinkActive.forEach((n) => n.classList.remove("active"));
          menusublistActive.forEach((n) => n.classList.remove("active"));
          menusublistActive.forEach((n) => n.style.maxHeight = null);
          headernlNext.style.maxHeight = headernlNext.scrollHeight + "px";
          headernlNext.classList.add("active");
          this.classList.add("active");
          bodyOverlay.classList.add("active");
          html.classList.add("noscroll");
        }
      }
    };
  }
  const headernsl = document.getElementsByClassName("header__nav_sublink");
  for (i = 0; i < headernsl.length; i++) {
    headernsl[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        const headernslNext = this.nextElementSibling;
        const headernssl = document.getElementsByClassName("header__nav_subsublist");
        const headernslActive = document.getElementsByClassName("header__nav_sublink active");
  
        if (headernslNext && headernslNext.classList.contains("active")) {
          this.classList.remove("active");
          headernslNext.classList.remove("active");
          headernslNext.style.maxHeight = null;
        } else if (headernslNext) {
          for (var q = 0; q < headernslActive.length; q++) {
            headernslActive[q].classList.remove("active");
            headernssl[q].classList.remove("active");
          }
          for (var p = 0; p < headernssl.length; p++) {
            this.classList.remove("active");
            headernssl[p].classList.remove("active");
            headernssl[p].style.maxHeight = null;
          }
          e.preventDefault();
          headernslNext.parentElement.parentElement.style.maxHeight = (headernslNext.parentElement.parentElement.scrollHeight + headernslNext.scrollHeight) + "px";
          headernslNext.style.maxHeight = headernslNext.scrollHeight + "px";
          headernslNext.classList.add("active");
          this.classList.add("active");
        }
      }
    };
  }
}
// end menu

// start region
const headerregion = document.querySelector(".header__region");
const headermobileregion = document.querySelector(".header__mobile_region");
const headerregionclose = document.querySelector(".header__region_close");
const headerregionlabel = document.getElementsByClassName("header__region_label");
if(headerregionpopup) {
  headerregion.addEventListener('click', function() {
    if (!headerregionpopup.classList.contains("active")) {
      headerregionpopup.classList.add("active");
      headerOverlay.classList.add("active");
      bodyOverlay.classList.add("active");
      html.classList.add("noscroll");
      headertelpopup.classList.remove("active");
      headernslpActive.forEach((n) => n.classList.remove("active"));
      headernslpActive.forEach((n) => n.style.maxHeight = null);
      headernlpActive.forEach((n) => n.classList.remove("active"));
      if(headervacancypopup){headervacancypopup.classList.remove("active")};
      if(cf){
        cfLinksActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.style.maxHeight = null);
      };
      if(videopopup){
        headerOverlay.classList.remove("active");
        videopopup.classList.remove("active");
        videoinner.innerHTML = "";
      };
    } else {
      headerregionpopup.classList.remove("active");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      html.classList.remove("noscroll");
    }
  })
  headermobileregion.addEventListener('click', function() {
    if (!headerregionpopup.classList.contains("active")) {
      headerregionpopup.classList.add("active");
      headerOverlay.classList.add("active");
      bodyOverlay.classList.add("active");
      html.classList.add("noscroll");
      headertelpopup.classList.remove("active");
      headernslpActive.forEach((n) => n.classList.remove("active"));
      headernslpActive.forEach((n) => n.style.maxHeight = null);
      headernlpActive.forEach((n) => n.classList.remove("active"));
      if(headervacancypopup){headervacancypopup.classList.remove("active")};
      if(cf){
        cfLinksActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.style.maxHeight = null);
      };
      if(videopopup){
        headerOverlay.classList.remove("active");
        videopopup.classList.remove("active");
        videoinner.innerHTML = "";
      };
      hbottom.classList.remove("active");
      burger.classList.remove("active");
    } else {
      headerregionpopup.classList.remove("active");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      html.classList.remove("noscroll");
    }
  })
  headerregionclose.addEventListener('click', function() {
    headerregionpopup.classList.remove("active");
    headerOverlay.classList.remove("active");
    bodyOverlay.classList.remove("active");
    html.classList.remove("noscroll");
  })
  for (i = 0; i < headerregionlabel.length; i++) {
    headerregionlabel[i].onclick = function(e) {
      headerregion.children[1].innerText = this.innerText;
      headermobileregion.children[1].innerText = this.innerText;
      headerregionpopup.classList.remove("active");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      html.classList.remove("noscroll");
    };
  }
}
// end region

// start tel
const headertel = document.querySelector(".header__tel");
const headerteldesc = document.querySelector(".header__tel_desc");
const headertelinput = document.querySelector(".header__tel_input");
const systemsbutton = document.querySelector(".systems__button");
const orderservice = document.querySelector(".order_service");
const systemsservice = document.querySelector(".systems_service");
const findpricebutton = document.querySelector(".findprice__button");
const calculateleasingbutton = document.querySelector(".calculateleasing__button");
const headermobiletel = document.querySelector(".header__mobile_tel");
const headertelclose = document.querySelector(".header__tel_close");
const headertellabel = document.getElementsByClassName("header__tel_label");
if(headertelpopup) {
  headertel.addEventListener('click', function() {
    if (!headertelpopup.classList.contains("active")) {
      headerteldesc.innerText = "Мы перезвоним вам в течение 5 минут";
      headertelinput.value = "Обратный звонок";
      headertelpopup.classList.add("active");
      headerOverlay.classList.add("active");
      bodyOverlay.classList.add("active");
      html.classList.add("noscroll");
      headerregionpopup.classList.remove("active");
      headernslpActive.forEach((n) => n.classList.remove("active"));
      headernslpActive.forEach((n) => n.style.maxHeight = null);
      headernlpActive.forEach((n) => n.classList.remove("active"));
      if(headervacancypopup){headervacancypopup.classList.remove("active")};
      if(cf){
        cfLinksActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.style.maxHeight = null);
      };
      if(videopopup){
        headerOverlay.classList.remove("active");
        videopopup.classList.remove("active");
        videoinner.innerHTML = "";
      };
    } else {
      headertelpopup.classList.remove("active");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      html.classList.remove("noscroll");
    }
  })
  if (systemsbutton) {
    systemsbutton.addEventListener('click', function() {
      if (!headertelpopup.classList.contains("active")) {
        headerteldesc.innerText = "Стать частью";
        headertelinput.value = "Стать частью";
        headertelpopup.classList.add("active");
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        html.classList.add("noscroll");
        headerregionpopup.classList.remove("active");
        headernslpActive.forEach((n) => n.classList.remove("active"));
        headernslpActive.forEach((n) => n.style.maxHeight = null);
        headernlpActive.forEach((n) => n.classList.remove("active"));
        if(headervacancypopup){headervacancypopup.classList.remove("active")};
        if(cf){
          cfLinksActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.style.maxHeight = null);
        };
        if(videopopup){
          headerOverlay.classList.remove("active");
          videopopup.classList.remove("active");
          videoinner.innerHTML = "";
        };
      } else {
        headertelpopup.classList.remove("active");
        headerOverlay.classList.remove("active");
        bodyOverlay.classList.remove("active");
        html.classList.remove("noscroll");
      }
    })
  }
  if (orderservice) {
    orderservice.addEventListener('click', function() {
      if (!headertelpopup.classList.contains("active")) {
        headerteldesc.innerText = "Заказать услугу";
        headertelinput.value = "Заказать услугу";
        headertelpopup.classList.add("active");
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        html.classList.add("noscroll");
        headerregionpopup.classList.remove("active");
        headernslpActive.forEach((n) => n.classList.remove("active"));
        headernslpActive.forEach((n) => n.style.maxHeight = null);
        headernlpActive.forEach((n) => n.classList.remove("active"));
        if(headervacancypopup){headervacancypopup.classList.remove("active")};
        if(cf){
          cfLinksActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.style.maxHeight = null);
        };
        if(videopopup){
          headerOverlay.classList.remove("active");
          videopopup.classList.remove("active");
          videoinner.innerHTML = "";
        };
      } else {
        headertelpopup.classList.remove("active");
        headerOverlay.classList.remove("active");
        bodyOverlay.classList.remove("active");
        html.classList.remove("noscroll");
      }
    })
  }
  if (systemsservice) {
    systemsservice.addEventListener('click', function() {
      if (!headertelpopup.classList.contains("active")) {
        headerteldesc.innerText = "Заказать услугу системы точного земледелия";
        headertelinput.value = "Заказать услугу системы точного земледелия";
        headertelpopup.classList.add("active");
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        html.classList.add("noscroll");
        headerregionpopup.classList.remove("active");
        headernslpActive.forEach((n) => n.classList.remove("active"));
        headernslpActive.forEach((n) => n.style.maxHeight = null);
        headernlpActive.forEach((n) => n.classList.remove("active"));
        if(headervacancypopup){headervacancypopup.classList.remove("active")};
        if(cf){
          cfLinksActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.style.maxHeight = null);
        };
        if(videopopup){
          headerOverlay.classList.remove("active");
          videopopup.classList.remove("active");
          videoinner.innerHTML = "";
        };
      } else {
        headertelpopup.classList.remove("active");
        headerOverlay.classList.remove("active");
        bodyOverlay.classList.remove("active");
        html.classList.remove("noscroll");
      }
    })
  }
  if (findpricebutton) {
    findpricebutton.addEventListener('click', function() {
      if (!headertelpopup.classList.contains("active")) {
        headerteldesc.innerText = "Узнать цену";
        headertelinput.value = "Узнать цену - " + document.querySelector(".product__head").innerText;
        headertelpopup.classList.add("active");
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        html.classList.add("noscroll");
        headerregionpopup.classList.remove("active");
        headernslpActive.forEach((n) => n.classList.remove("active"));
        headernslpActive.forEach((n) => n.style.maxHeight = null);
        headernlpActive.forEach((n) => n.classList.remove("active"));
        if(headervacancypopup){headervacancypopup.classList.remove("active")};
        if(cf){
          cfLinksActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.style.maxHeight = null);
        };
        if(videopopup){
          headerOverlay.classList.remove("active");
          videopopup.classList.remove("active");
          videoinner.innerHTML = "";
        };
      } else {
        headertelpopup.classList.remove("active");
        headerOverlay.classList.remove("active");
        bodyOverlay.classList.remove("active");
        html.classList.remove("noscroll");
      }
    })
  }
  if (calculateleasingbutton) {
    calculateleasingbutton.addEventListener('click', function() {
      if (!headertelpopup.classList.contains("active")) {
        headerteldesc.innerText = "Рассчитать лизинг";
        headertelinput.value = "Рассчитать лизинг - " + document.querySelector(".product__head").innerText;
        headertelpopup.classList.add("active");
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        html.classList.add("noscroll");
        headerregionpopup.classList.remove("active");
        headernslpActive.forEach((n) => n.classList.remove("active"));
        headernslpActive.forEach((n) => n.style.maxHeight = null);
        headernlpActive.forEach((n) => n.classList.remove("active"));
        if(headervacancypopup){headervacancypopup.classList.remove("active")};
        if(cf){
          cfLinksActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.style.maxHeight = null);
        };
        if(videopopup){
          headerOverlay.classList.remove("active");
          videopopup.classList.remove("active");
          videoinner.innerHTML = "";
        };
      } else {
        headertelpopup.classList.remove("active");
        headerOverlay.classList.remove("active");
        bodyOverlay.classList.remove("active");
        html.classList.remove("noscroll");
      }
    })
  }
  headermobiletel.addEventListener('click', function() {
    if (!headertelpopup.classList.contains("active")) {
      headertelpopup.classList.add("active");
      headerOverlay.classList.add("active");
      bodyOverlay.classList.add("active");
      html.classList.add("noscroll");
      headerregionpopup.classList.remove("active");
      headernslpActive.forEach((n) => n.classList.remove("active"));
      headernslpActive.forEach((n) => n.style.maxHeight = null);
      headernlpActive.forEach((n) => n.classList.remove("active"));
      if(headervacancypopup){headervacancypopup.classList.remove("active")};
      if(cf){
        cfLinksActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.style.maxHeight = null);
      };
      if(videopopup){
        headerOverlay.classList.remove("active");
        videopopup.classList.remove("active");
        videoinner.innerHTML = "";
      };
      hbottom.classList.remove("active");
      burger.classList.remove("active");
    } else {
      headertelpopup.classList.remove("active");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      html.classList.remove("noscroll");
    }
  })
  headertelclose.addEventListener('click', function() {
    headertelpopup.classList.remove("active");
    headerOverlay.classList.remove("active");
    bodyOverlay.classList.remove("active");
    html.classList.remove("noscroll");
  })
  for (i = 0; i < headertellabel.length; i++) {
    headertellabel[i].onclick = function(e) {
      headertel.children[1].innerText = this.innerText;
      headermobiletel.children[1].innerText = this.innerText;
      headertelpopup.classList.remove("active");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      html.classList.remove("noscroll");
    };
  }
}
// end tel

// start tel
const headervacancydesc = document.querySelector(".header__vacancy_desc");
const headervacancyclose = document.querySelector(".header__vacancy_close");
const vacancycontact = document.getElementsByClassName("vacancy__contact");
if(headervacancypopup) {
  for (i = 0; i < vacancycontact.length; i++) {
    vacancycontact[i].onclick = function(e) {
      if (!headervacancypopup.classList.contains("active")) {
        headervacancydesc.children[1].innerText = this.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].children[0].innerText;
        document.getElementById('form__vacancy_name').value = this.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].children[0].innerText;
        headervacancypopup.classList.add("active");
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        html.classList.add("noscroll");
        headerregionpopup.classList.remove("active");
        headernslpActive.forEach((n) => n.classList.remove("active"));
        headernslpActive.forEach((n) => n.style.maxHeight = null);
        headernlpActive.forEach((n) => n.classList.remove("active"));
        if(cf){
          cfLinksActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.classList.remove("active"));
          cfPopupActive.forEach((n) => n.style.maxHeight = null);
        };
        if(videopopup){
          headerOverlay.classList.remove("active");
          videopopup.classList.remove("active");
          videoinner.innerHTML = "";
        };
      } else {
        headervacancypopup.classList.remove("active");
        headerOverlay.classList.remove("active");
        bodyOverlay.classList.remove("active");
        html.classList.remove("noscroll");
      }
    };
  }
  headervacancyclose.addEventListener('click', function() {
    headervacancypopup.classList.remove("active");
    headerOverlay.classList.remove("active");
    bodyOverlay.classList.remove("active");
    html.classList.remove("noscroll");
  })
}
// end tel

// start catalog__head
const catalogtophead = document.querySelector(".catalog_top__head");
const catalogtopheads = document.querySelectorAll("html .catalog_top__head");
if (catalogtophead) {
  catalogtopheads.forEach((n) => n.innerHTML = `<span>${n.textContent[0]}</span>${n.textContent.substring(1)}`);
}
// end catalog__head

// start filter
if(cf) {
  const cfLink = document.getElementsByClassName("catalog_filter__link");
  const cfPopup = document.querySelector(".catalog_filter__popup");
  const cfOne = document.querySelector('.catalog_filter__one');
  const cfTwo = document.querySelector('.catalog_filter__two');
  const cfThree = document.querySelector('.catalog_filter__three');
  for (i = 0; i < cfLink.length; i++) {
    cfLink[i].onclick = function(e) {
      const cfPopupHead = document.querySelector(".catalog_filter__popup_head");
      const cfLinkActive = document.getElementsByClassName("catalog_filter__link active");
      const cfListActive = document.querySelectorAll(".catalog_filter__popup .catalog_filter__popup_list");

      if (cfPopup.classList.contains("active")) {
        this.classList.remove("active");
        cfLinksActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.style.maxHeight = null);
        headerOverlay.classList.remove("active");
        bodyOverlay.classList.remove("active");
        html.classList.remove("noscroll");
      } else {
        for (var q = 0; q < cfLinkActive.length; q++) {
          cfLinkActive[q].classList.remove("active");
          cfPopup.classList.remove("active");
        }
        cfPopupHead.innerText = this.querySelector(".catalog_filter__name").innerText
        cfLinksActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.classList.remove("active"));
        cfPopupActive.forEach((n) => n.style.maxHeight = null);
        cfPopup.style.maxHeight = cfPopup.scrollHeight + "px";
        cfPopup.classList.add("active");
        this.classList.add("active");
        if (document.querySelector(".catalog_filter__link_one").classList.contains("active")) {
          cfListActive.forEach((n) => n.classList.remove("active"));
          cfOne.classList.add("active");
        } else if (document.querySelector(".catalog_filter__link_two").classList.contains("active")) {
          cfListActive.forEach((n) => n.classList.remove("active"));
          cfTwo.classList.add("active");
        } else {
          cfListActive.forEach((n) => n.classList.remove("active"));
          cfThree.classList.add("active");
        }
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        html.classList.add("noscroll");
      }
    };
  }

  const cfInputs = [...document.querySelectorAll('.catalog_filter__popup_input')];
  const cfOneInputs = [...document.querySelectorAll('.catalog_filter__one .catalog_filter__popup_input')];
  const cfTwoInputs = [...document.querySelectorAll('.catalog_filter__two .catalog_filter__popup_input')];
  const cfThreeInputs = [...document.querySelectorAll('.catalog_filter__three .catalog_filter__popup_input')];
  const cfOneAll = document.querySelector('.catalog_filter__one_all')
  const cfTwoAll = document.querySelector('.catalog_filter__two_all')
  const cfThreeAll = document.querySelector('.catalog_filter__three_all')
  const cfClear = document.querySelector('.catalog_filter__clear');
  const cfCheck = document.querySelector('.catalog_filter__mobile_check');

  const onChecked = () => {
    if(cfOneAll && cfTwoAll && cfThreeAll) {
      if(cfOneAll.classList.contains("active") && cfTwoAll.classList.contains("active") && cfThreeAll.classList.contains("active")) {
        if(cfOneAll){cfOneAll.classList.add("active")};
        if(cfTwoAll){cfTwoAll.classList.add("active")};
        if(cfThreeAll){cfThreeAll.classList.add("active")};
        cfClear.classList.remove("active");
        cfCheck.classList.remove("active");
      } else {
        cfClear.classList.add("active");
        cfCheck.classList.add("active");
      }
    } else if (cfOneAll && cfTwoAll) {
      if(cfOneAll.classList.contains("active") && cfTwoAll.classList.contains("active")) {
        if(cfOneAll){cfOneAll.classList.add("active")};
        if(cfTwoAll){cfTwoAll.classList.add("active")};
        cfClear.classList.remove("active");
        cfCheck.classList.remove("active");
      } else {
        cfClear.classList.add("active");
        cfCheck.classList.add("active");
      }
    } else if (cfTwoAll && cfThreeAll) {
      if(cfTwoAll.classList.contains("active") && cfThreeAll.classList.contains("active")) {
        if(cfTwoAll){cfTwoAll.classList.add("active")};
        if(cfThreeAll){cfThreeAll.classList.add("active")};
        cfClear.classList.remove("active");
        cfCheck.classList.remove("active");
      } else {
        cfClear.classList.add("active");
        cfCheck.classList.add("active");
      }
    } else if (cfOneAll && cfThreeAll) {
      if(cfOneAll.classList.contains("active") && cfThreeAll.classList.contains("active")) {
        if(cfOneAll){cfOneAll.classList.add("active")};
        if(cfThreeAll){cfThreeAll.classList.add("active")};
        cfClear.classList.remove("active");
        cfCheck.classList.remove("active");
      } else {
        cfClear.classList.add("active");
        cfCheck.classList.add("active");
      }
    } else if (cfOneAll) {
      if(cfOneAll.classList.contains("active")) {
        if(cfOneAll){cfOneAll.classList.add("active")};
        cfClear.classList.remove("active");
        cfCheck.classList.remove("active");
      } else {
        cfClear.classList.add("active");
        cfCheck.classList.add("active");
      }
    } else if (cfTwoAll) {
      if(cfTwoAll.classList.contains("active")) {
        if(cfTwoAll){cfTwoAll.classList.add("active")};
        cfClear.classList.remove("active");
        cfCheck.classList.remove("active");
      } else {
        cfClear.classList.add("active");
        cfCheck.classList.add("active");
      }
    } else if (cfThreeAll) {
      if(cfThreeAll.classList.contains("active")) {
        if(cfThreeAll){cfThreeAll.classList.add("active")};
        cfClear.classList.remove("active");
        cfCheck.classList.remove("active");
      } else {
        cfClear.classList.add("active");
        cfCheck.classList.add("active");
      }
    }
  }

  if(cfOneAll){
    cfOneInputs.forEach(input => input.addEventListener('input', function(event) {
      if (event.target.checked) {
        cfOneAll.classList.remove("active");
      } else {
        cfOneAll.classList.add("active");
      }
      onChecked()
    }))
  };

  if(cfTwoAll){
    cfTwoInputs.forEach(input => input.addEventListener('input', function(event) {
      if (event.target.checked) {
        cfTwoAll.classList.remove("active");
      } else {
        cfTwoAll.classList.add("active");
      }
      onChecked()
    }))
  };

  if(cfThreeAll){
    cfThreeInputs.forEach(input => input.addEventListener('input', function(event) {
      if (event.target.checked) {
        cfThreeAll.classList.remove("active");
      } else {
        cfThreeAll.classList.add("active");
      }
      onChecked()
    }))
  };

  cfCheck.addEventListener('click', function() {
    cfPopup.style.maxHeight = cfPopup.scrollHeight + "px";
    cfPopup.classList.add("active");
    headerOverlay.classList.add("active");
    bodyOverlay.classList.add("active");
    html.classList.add("noscroll");
  })

  if(cfOneAll){
    cfOneAll.addEventListener('click', function() {
      for(var i = 0;i < cfOneInputs.length; i++) {cfOneInputs[i].checked = false;};
      cfOneAll.classList.add("active");
      onChecked()
    })
  }

  if(cfTwoAll){
    cfTwoAll.addEventListener('click', function() {
      for(var i = 0;i < cfTwoInputs.length; i++) {cfTwoInputs[i].checked = false;};
      cfTwoAll.classList.add("active");
      onChecked()
    })
  }

  if(cfThreeAll){
    cfThreeAll.addEventListener('click', function() {
      for(var i = 0;i < cfThreeInputs.length; i++) {cfThreeInputs[i].checked = false;};
      cfThreeAll.classList.add("active");
      onChecked()
    })
  }

  cfClear.addEventListener('click', function() {
    for(var i = 0;i < cfInputs.length; i++) {cfInputs[i].checked = false;};
    if(cfOneAll){cfOneAll.classList.add("active")};
    if(cfTwoAll){cfTwoAll.classList.add("active")};
    if(cfThreeAll){cfThreeAll.classList.add("active")};
    cfCheck.classList.remove("active");
    cfClear.classList.remove("active");
  })
}
// end filter

// start product
const productChar = document.querySelector('.product__char')
const productCharBlock = document.querySelector('.product__char_block')
const productDesc = document.querySelector('.product__description')
const productDescBlock = document.querySelector('.product__description_block')
if (productChar && productCharBlock && productDesc && productDescBlock) {
  productChar.addEventListener('click', function() {
    if (!productChar.classList.contains("active")) {
      productChar.classList.add("active");
      productCharBlock.classList.add("active");
      productDesc.classList.remove("active");
      productDescBlock.classList.remove("active");
    }
  })
  
  productDesc.addEventListener('click', function() {
    if (!productDesc.classList.contains("active")) {
      productDesc.classList.add("active");
      productDescBlock.classList.add("active");
      productChar.classList.remove("active");
      productCharBlock.classList.remove("active");
    }
  })
}
// end product

// start hero__slider
const heroblock = document.querySelector(".hero__block");
if(heroblock){
  var heroslider = new Swiper(".hero__slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span class="count">' + (index + 1) + "</span>" + "</span>";
      },
      clickable: true,
    },
    navigation: {
      nextEl: ".hero__next",
      prevEl: ".hero__prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        heroblock.style.setProperty("--progress", 1 - progress);
      },
      slideChange: function (swiper) {
        const count = document.querySelector('.hero__pagination .swiper-pagination-bullet-active .count');
        if (count) {
          const herocount = document.querySelector('.hero__count');
          herocount.innerHTML = count.innerHTML;
        }
      }
    }
  });
  document.querySelector('.hero__total').innerHTML = document.querySelector('.hero__list').children.length;
}
// end hero__slider

// start company_slider
const companyslider = document.querySelector(".company_slider");
if(companyslider){
  var companysliderslider = new Swiper(".company_slider__slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".company_slider__next",
      prevEl: ".company_slider__prev"
    },
    breakpoints: {
      1439: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
    },
  });
}
// end company_slider

// start company_specialists
const companyspecialists = document.querySelector(".company_specialists");
if(companyspecialists){
  var companyspecialist = new Swiper(".company_specialists__slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 500,
    navigation: {
      nextEl: ".company_specialists__next",
      prevEl: ".company_specialists__prev"
    },
    breakpoints: {
      1439: {
        spaceBetween: 10,
      },
      1: {
        spaceBetween: 10,
      },
    },
  });
}
// end company_specialists

// start news__slider
const news = document.querySelector(".news");
if(news){
  var newsslider = new Swiper(".news__slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false
    // },
    navigation: {
      nextEl: ".news__next",
      prevEl: ".news__prev"
    },
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
    },
  });
}
// end news__slider

// start other__slider
const otherslider = document.querySelector(".other__slider");
if(otherslider){
  var otherswiper = new Swiper(".other__slider", {
    slidesPerView: 5,
    spaceBetween: 16,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".other__slider_next",
      prevEl: ".other__slider_prev"
    },
    breakpoints: {
      1920: {
        slidesPerView: 5,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
}
// end other__slider

// start other__slider
const productsliders = document.querySelector(".product__slider");
if(productsliders){
  var productthumbs = new Swiper(".product__thumbs", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      1: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
  var productslider = new Swiper(".product__slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productthumbs,
    },
  });
}
// end other__slider

// start partner__list
const partnerlist = document.querySelector('.partner__list');
if(partnerlist){
  const partnerlists = document.querySelectorAll('.partner__list');
  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".partner__item").length <= 1) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
          n.querySelector('.partner__list').innerHTML = partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML
      })
    } else if (document.querySelectorAll(".partner__item").length <= 2) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
          n.querySelector('.partner__list').innerHTML = partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML
      })
    } else if (document.querySelectorAll(".partner__item").length <= 3) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
          n.querySelector('.partner__list').innerHTML = partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML
      })
    } else if (document.querySelectorAll(".partner__item").length <= 6) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
          n.querySelector('.partner__list').innerHTML = partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML + partnerlists[i].innerHTML
      })
    } else if (document.querySelectorAll(".partner__item").length <= 11) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
          n.querySelector('.partner__list').innerHTML = partnerlists[i].innerHTML + partnerlists[i].innerHTML
      })
    }
  });
}
// end partner__list

// start academy__list
const academylist = document.querySelector('.academy__list');
if(academylist){
  const academylists = document.querySelectorAll('.academy__list');
  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".academy__item").length <= 1) {
      [...document.querySelectorAll('.academy__slider_block')].map((n, i) => {
          n.querySelector('.academy__list').innerHTML = academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML
      })
    } else if (document.querySelectorAll(".academy__item").length <= 2) {
      [...document.querySelectorAll('.academy__slider_block')].map((n, i) => {
          n.querySelector('.academy__list').innerHTML = academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML
      })
    } else if (document.querySelectorAll(".academy__item").length <= 3) {
      [...document.querySelectorAll('.academy__slider_block')].map((n, i) => {
          n.querySelector('.academy__list').innerHTML = academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML
      })
    } else if (document.querySelectorAll(".academy__item").length <= 6) {
      [...document.querySelectorAll('.academy__slider_block')].map((n, i) => {
          n.querySelector('.academy__list').innerHTML = academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML + academylists[i].innerHTML
      })
    } else if (document.querySelectorAll(".academy__item").length <= 11) {
      [...document.querySelectorAll('.academy__slider_block')].map((n, i) => {
          n.querySelector('.academy__list').innerHTML = academylists[i].innerHTML + academylists[i].innerHTML
      })
    }
  });
}
// end academy__list

// start video
const preview = document.querySelector('.showreel__button');
const showreelmodal = document.querySelector('.showreel__modal');
const showreelmodalClose = document.querySelector('.showreel__modal_close');
const showreelvideor = document.querySelector('.showreel__video_responsive');
window.onload = function(){
  setTimeout(() => {
  if(showreelvideor){
    document.querySelector('.showreel__block').innerHTML = '<video poster="./img/showreel.webp " playsinline autoplay muted loop><source src="./img/showreel.mp4" type="video/mp4"></video>';
    showreelvideor.innerHTML = '<video id="showreel__video" poster="./img/showreel.webp " playsinline loop data-overlay="1" data-title="ANYERA"><source src="./img/showreel.mp4" type="video/mp4"></video>';
    setTimeout(function() {
      const showreelvideo = document.getElementById('showreel__video');
      if(showreelvideo){
        showreelvideo.pause();
        showreelvideo.currentTime = 0;
        preview.onclick = function(e) {
          e.preventDefault();
          showreelmodal.classList.add('showreel__modal_visible');
          document.querySelector('.spec__overlay').classList.add('is-playing');
          showreelvideo.play();
          html.classList.add("noscroll");
          var t;
          window.addEventListener('mousemove', () => {
            if (t) {
              showreelmodal.classList.remove('hide')
              clearTimeout(t)
              t = 0
            }
            t = setTimeout(() => showreelmodal.classList.add('hide'), 1500)
          });
          const progress = document.querySelector('.progress');
          const progressLine = document.querySelector('.progress__line');
          progress.addEventListener('mousemove', (e) => {
            progressLine.style.left = e.offsetX + 'px';
          });
        }
        showreelmodalClose.onclick = function() {
          document.querySelector('.spec__overlay').classList.remove('is-playing');
          showreelmodal.classList.remove('showreel__modal_visible');
          showreelvideo.pause();
          showreelvideo.currentTime = 0;
          html.classList.remove("noscroll");
        }
      }
      (function () {
        // helpers
        var regExp = function regExp(name) {
            return new RegExp('(^| )' + name + '( |$)');
        };
        var forEach = function forEach(list, fn, scope) {
            for (var i = 0; i < list.length; i++) {
                fn.call(scope, list[i]);
            }
        };
        // class list object with basic methods
        function ClassList(element) {
            this.element = element;
        }
        ClassList.prototype = {
            add: function add() {
                forEach(arguments, function (name) {
                    if (!this.contains(name)) {
                        this.element.className += ' ' + name;
                    }
                }, this);
            },
            remove: function remove() {
                forEach(arguments, function (name) {
                    this.element.className = this.element.className.replace(regExp(name), '');
                }, this);
            },
            toggle: function toggle(name) {
                return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
            },
            contains: function contains(name) {
                return regExp(name).test(this.element.className);
            },
            // bonus..
            replace: function replace(oldName, newName) {
                this.remove(oldName), this.add(newName);
            }
        };
        // IE8/9, Safari
        if (!('classList' in Element.prototype)) {
            Object.defineProperty(Element.prototype, 'classList', {
                get: function get() {
                    return new ClassList(this);
                }
            });
        }
        // replace() support for others
        if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
            DOMTokenList.prototype.replace = ClassList.prototype.replace;
        }
      })();
      (function () {
        if (typeof NodeList.prototype.forEach === "function") return false;
        NodeList.prototype.forEach = Array.prototype.forEach;
      })();
      // Unfortunately, due to scattered support, browser sniffing is required
      function browserSniff() {
        var nVer = navigator.appVersion,
            nAgt = navigator.userAgent,
            browserName = navigator.appName,
            fullVersion = '' + parseFloat(navigator.appVersion),
            majorVersion = parseInt(navigator.appVersion, 10),
            nameOffset,
            verOffset,
            ix;
        // MSIE 11
        if (navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1) {
            browserName = "IE";
            fullVersion = "11;";
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) {
                browserName = "IE";
                fullVersion = nAgt.substring(verOffset + 5);
            }
            // Chrome
            else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) {
                    browserName = "Chrome";
                    fullVersion = nAgt.substring(verOffset + 7);
                }
                // Safari
                else if ((verOffset = nAgt.indexOf("Safari")) !== -1) {
                        browserName = "Safari";
                        fullVersion = nAgt.substring(verOffset + 7);
                        if ((verOffset = nAgt.indexOf("Version")) !== -1) {
                            fullVersion = nAgt.substring(verOffset + 8);
                        }
                    }
                    // Firefox
                    else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) {
                            browserName = "Firefox";
                            fullVersion = nAgt.substring(verOffset + 8);
                        }
                        // In most other browsers, "name/version" is at the end of userAgent
                        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                                browserName = nAgt.substring(nameOffset, verOffset);
                                fullVersion = nAgt.substring(verOffset + 1);
                                if (browserName.toLowerCase() == browserName.toUpperCase()) {
                                    browserName = navigator.appName;
                                }
                            }
        // Trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        if ((ix = fullVersion.indexOf(" ")) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        return [browserName, majorVersion];
      }
      
      var obj = {};
      obj.browserInfo = browserSniff();
      obj.browserName = obj.browserInfo[0];
      obj.browserVersion = obj.browserInfo[1];
      
      wrapPlayers();
      var players = document.querySelectorAll('.spec__player');
      var iconPlay = '<i class="spec-play"></i>';
      var iconPause = '<i class="spec-pause"></i>';
      var iconVolumeMute = '<i class="spec-volume-mute"></i>';
      var iconVolumeMedium = '<i class="spec-volume-medium"></i>';
      var iconVolumeLow = '<i class="spec-volume-low"></i>';
      var iconExpand = '<i class="spec-expand"></i>';
      var iconCompress = '<i class="spec-compress"></i>';
      
      players.forEach(function (player) {
        var videos = player.querySelector('.showreel__video_responsive video');
        var skin = attachSkin(videos.dataset.spec);
        player.classList.add(skin);
        var overlay = videos.dataset.overlay;
        addOverlay(player, overlay);
        var title = showTitle(skin, videos.dataset.title);
        if (title) {
            player.insertAdjacentHTML('beforeend', title);
        }
        var html = buildControls(skin);
        player.insertAdjacentHTML('beforeend', html);
        var color = videos.dataset.color;
        addColor(player, color);
        var playerControls = player.querySelector('.' + skin + '__controls');
        var progress = player.querySelector('.progress');
        var progressBar = player.querySelector('.progress__filled');
        var toggle = player.querySelectorAll('.toggle');
        var volumeButton = player.querySelector('.volume');
        var fullScreenButton = player.querySelector('.fullscreen');
        if (obj.browserName === "IE" && (obj.browserVersion === 8 || obj.browserVersion === 9)) {
            showControls(videos);
            playerControls.style.display = "none";
        }
        videos.addEventListener('click', function () {
            togglePlay(this, player);
        });
        videos.addEventListener('play', function () {
            updateButton(this, toggle);
        });
        videos.addEventListener('pause', function () {
            updateButton(this, toggle);
        });
        videos.addEventListener('timeupdate', function () {
            handleProgress(this, progressBar);
        });
        toggle.forEach(function (button) {
            return button.addEventListener('click', function () {
                togglePlay(videos, player);
            });
        });
        volumeButton.addEventListener('click', function () {
            toggleVolume(videos, volumeButton);
        });
        var mousedown = false;
        progress.addEventListener('click', function (e) {
            scrub(e, videos, progress);
        });
        progress.addEventListener('mousemove', function (e) {
            return mousedown && scrub(e, videos, progress);
        });
        progress.addEventListener('mousedown', function () {
            return mousedown = true;
        });
        progress.addEventListener('mouseup', function () {
            return mousedown = false;
        });
        fullScreenButton.addEventListener('click', function (e) {
            return toggleFullScreen(player, fullScreenButton);
        });
        addListenerMulti(player, 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function (e) {
            return onFullScreen(e, player);
        });
      });
      function showControls(videon) {
        videon.setAttribute("controls", "controls");
      }
      function togglePlay(videon, player) {
        var method = videon.paused ? 'play' : 'pause';
        videon[method]();
        videon.paused ? player.classList.remove('is-playing') : player.classList.add('is-playing');
      }
      function updateButton(videon, toggle) {
        var icon = videon.paused ? iconPlay : iconPause;
        toggle.forEach(function (button) {
            return button.innerHTML = icon;
        });
        const progress = document.querySelector('.progress');
        const progress__time = document.getElementById("progress__time");
        progress.addEventListener('mousemove', (e) => {
          var thours = Math.floor((e.offsetX / progress.offsetWidth * videon.duration) / 60 / 60);
          var tminutes = Math.floor((e.offsetX / progress.offsetWidth * videon.duration) / 60) - (thours * 60);
          var tseconds = Math.floor((e.offsetX / progress.offsetWidth * videon.duration) % 60);
          progress__time.innerHTML = [tminutes,tseconds.toString().padStart(2, '0')].join(':');
        });
        var dhours = Math.floor(videon.duration / 60 / 60);
        var dminutes = Math.floor(videon.duration / 60) - (dhours * 60);
        var dseconds = Math.floor(videon.duration % 60);
        progress__duration.innerHTML = [dminutes,dseconds.toString().padStart(2, '0')].join(':');
      }
      function skip() {
        videon.currentTime += parseFloat(this.dataset.skip);
      }
      function toggleVolume(videon, volumeButton) {
        var level = videon.volume;
        var icon = iconVolumeMedium;
        if (level == 1) {
            level = 0;
            icon = iconVolumeMute;
        } else if (level == 0.5) {
            level = 1;
            icon = iconVolumeMedium;
        } else {
            level = 0.5;
            icon = iconVolumeLow;
        }
        videon['volume'] = level;
        volumeButton.innerHTML = icon;
      }
      function handleRangeUpdate() {
        videon[this.name] = this.value;
      }
      function handleProgress(videon, progressBar) {
        var percent = videon.currentTime / videon.duration * 100;
        progressBar.style.flexBasis = percent + '%';
        progress__duration = document.getElementById("progress__duration");
        progress__currenttime = document.getElementById("progress__currenttime");
        var chours = Math.floor(videon.currentTime / 60 / 60);
        var cminutes = Math.floor(videon.currentTime / 60) - (chours * 60);
        var cseconds = Math.floor(videon.currentTime % 60);
        progress__currenttime.innerHTML = [cminutes,cseconds.toString().padStart(2, '0')].join(':');
      }
      function scrub(e, videon, progress) {
        var scrubTime = e.offsetX / progress.offsetWidth * videon.duration;
        videon.currentTime = scrubTime;
      }
      function wrapPlayers() {
        var videol = document.querySelectorAll('.showreel__video_responsive video');
        videol.forEach(function (videon) {
            var wrapper = document.createElement('div');
            wrapper.classList.add('spec__player');
            videon.parentNode.insertBefore(wrapper, videon);
            wrapper.appendChild(videon);
        });
      }
      Number.prototype.lead0 = function(n) {
        var nz = "" + this;
        while (nz.length < n) {
            nz = "0" + nz;
        }
        return nz;
      };
      function buildControls(skin) {
        var html = [];
        html.push('<button class="' + skin + '__button--big toggle">' + iconPlay + '</button>');
        html.push('<div class="' + skin + '__border"></div>');
        html.push('<div class="' + skin + '__controls spec__controls">');
        html.push('<button class="' + skin + '__button toggle">' + iconPlay + '</button>', '<div class="progress">', '<div class="progress__filled"></div>', '<div class="progress__line"><p id="progress__time"></p></div>', '<p id="progress__duration"></p>', '<p id="progress__currenttime"></p>', '</div>', '<button class="' + skin + '__button volume">' + iconVolumeMedium + '</button>', '<button class="' + skin + '__button fullscreen" title="Full Screen">' + iconExpand + '</button>');
        html.push('</div>');
        return html.join('');
      }
      function attachSkin(skin) {
        if (typeof skin != 'undefined' && skin != '') {
            return skin;
        } else {
            return 'spec';
        }
      }
      function showTitle(skin, title) {
        if (typeof title != 'undefined' && title != '') {
            return '<div class="' + skin + '__title">' + title + '</div>';
        } else {
            return false;
        }
      }
      function addOverlay(player, overlay) {
        if (overlay == 1) {
            player.classList.add('spec__overlay');
        } else if (overlay == 2) {
            player.classList.add('spec__overlay--2');
        } else {
            return;
        }
      }
      function addColor(player, color) {
        if (typeof color != 'undefined' && color != '') {
            var buttons = player.querySelectorAll('button');
            var progress = player.querySelector('.progress__filled');
            progress.style.background = color;
            buttons.forEach(function (button) {
                return button.style.color = color;
            });
        }
      }
      function toggleFullScreen(player, fullScreenButton) {
        // let isFullscreen = false;
        if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            player.classList.add('spec__fullscreen');
      
            if (player.requestFullscreen) {
                player.requestFullscreen();
            } else if (player.mozRequestFullScreen) {
                player.mozRequestFullScreen(); // Firefox
            } else if (player.webkitRequestFullscreen) {
                player.webkitRequestFullscreen(); // Chrome and Safari
            } else if (player.msRequestFullscreen) {
                player.msRequestFullscreen();
            }
            isFullscreen = true;
      
            fullScreenButton.innerHTML = iconCompress;
        } else {
            player.classList.remove('spec__fullscreen');
      
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            isFullscreen = false;
            fullScreenButton.innerHTML = iconExpand;
        }
      }
      
      function onFullScreen(e, player) {
        var isFullscreenNow = document.webkitFullscreenElement !== null;
        if (!isFullscreenNow) {
            player.classList.remove('spec__fullscreen');
            player.querySelector('.fullscreen').innerHTML = iconExpand;
        } else {
            // player.querySelector('.fullscreen').innerHTML = iconExpand;
        }
      }
      
      function addListenerMulti(element, eventNames, listener) {
        var events = eventNames.split(' ');
        for (var i = 0, iLen = events.length; i < iLen; i++) {
            element.addEventListener(events[i], listener, false);
        }
      }
    }, 1);
  }
  // start company_top__video
  const companyti = document.querySelector('.company_top__image');
  const companytiAll = document.querySelectorAll('[video]');
  if (companyti) {
    [...companytiAll].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){
      elem.parentElement.innerHTML = '<div class="video__button" videobutton="'+elem.parentElement.getAttribute('video')+'"></div><iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+elem.parentElement.getAttribute('video')+'?autoplay=1&controls=0&mute=1&loop=1&autohide=1&modestbranding=1&rel=0&disablekb=1&enablejsapi=0&fs=0&iv_load_policy=3&playlist='+elem.parentElement.getAttribute('video')+'" frameborder="0" allow="autoplay;"></iframe>';
    }});
  }
  // end company_top__video
  if (videopopup) {
    let videobutton = document.querySelectorAll(".video__button");
    const videoclose = document.querySelector('.video__close');
    for (let i = 0; i < videobutton.length; i++) {
      videobutton[i].onclick = function(e) {
        html.classList.add("noscroll");
        headerOverlay.classList.add("active");
        bodyOverlay.classList.add("active");
        videopopup.classList.add("active");
        videoinner.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+this.getAttribute('videobutton')+'?autoplay=1&controls=1&mute=0&loop=1&autohide=1&modestbranding=1&rel=0&disablekb=1&enablejsapi=0&fs=0&iv_load_policy=3&playlist='+this.getAttribute('videobutton')+'" frameborder="0" allow="autoplay;"></iframe>';
      }
    }
    videoclose.addEventListener('click', function() {
      html.classList.remove("noscroll");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      videopopup.classList.remove("active");
      videoinner.innerHTML = "";
    })
    videopopup.addEventListener('click', function() {
      html.classList.remove("noscroll");
      headerOverlay.classList.remove("active");
      bodyOverlay.classList.remove("active");
      videopopup.classList.remove("active");
      videoinner.innerHTML = "";
    })
  }
  }, 1000);
}
// end video

// start accordion projects__filter
const categorysl = document.querySelectorAll('.category__sublist');
[...categorysl].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
// end accordion projects__filter

// start actions
const btnactions = document.querySelector('.button__actions');
const blockactions = document.querySelector('.actions__flex_actions');
const btnnews = document.querySelector('.button__news');
const blocknews = document.querySelector('.actions__flex_news');

if (btnactions && blockactions && btnnews && blocknews) {
  btnactions.addEventListener('click', function() {
    if (!btnactions.classList.contains("active")) {
      btnactions.classList.add("active");
      blockactions.classList.add("active");
      btnnews.classList.remove("active");
      blocknews.classList.remove("active");
    }
  })
  
  btnnews.addEventListener('click', function() {
    if (!btnnews.classList.contains("active")) {
      btnnews.classList.add("active");
      blocknews.classList.add("active");
      btnactions.classList.remove("active");
      blockactions.classList.remove("active");
    }
  })
}
// end actions

// start actions
const btnacademy = document.querySelector('.button__academy');
const blockbm = document.querySelector('.academy__bm');
const btnarticle = document.querySelector('.button__article');
const blockarticle = document.querySelector('.academy__article');
const btninstructions = document.querySelector('.button__instructions');
const blockinstructions = document.querySelector('.academy__instructions');

if (btnacademy && blockbm && btnarticle && blockarticle) {
  btnacademy.addEventListener('click', function() {
    if (!btnacademy.classList.contains("active")) {
      btnacademy.classList.add("active");
      blockbm.classList.add("active");
      btnarticle.classList.remove("active");
      blockarticle.classList.remove("active");
      btninstructions.classList.remove("active");
      blockinstructions.classList.remove("active");
    }
  })
  
  btnarticle.addEventListener('click', function() {
    if (!btnarticle.classList.contains("active")) {
      btnarticle.classList.add("active");
      blockarticle.classList.add("active");
      btnacademy.classList.remove("active");
      blockbm.classList.remove("active");
      btninstructions.classList.remove("active");
      blockinstructions.classList.remove("active");
    }
  })
  
  btninstructions.addEventListener('click', function() {
    if (!btninstructions.classList.contains("active")) {
      btninstructions.classList.add("active");
      blockinstructions.classList.add("active");
      btnarticle.classList.remove("active");
      blockarticle.classList.remove("active");
      btnacademy.classList.remove("active");
      blockbm.classList.remove("active");
    }
  })
}
// end actions

// start vacancy__accordion
const vacancybutton = document.querySelector('.vacancy__button');
if (vacancybutton) {

  // start vacancy__count
  const vacancycounter = document.querySelectorAll('.vacancy__accordion');
  [...vacancycounter].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){
    elem.children[0].children[0].children[0].innerHTML = index+1;
    elem.children[0].children[0].children[0].innerText = elem.children[0].children[0].children[0].innerHTML.length < 2 ? '0' + elem.children[0].children[0].children[0].innerHTML: elem.children[0].children[0].children[0].innerHTML;
  }});
  // end vacancy__count

  var vacancybuttons = document.getElementsByClassName("vacancy__button");
  for (i = 0; i < vacancybuttons.length; i++) {
    vacancybuttons[i].onclick = function(e) {
      var vacancyNext = this.nextElementSibling;
      var vacancypanel = document.getElementsByClassName("vacancy__panel");
      var vacancypanelActive = document.getElementsByClassName("vacancy__button active");

      if (vacancyNext.style.maxHeight) {
        vacancyNext.style.maxHeight = null;
        this.classList.remove("active");
        vacancyNext.classList.remove("active");
      } else {
        for (var q = 0; q < vacancypanelActive.length; q++) {
          vacancypanelActive[q].classList.remove("active");
          vacancypanel[q].classList.remove("active");
        }
        for (var p = 0; p < vacancypanel.length; p++) {
          this.classList.remove("active");
          vacancypanel[p].classList.remove("active");
          vacancypanel[p].style.maxHeight = null;
        }
        vacancyNext.style.maxHeight = vacancyNext.scrollHeight + "px";
        vacancyNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end vacancy__accordion

// start company_top__count
const companytl = document.querySelectorAll('.company_top__list');
[...companytl].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){
  elem.children[0].children[0].children[1].children[0].innerHTML = index+1;
  elem.children[0].children[0].children[1].children[0].innerText = elem.children[0].children[0].children[1].children[0].innerHTML.length < 2 ? '0' + elem.children[0].children[0].children[1].children[0].innerHTML: elem.children[0].children[0].children[1].children[0].innerHTML;
}});
// end company_top__count