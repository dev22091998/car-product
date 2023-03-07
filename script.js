
const swiper = new Swiper('.swiper', {
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  const mainImgs = document.getElementsByClassName('swiper')
      let sliderImgs = document.getElementsByClassName('choices')

      for (var i=0; i < sliderImgs.length; i++){

        sliderImgs[i].addEventListener('click', function(){
            for(let id=0; id<sliderImgs.length; id++){
                sliderImgs[id].classList.remove('active');
                this.classList.add('active')
            }
                  // console.log(this.getAttribute('data-path')) 
                  for(let index=0; index<mainImgs.length; index++){
                      if(mainImgs[index].getAttribute('data-path') !== this.getAttribute('data-path')){
                          mainImgs[index].classList.add('d-none')
                  } else {
                      mainImgs[index].classList.remove('d-none')
                  }
                  } 
        })
      }
      