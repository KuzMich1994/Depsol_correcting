



$(document).ready(function(){
  $('.index-bthree__slider').slick({
    variableWidh: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
	      breakpoint: 1550,
	      settings: {
	        slidesToShow: 5,
	      }
      },
      {
	      breakpoint: 1400,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 1150,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 2,
	      }
      },
      {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });

  $('.index-bfour__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  


  $('.index-bsix__slider').slick({
    infinite: true,
    variableWidh: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
	    {
        breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	      }
	    },

    ]
  });
  $('.use__slider').slick({
    infinite: true,
    variableWidh: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    responsive: [
	    {
	      breakpoint: 1250,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
        breakpoint: 950,
	      settings: {
          swipe: true,
          slidesToScroll: 2,
	        slidesToShow: 2,
	      }
      },
      {
	      breakpoint: 650,
	      settings: {
          swipe: true,
          slidesToScroll: 1,
	        slidesToShow: 1,
	      }
	    }
    ]
  });

  $('.about-btwo__slider').slick({
    infinite: true,
    variableWidh: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
	    {
	      breakpoint: 1250,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 2,
	      }
      },
      {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });





var boxOne = $('#box-1');
var boxTwo = $('#box-2');
var boxThree = $('#box-3');
var boxFour = $('#box-4');

boxOne.hover(function () {
$('.index-bone').removeClass('box-1 box-2 box-3 box-4');
  $('.index-bone').addClass('box-1');
  document.getElementById("index-title").innerHTML = "Термопластичные полимеры, эластомеры и компаунды ";
})
boxTwo.hover(function () {
$('.index-bone').removeClass('box-1 box-2 box-3 box-4');
$('.index-bone').addClass('box-2');
document.getElementById("index-title").innerHTML = "Термопластичные полимеры, эластомеры и компаунды -2";
})
boxThree.hover(function () {
$('.index-bone').removeClass('box-1 box-2 box-3 box-4');
$('.index-bone').addClass('box-3');
document.getElementById("index-title").innerHTML = "Термопластичные полимеры, эластомеры и компаунды -3";
})
boxFour.hover(function () {
$('.index-bone').removeClass('box-1 box-2 box-3 box-4');
$('.index-bone').addClass('box-4');
document.getElementById("index-title").innerHTML = "Термопластичные полимеры, эластомеры и компаунды -4";
})


var CurrentPage = 0;
var PageOne = $('.quiz-bone');
var PageTwo = $('.quiz-btwo');
var PageThree = $('.quiz-bthree');
var PageFour = $('.quiz-bfour');
var PageFive = $('.quiz-bfive');
var PageSix = $('.quiz-bsix');
var PageSeven = $('.quiz-bseven');
var StatusBar = $('.quiz__status-bar span')

$('.header__btn').click(function () {
  $('.quiz').addClass('block');
  PageOne.addClass('block');
  $('.quiz-mask').addClass('block');
  $('body').addClass('scroll-hidden');
  StatusBar.css("width", "83px");
  CurrentPage = 1;
})
$('.use__btn').click(function () {
  $('.quiz').addClass('block');
  PageOne.addClass('block');
  $('.quiz-mask').addClass('block');
  $('body').addClass('scroll-hidden');
  StatusBar.css("width", "83px");
  CurrentPage = 1;
})



$('.footer__btn').click(function () {
  $('.popup').addClass('block');
  $('.quiz-mask').addClass('block');
  $('.block-one').addClass('block');
  $('body').addClass('scroll-hidden');
})

$('#popup-send').click(function () {
  $('.block-one').removeClass('block');
  $('.block-two').addClass('block');

})


