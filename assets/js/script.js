$( document ).ready(function() {
  var w = window.innerWidth;

  if(w > 767){
      $('#menu-jk').scrollToFixed();
  }else{
     // $('#menu-jk').scrollToFixed();
  };



});


// ================================ Testimonial Start ========================

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

// ================================ Testimonial End ========================


// ================================ Hero Section Slider Start  ========================

const images = [
  'assets/images/onsite_class_1.jpeg',
  'assets/images/onsite_class_3.jpeg',
  'assets/images/onsite_class_4.jpeg',
  
];

const text = [
  "Enabling candidates from low-income communities to build sustainable livelihoods through freelancing",
  "A community-rooted, contextualized curriculum that enables students from all backgrounds to access quality tech education.",
  "Democratizing access to high-income careers in Tech & Design",
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

// ================================ Hero Section Slider End  ========================

// ================================ Charity Number Start  ========================

const numbers = document.querySelectorAll('.number h1');
      const speed = 100; // You can adjust the speed (higher number = slower)

      numbers.forEach(number => {
          const updateCount = () => {
              const target = +number.parentElement.getAttribute('data-target');
              const count = +number.innerText;

              // Calculate increment
              const increment = target / speed;

              // If count is less than target, increase the count
              if (count < target) {
                  number.innerText = Math.ceil(count + increment);
                  setTimeout(updateCount, 20);
              } else {
                  number.innerText = target;
              }
          };

          // Start the count update when the element is in view
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      updateCount();
                      observer.unobserve(number); // Stop observing once animation is triggered
                  }
              });
          }, { threshold: 0.6 });

          observer.observe(number);
      });

// ================================ Charity Number End  ========================


// ================================ Our-partners Section Start  ========================

var copy = document.querySelector(".our-partners-slide").cloneNode(true);
    document.querySelector(".our-partners").appendChild(copy);
    

// ================================ Our-partners Section Start  ========================



// footer script
document.addEventListener("DOMContentLoaded", () => {
  const anchitElement = document.querySelector('.developer.anchit');
  const trishaElement = document.querySelector('.developer.trisha');

  function handleMouseEnter() {
    if (trishaElement) {
      trishaElement.style.zIndex = '1';
    }
  }

  function handleMouseLeave() {
    if (trishaElement) {
      trishaElement.style.zIndex = '3';
    }
  }

  if (anchitElement) {
    anchitElement.addEventListener('mouseenter', handleMouseEnter);
    anchitElement.addEventListener('mouseleave', handleMouseLeave);
  }
});
 