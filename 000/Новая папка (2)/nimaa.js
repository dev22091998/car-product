

      /// 360° view car
      $(document).ready(function(){

        var $threeSixty = $('.threesixty');

        $threeSixty.threeSixty({
        dragDirection: 'horizontal',
        useKeys: true,
        draggable: true
        });
      });

      /// Change main car
      const mainImgs = document.getElementsByClassName('threesixty')
      let sliderImgs = document.getElementsByClassName('choices')

      for (var i=0; i < sliderImgs.length; i++){

        sliderImgs[i].addEventListener('click', function(){
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

      
    ///chouse parts
    var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 6,
            spaceBetween: 10
        },
        // when window width is >= 640px
        1400: {
            slidesPerView: 7,
            spaceBetween: 10
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
    },
});



//function for getting car current position
function getCarPosition() {
    var fileLink = img.src;

    var fileName = fileLink.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
    carPosition = parseInt(fileName);

    return carPosition;
}
//end function


// kartalarni toggle va diselect qilish ishladi faqat Jquery
$('.swiper-slide.choices').click(function() {

    if (!$(this).hasClass("isSelected")) {

        $('.isSelected').removeClass('isSelected');
        $(this).addClass('isSelected');

        // rotate(this);

    } 

    // console.log("PNG is : "+findCorrectpart());

});


function onOrientationChange() {

    var landscape = screen.width > screen.height;
    var viewportmeta = document.querySelector('meta[name="viewport"]');

    if (landscape) {

        viewportmeta.content = "width=device-width, initial-scale=1.0";

    } else {

        viewportmeta.content = "width=device-width, initial-scale=0.5";

    }

}

window.addEventListener('orientationchange', onOrientationChange);
onOrientationChange();



function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}