$('.quiz__btn-next').click(function () {
  CurrentPage +=1;
  if(CurrentPage == 1){
    PageOne.addClass('block');
  }
  if(CurrentPage == 2){
    PageOne.removeClass('block');
    PageTwo.addClass('block');
    StatusBar.css("width", "166px");
  }
  if(CurrentPage == 3){
    PageTwo.removeClass('block');
    PageThree.addClass('block');
    StatusBar.css("width", "250px");
  }
  if(CurrentPage == 4){
    PageThree.removeClass('block');
    PageFour.addClass('block');
    StatusBar.css("width", "333px");
  }
  if(CurrentPage == 5){
    PageFour.removeClass('block');
    PageFive.addClass('block');
    StatusBar.css("width", "416px");
  }
  if(CurrentPage == 6){
    PageFive.removeClass('block');
    PageSix.addClass('block');
    StatusBar.css("width", "100%");
  }
  if(CurrentPage == 7){
    PageSix.removeClass('block');
    PageSeven.addClass('block');
  }

})
$('.quiz__btn-back').click(function () {
  CurrentPage -= 1;
  if(CurrentPage == 1){
    PageTwo.removeClass('block');
    PageOne.addClass('block');
    StatusBar.css("width", "83px");
  }
  if(CurrentPage == 2){
    PageThree.removeClass('block');
    PageTwo.addClass('block');
    StatusBar.css("width", "166px");
  }
  if(CurrentPage == 3){
    PageFour.removeClass('block');
    PageThree.addClass('block');
    StatusBar.css("width", "250px");
  }
  if(CurrentPage == 4){
    PageFive.removeClass('block');
    PageFour.addClass('block');
    StatusBar.css("width", "333px");
  }
  if(CurrentPage == 5){
    PageSix.removeClass('block');
    PageFive.addClass('block');
    StatusBar.css("width", "416px");
  }
  if(CurrentPage == 6){
    PageFive.removeClass('block');
    PageSix.addClass('block');
  }
})
$('.quiz__btn-send').click(function () {
  $('.quiz').removeClass('block');
  $('.quiz-final').addClass('block');
  CurrentPage = 1;
})

$('.products-btwo__btn').click(function () {
  $('.popup-info').toggleClass('block');
  $('.quiz-mask').toggleClass('block');
  $('body').toggleClass('scroll-hidden');
})

$('.quiz-mask').click(function () {
  $('.quiz').removeClass('block');
  $('.quiz-mask').removeClass('block');
  $('.quiz-final').removeClass('block');
  $('.quiz-form div').removeClass('block');
  $('body').removeClass('scroll-hidden');
  $('.popup').removeClass('block');
  $('.block-two').removeClass('block');
  $('.popup-info').removeClass('block');
})

$('.popup-close').click(function () {
  $('.quiz').removeClass('block');
  $('.quiz-mask').removeClass('block');
  $('.quiz-final').removeClass('block');
  $('.quiz-form div').removeClass('block');
  $('body').removeClass('scroll-hidden');
  $('.popup').removeClass('block');
  $('.block-two').removeClass('block');
  $('.popup-info').removeClass('block');
})


$(window).scroll(function(){
  if($(window).scrollTop()> 1000){
    $('.scroll-up').fadeIn(1)
  }else{
    $('.scroll-up').fadeOut(1)
  }
});



  $('.scroll-up').click(function () {
  $('html').animate({scrollTop: 0}, 1000);
});

$('.burger-btn').click(function () {
  $(this).toggleClass('active')
  $('.header__menu-wrapper').toggleClass('active')
  $('body').toggleClass('scroll-hidden')
});


var imgBlock = document.querySelector('.index-bfive__img');

if( imgBlock != null){
var imgBlockGetSize = window.getComputedStyle(imgBlock);
var  blockForAssign = document.querySelectorAll(".index-bfive__content");
for(var i=0; i < 3; i++ ){
  blockForAssign[i].style.height = imgBlockGetSize.getPropertyValue('height');
}
}
var screenSize = screen.width;

if(screenSize > 1024 && UseImgSize != null){

var UseImgAll = document.querySelectorAll('.use__img');
var UseImg = document.querySelector('.use__img');
var UseImgSize = window.getComputedStyle(UseImg);
UseImgSize = parseInt(UseImgSize.getPropertyValue('width'), 10);
var contentBlock = document.querySelectorAll(".use__content");

for(var i=0; i < 8; i++ ){
  contentBlock[i].style.width = (screenSize * 0.7) + "px";
}
for(var i=0; i < 8; i++ ){
  UseImgAll[i].style.width = (screenSize * 0.7) + "px";
}
}

})

