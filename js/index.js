var swiperBrandSlider;

window.addEventListener('resize', function(event) {
  let documentWidth = document.body.clientWidth;
  
  if (documentWidth < 426) {
    let brandSlider =  document.querySelector('.brand-slider');
    if (typeof(brandSlider) != 'undefined' && brandSlider != null) {
      swiperBrandSlider = new Swiper('.brand-slider', {
        speed: 600,
        centeredSlides: false,
        spaceBetween: 0,
        touchRatio: 1,
        loop: true,
        wrapperClass: 'brand-slider__wrapper',
        slideClass: 'brand-slider__item',
        slidesPerView: 1,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
		  1500: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }
	document.querySelector('.swiper-pagination').setAttribute('style', '');
  } else {
	if (typeof(swiperBrandSlider) != 'undefined' && swiperBrandSlider != null) {
	  swiperBrandSlider.destroy(true, true);
	  document.querySelector('.brand-slider__wrapper').style.cssText = '';
	  document.querySelector('.swiper-pagination').setAttribute('style', 'display:none;');
	}		 
  }
}, true);

window.addEventListener('DOMContentLoaded', function(event) {
	
  function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) { //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }

  function collectionHas(a, b) { //helper function (see below)
    for(var i = 0, len = a.length; i < len; i ++) {
      if(a[i] == b) return true;
    }
    return false;
  }

  const brandSliderReadMore = document.querySelector('.brand-slider__more');
  if (typeof(brandSliderReadMore) != 'undefined' && brandSliderReadMore != null) {
    brandSliderReadMore.onclick = function () {
      let brandSlider = findParentBySelector(this, '.brand-slider');
      if (this.classList.contains('brand-slider__more--hide')) {
        this.classList.remove('brand-slider__more--hide');
        brandSlider.classList.remove('brand-slider__list--open');
        this.innerHTML = 'Показать все';
      } else {
        this.classList.add('brand-slider__more--hide');
        brandSlider.classList.add('brand-slider__list--open');
        this.innerHTML = 'Скрыть все';
      }
    };
  }
	
  let documentWidth = document.body.clientWidth;
  
  if (documentWidth < 426) {
    var brandSlider =  document.querySelector('.brand-slider');
    if (typeof(brandSlider) != 'undefined' && brandSlider != null) {
		console.log('swiperBrandSlider ');
      swiperBrandSlider = new Swiper('.brand-slider', {
        speed: 600,
        centeredSlides: false,
        spaceBetween: 0,
        touchRatio: 1,
        loop: true,
		cleanStyles: true,
        wrapperClass: 'brand-slider__wrapper',
        slideClass: 'brand-slider__item',
        slidesPerView: 1,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
          1500: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }
  }
}, true);
