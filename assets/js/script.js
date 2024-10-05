$( document ).ready(function() {
  var w = window.innerWidth;

  if(w > 767){
      $('#menu-jk').scrollToFixed();
  }else{
     // $('#menu-jk').scrollToFixed();
  };



});


// ================================ Mission Section Start ========================

// Scroll-Triggered Animation Function for One-Time Animation
function animateOnScroll() {
  var mvText = document.querySelector('.mv-text');
  var mvImg = document.querySelector('.mv-img');
  var rect = mvText.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0 && !mvText.classList.contains('show')) {
      mvText.classList.add('show');
      mvImg.classList.add('show');
  }
}

// Listen for the scroll event and trigger the animation
window.addEventListener('scroll', animateOnScroll);

const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Automatically switch slides every 3 seconds
setInterval(() => showSlide(currentSlide + 1), 3000);
showSlide(currentSlide);
// ================================ Mission Section End ========================




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
  "Enabling marginalized youth to build sustainable income through freelancing",
  "Community-rooted Tech & Design vocational programs",
  "Democratizing ownership of the digital economy",
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

// Clone the slider content to create an infinite loop effect
var copy = document.querySelector(".our-partners-slide").cloneNode(true);
document.querySelector(".our-partners").appendChild(copy);
    
    

// ================================ Our-partners Section Start  ========================


// ================================ flow animation Section Start  ========================

window.addEventListener('scroll', () => {
  const section = document.getElementById('image-section');
  const { top } = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Check if the section is in the viewport
  if (top < windowHeight && top >= 0) {
      section.classList.add('active');
  }
});

// ================================ flow animation Section End  ========================


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
 

// map Start 

FusionCharts.ready(function() {
  var demoMap = new FusionCharts({
      type: "maps/india",
      renderAt: "indian-map",
      height: "650",
      width: "100%",
      dataFormat: "json",
      dataSource: {
          "chart": {
              "subCaption": "Barabari Collective 2024",
              "captionFontSize": "35",
              "captionFontBold": "0",
              "subCaptionFontSize": "18",
              "subCaptionFontBold": "5",
              "subCaptionPadding": "20",
              "canvasPadding": "30",
              "showBorder": "0",
              "showCanvasBorder": "0",
              "legendBorderAlpha": "0",
              "showLegend": "0",
              "toolTipPadding": "10",
              "toolTipColor": "#FFFFFF",
              "toolTipBgColor": "#000000",
              "toolTipBgAlpha": "70",
              "toolTipBorderThickness": "1",
              "tooltipBorderRadius": "3",
              "toolTipBorderColor": "#FFFFFF",
              "toolTipBorderAlpha": "80",
              "showToolTipShadow": "0",
              "baseFont": "Lato",
              "showLabels": "0"  // States names hidden
          },
          
          "data": [
              { "id": "015", "color": "#4165a5" },
              { "id": "014", "color": "#4165a5" },
              { "id": "028", "color": "#4165a5" },
              { "id": "006", "color": "#4165a5" },
              { "id": "034", "color": "#4165a5" },
              { "id": "013", "color": "#4165a5" },
              { "id": "010", "color": "#4949bf" },
              { "id": "029", "color": "#4165a5" },
              { "id": "033", "color": "#373799" },
              { "id": "005", "color": "#4165a5" },
              { "id": "030", "color": "#4165a5" },
              { "id": "003", "color": "#4165a5" },
              { "id": "025", "color": "#4165a5" },
              { "id": "022", "color": "#4165a5" },
              { "id": "024", "color": "#4165a5" },
              { "id": "032", "color": "#4165a5" },
              { "id": "023", "color": "#4165a5" },
              { "id": "004", "color": "#4165a5" },
              { "id": "035", "color": "#4165a5" },
              { "id": "016", "color": "#4165a5" },
              { "id": "026", "color": "#4165a5" },
              { "id": "007", "color": "#4165a5" },
              { "id": "020", "color": "#4165a5" },
              { "id": "012", "color": "#4165a5" },
              { "id": "009", "color": "#4165a5" },
              { "id": "008", "color": "#4165a5" },
              { "id": "021", "color": "#373799" }, // Maharashtra
              { "id": "002", "color": "#4165a5" },
              { "id": "017", "color": "#4165a5" },
              { "id": "011", "color": "#4165a5" },
              { "id": "019", "color": "#4165a5" },
              { "id": "018", "color": "#4165a5" },
              { "id": "031", "color": "#4165a5" },
              { "id": "027", "color": "#4165a5" },
              { "id": "037", "color": "#4165a5" }, // Jammu & Kashmir (Correct ID)
              { "id": "036", "color": "#4949bf" }
          ]
      },
      "events": {
          "entityRollover": function(evtObj, dataObj) {
              evtObj.sender.configureLink([{ "id": dataObj.id, "color": "#FFFF00", "alpha": "70" }], 0);  // Yellow color on hover
          },
          "entityRollout": function(evtObj, dataObj) {
              evtObj.sender.configureLink([{ "id": dataObj.id, "color": "#4165a5", "alpha": "100" }], 0);  // Original color after hover
          }
      }
  }).render();	
});

// map End 