const showModalWindow = () => {
  const productsSection = document.querySelector('.products-bfive');
  const useBone = document.querySelector('.use-bone');
  const useBtwo = document.querySelector('.use-btwo');
  const useBthree = document.querySelector('.use-bthree');
  const useBfour = document.querySelector('.use-bfour');
  const useBfive = document.querySelector('.use-bfive');
  const useBsix = document.querySelector('.use-bsix');
  const useBseven = document.querySelector('.use-bseven');
  const useBeight = document.querySelector('.use-beight');
  const useBnine = document.querySelector('.use-bnine');

  if (productsSection || useBone || useBtwo || useBthree || useBfour ||
    useBfive || useBsix || useBseven || useBeight || useBnine) {
    const modalOverlay = document.querySelector('.quiz-mask');
    const popupInfo = document.querySelector('.popup-info');
    const popupTable = document.querySelector('.popup-info__table');
    const tableItem = popupTable.querySelectorAll('tr>td');
    const allCards = document.querySelectorAll('.products-bfive__card-link');
    const popupLinks = document.querySelectorAll('.popup-info__link');
    const popupTitle = popupInfo.querySelector('.popup-info__title');
    const popupCharacteristicsText = popupInfo.querySelectorAll('.popup-info__text');
    const useSliderCards = document.querySelectorAll('.use__slider-card');

    const changeData = data => {
      popupTitle.textContent = data.title;
      popupCharacteristicsText[0].textContent = data.characteristics;
      popupCharacteristicsText[1].textContent = data.use;
      tableItem[1].textContent = data.severity;
      tableItem[3].textContent = data.density;
      tableItem[5].textContent = data.ptr;
      popupLinks[0].href = data.firstLink;
      popupLinks[1].href = data.firstLink;
    };

    fetch('./card-info.json')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        return (response.json());
      })
      .then(data => {
        allCards.forEach(item => {
          item.addEventListener('click', e => {
            e.preventDefault();
            const target = e.target;
            data.cards.forEach(elem => {
              if (item.dataset.id === elem.id) {
                changeData(elem)
                modalOverlay.classList.add('block');
                popupInfo.classList.add('block');
                document.body.classList.add('scroll-hidden');
              }
            });
          });
        });
        useSliderCards.forEach(item => {
          item.addEventListener('click', e => {
            // e.preventDefault();
            data.cards.forEach(elem => {
              if (item.dataset.id === elem.id) {
                changeData(elem)
                modalOverlay.classList.add('block');
                popupInfo.classList.add('block');
                document.body.classList.add('scroll-hidden');
              }
            });
          })
        });
      })
      .catch(error => console.error(error));
  }
};

showModalWindow();

