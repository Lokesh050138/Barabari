$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    };



});


// testimonial start 

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,  
        autoplayHoverPause: true,  
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                nav: false
            }
        }
    });

  
    $('.testimonial').hover(
        function () {
            $('.owl-carousel').trigger('stop.owl.autoplay'); // Stop the carousel
        },
        function () {
            $('.owl-carousel').trigger('play.owl.autoplay'); // Resume the carousel
        }
    );
});

// testimonial end 


// hero section slider Start 

const images = [
    'assets/images/onsite_class_1.jpeg',
    'assets/images/onsite_class_3.jpeg',
    'assets/images/onsite_class_4.jpeg',
    
  ];

  const text = [
    "Creating Self Employment Opportunities For Low Income Families",
    "Making Remote Tech Opportunities Accessible To Marginalized Communities",
    "Supporting Underserved Schools To Setup Digital Literacy Courses",
  ];

  const imageTrack = document.getElementById('image-track');
  const slideCaption = document.getElementById('slide-caption');
  const sliderContainer = document.getElementById('slider-container');
  let currentIndex = 0;
  let transition = false;
  let autoSlideInterval;

  // Create dot container
  const dotContainer = document.createElement('div');
  dotContainer.classList.add('dot-container');
  document.querySelector('.slider-container').appendChild(dotContainer);

  // Function to dynamically push images into the carousel
  function loadImages() {
    // Add the last image before the first image (for smooth transition)
    const lastImageClone = document.createElement('img');
    lastImageClone.src = images[images.length - 1];
    lastImageClone.classList.add('slide-image');
    lastImageClone.alt = `Slide Image ${images.length}`;
    imageTrack.appendChild(lastImageClone);

    // Dynamically add each image
    images.forEach((imageSrc, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = imageSrc;
      imgElement.classList.add('slide-image');
      imgElement.alt = `Slide Image ${index + 1}`;
      imageTrack.appendChild(imgElement);

      // Create and append a dot for each image
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotContainer.appendChild(dot);

      // Add click event for each dot to jump to the respective image
      dot.addEventListener('click', () => {
        if (!transition) {
          currentIndex = index + 1;
          updateSlider();
        }
      });
    });

    // Add the first image after the last image (for smooth transition)
    const firstImageClone = document.createElement('img');
    firstImageClone.src = images[0];
    firstImageClone.classList.add('slide-image');
    firstImageClone.alt = `Slide Image 1`;
    imageTrack.appendChild(firstImageClone);

    updateDots();
    updateCaption();
  }

  function handleNext() {
    if (transition) return;
    transition = true;
    currentIndex = (currentIndex + 1) % (images.length + 2);
    updateSlider();
  }

  function handlePrev() {
    if (transition) return;
    transition = true;
    currentIndex = (currentIndex - 1 + (images.length + 2)) % (images.length + 2);
    updateSlider();
  }

  function updateSlider() {
    imageTrack.style.transition = 'transform 1s ease-in-out';
    imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    imageTrack.addEventListener('transitionend', handleTransitionEnd, { once: true });
    updateDots();
    updateCaption();
  }

  function handleTransitionEnd() {
    if (currentIndex === 0) {
      imageTrack.style.transition = 'none';
      currentIndex = images.length;
      imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === images.length + 1) {
      imageTrack.style.transition = 'none';
      currentIndex = 1;
      imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    transition = false;
  }

  // Function to update the active dot
  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    const activeIndex = (currentIndex === 0) ? images.length - 1 : (currentIndex === images.length + 1) ? 0 : currentIndex - 1;
    dots[activeIndex].classList.add('active');
  }

  // Function to update the slider caption
  function updateCaption() {
    const textIndex = (currentIndex === 0) ? images.length - 1 : (currentIndex === images.length + 1) ? 0 : currentIndex - 1;
    slideCaption.innerHTML = text[textIndex];
  }

  // Auto slide every 5 seconds
  function startAutoSlide() {
    autoSlideInterval = setInterval(handleNext, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Attach hover events to pause and resume auto slide
  sliderContainer.addEventListener('mouseover', stopAutoSlide);
  sliderContainer.addEventListener('mouseout', startAutoSlide);

  loadImages();
  startAutoSlide();

// hero section slider End 


// $( document ).ready(function() {

//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:0,
//         nav:true,
//         autoplay: true,
//         dots: true,
//         autoplayTimeout: 5000,
//         navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:1
//             },
//             1000:{
//                 items:1
//             }
//         }
//     })
// });

// hero section slider End 


// ********** Charity Number Start

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');

    function updateNumber(element, target) {
        const increment = target / 200; 
        let current = 0;

        function update() {
            current += increment;
            if (current >= target) {
                element.innerText = target;
            } else {
                element.innerText = Math.floor(current);
                requestAnimationFrame(update);
            }
        }

        update();
    }

    function onScroll() {
        const windowHeight = window.innerHeight;
        numbers.forEach(number => {
            const rect = number.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom >= 0) {
                const target = +number.getAttribute('data-target');
                updateNumber(number.querySelector('h1'), target);
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); 
});

// ********** Charity Number End