const sendForm = () => {
  const contactForm = document.getElementById('contact-form');
  const quizForm = document.getElementById('quiz-form');
  const contactInputs = document.querySelectorAll('[type="text"]');
  const quizTextarea = document.querySelectorAll('textarea');
  const errorMessage = 'Что-то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  const statusMessage = document.createElement('div');
  const checkboxQuizRules = document.getElementById('quiz-rules');
  const formBtn = document.querySelectorAll('.ctc-us__btn');
  const quizBtnSend = document.querySelector('.quiz__btn-send');
  const validatePhoneError = document.createElement('span');
  const validateNameError = document.createElement('span');
  const quizValidatePhoneError = document.createElement('span');
  const quizValidateNameError = document.createElement('span');
  quizValidatePhoneError.classList.add('quiz__tel-error')
  quizValidateNameError.classList.add('quiz__fio-error')
  validatePhoneError.classList.add('tel-error');
  validateNameError.classList.add('fio-error');
  validatePhoneError.textContent = 'Формат: +7(999)-999-99-99';
  validateNameError.textContent = 'Не менее 2 символов кирилицы';
  quizValidatePhoneError.textContent = 'Формат: +7(999)-999-99-99';
  quizValidateNameError.textContent = `Не менее 2 символов кирилицы`;
  console.log(contactInputs[2]);

  quizBtnSend.disabled = true;
  quizBtnSend.style.filter = 'opacity(20%)';

  formBtn.forEach(item => {
    item.disabled = true;
    item.style.filter = 'opacity(20%)';
  });
  contactInputs.forEach(item => {
    item.style.filter = 'opacity(20%)';
    item.disabled = true;
  });

  statusMessage.style.marginTop = '20px';
  
  const postData = formData => fetch('./send.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formData,
    credentials: 'include'
  });

  let formData;

  const validateInputs = (selector, regPattern, errorMess) => {
    const regExp = regPattern.test(selector.value);
    if (regExp) {
      errorMess.remove();
      selector.style.boxShadow = '0px 5px 8px green';
      selector.classList.remove('error__value');
      formBtn.forEach(item => {
      item.disabled = false;
        item.style.filter = 'opacity(100%)';
      });
      quizBtnSend.disabled = false;
      quizBtnSend.style.filter = 'opacity(100%)';
    } else {
      selector.after(errorMess);
      selector.style.boxShadow = '0px 5px 8px rgba(222, 23, 44, 0.3)';
      selector.classList.add('error__value');
      formBtn.forEach(item => {
        item.disabled = true;
      });
      quizBtnSend.disabled = true;
    }
  };

  if (contactInputs[3].value === '') {
    quizBtnSend.disabled = true;
  }

  contactInputs.forEach(item => {
    item.addEventListener('input', e => {
      const currentTarget = e.currentTarget;
      if (currentTarget.matches('.validate-phone')) {
        validateInputs(currentTarget, /.7\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/, validatePhoneError);
      }
      if (currentTarget.matches('.quiz__validate-phone')) {
        validateInputs(currentTarget, /.7\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/, quizValidatePhoneError);
        if (contactInputs[2].value === '') {
          quizBtnSend.disabled = true;
          quizBtnSend.style.filter = 'opacity(20%)';
        }
      }
      if (currentTarget.matches('.validate-name')) {
        validateInputs(currentTarget, /^[а-яА-Я]{2,}$/, validateNameError)
      }
      if (currentTarget.matches('.quiz__validate-name')) {
        validateInputs(currentTarget, /^[а-яА-Я]{2,}$/, quizValidateNameError)
        if (contactInputs[3].value === '') {
          quizBtnSend.disabled = true;
          quizBtnSend.style.filter = 'opacity(20%)';
        }
      }
    });
  });

  document.addEventListener('change', e => {
    const target = e.target;
    if (target.matches('#rules')) {
      if (target.checked) {
        formBtn.forEach(item => {
          item.disabled = false;
          item.style.filter = 'opacity(100%)';
        });
        contactInputs.forEach(item => {
          item.disabled = false;
          item.style.filter = 'opacity(100%)';
        });
      } else {
        formBtn.forEach(item => {
          item.disabled = true;
          item.style.filter = 'opacity(20%)';
        });
        contactInputs.forEach(item => {
          item.disabled = true;
          item.style.filter = 'opacity(20%)';
        });
      }
    }
    if (target.matches('#quiz-rules')) {
      if (target.checked) {
        contactInputs.forEach(item => {
          item.disabled = false;
          item.style.filter = 'opacity(100%)';
        });
      } else {
        quizBtnSend.disabled = true;
        quizBtnSend.style.filter = 'opacity(20%)';
        contactInputs.forEach(item => {
          item.disabled = true;
          item.style.filter = 'opacity(20%)';
        });
      }
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      contactForm.append(statusMessage);
      statusMessage.textContent = loadMessage;
      formData = new FormData(contactForm);
      const body = {};
      for (const val of formData) {
        body[val[0]] = val[1];
      }
    

      postData(JSON.stringify(body))
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
          statusMessage.textContent = successMessage;
        })
        .catch(error => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        })
        .then(() => {
          contactInputs.forEach(item => {
            item.value = '';
            item.style.boxShadow = 'none'
          })
        })
    });
  }

  if (quizForm) {
    quizForm.addEventListener('submit', e => {
      e.preventDefault();
      quizForm.append(statusMessage);
      statusMessage.textContent = loadMessage;
      formData = new FormData(quizForm);
      const body = {};
      for (const val of formData) {
        body[val[0]] = val[1];
      }
    

    postData(JSON.stringify(body))
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Status network not 200');
        }
        statusMessage.textContent = successMessage;
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        console.error(error);
      })
      .then(() => {
        contactInputs.forEach(item => {
          item.value = '';
        })
        quizTextarea.forEach(item => {
          item.value = '';
        });
        setTimeout(() => {
          const quizFinal = document.querySelector('.quiz-final');
          const quizMask = document.querySelectorAll('.quiz-mask');
          const quizBsix = document.querySelector('.quiz-bsix');
          quizFinal.classList.remove('block');
          quizBsix.classList.remove('block');
          quizMask.forEach(item => {
            item.classList.remove('block');
          });
          document.body.classList.remove('scroll-hidden');
          statusMessage.remove();
          checkboxQuizRules.checked = false;
          quizBtnSend.disabled = true;
          quizBtnSend.style.filter = 'opacity(20%)';
          contactInputs.forEach(item => {
            item.style.border = 'none';
            item.disabled = true;
            item.style.filter = 'opacity(20%)';
          });
        }, 5000);
      })
    });
  }
};

sendForm();

const showMask = () => {
  let element = document.querySelectorAll('.phone');
  element.forEach(item => {
    let maskOptions = {
    mask: '+{7}(000)-000-00-00'
    };
    IMask(item, maskOptions);
  });

};

showMask();

const toggleCertificateImg = () => {
  const certificateImg = document.querySelectorAll('.index-bfour__img');
  const indexBfour = document.querySelector('.index-bfour');
  const modalImg = document.querySelector('.modal-img__wrapper');
  const quizMask = document.querySelector('.quiz-mask');

  if (indexBfour) {
    document.addEventListener('click', e => {
      const target = e.target;
      if (target.matches('.index-bfour__img-wrapper')) {
        modalImg.classList.add('block');
        quizMask.classList.add('block');
        document.body.classList.add('scroll-hidden');
      }
      if (target.matches('.modal-img') || target.matches('.quiz-mask')) {
        modalImg.classList.remove('block');
        quizMask.classList.remove('block');
        document.body.classList.remove('scroll-hidden');
      }
    });
  }
};

toggleCertificateImg();


