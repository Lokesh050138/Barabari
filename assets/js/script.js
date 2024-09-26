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

// Clone the slider content to create an infinite loop effect
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
 

// map Start 

FusionCharts.ready(function () {
  var stateNameBox = document.getElementById('state-name');
  var stateValueBox = document.getElementById('state-value');
  var mapContainer = document.getElementById('indian-map'); // Reference to map container

  var demoMap = new FusionCharts({
      type: "maps/india",
      renderAt: "indian-map",
      height: "650",
      width: "100%",
      dataFormat: "json",
      dataSource: {
          "chart": {
              "subCaption": "Barabari Collective 2024",
              "captionFontSize": "25",
              "captionFontBold": "0",
              "subCaptionFontSize": "20",
              "subCaptionFontBold": "10",
              "canvasPadding": "30",
              "showBorder": "0",
              "showCanvasBorder": "0",
              "legendBorderAlpha": "0",
              "showLegend": "0",
              "baseFont": "Lato",
              "showHoverEffect": "1",  // Enable hover effect
              "showToolTip": "0"        // Disable tooltip
          },

          "colorrange": {
              "minvalue": "300",
              "startlabel": "Low",
              "endlabel": "High",
              "code": "#efedf5",
              "gradient": "1",
              "color": [{
                  "maxvalue": "220000",
                  "displayvalue": "Avg.",
                  "code": "#bcbddc"
              }, {
                  "maxvalue": "1400000",
                  "code": "#756bb1"
              }]
          },

          "data": [
              { "id": "015", "value": "58438", "toolText": "Punjab: 58438" },
              { "id": "014", "value": "41344", "toolText": "Chandigarh: 41344" },
              { "id": "028", "value": "292124", "toolText": "Telangana: 292124" },
              { "id": "006", "value": "44191", "toolText": "Haryana: 44191" },
              { "id": "034", "value": "63906", "toolText": "Bihar: 63906" },
              { "id": "013", "value": "250052", "toolText": "Uttarakhand: 250052" },
              { "id": "010", "value": "587935", "toolText": "Uttar Pradesh: 587935" },
              { "id": "029", "value": "226463", "toolText": "Karnataka: 226463" },
              { "id": "033", "value": "625561", "toolText": "West Bengal: 625561" },
              { "id": "005", "value": "170466", "toolText": "Himachal Pradesh: 170466" },
              { "id": "030", "value": "4228", "toolText": "Goa: 4228" },
              { "id": "003", "value": "5232", "toolText": "Ladakh: 5232" },
              { "id": "025", "value": "6799", "toolText": "Dadra and Nagar Haveli and Daman and Diu: 6799" },
              { "id": "022", "value": "10650", "toolText": "Lakshadweep: 10650" },
              { "id": "024", "value": "5527", "toolText": "Nagaland: 5527" },
              { "id": "032", "value": "8428", "toolText": "Tripura: 8428" },
              { "id": "023", "value": "8074", "toolText": "Manipur: 8074" },
              { "id": "004", "value": "101877", "toolText": "Jammu and Kashmir: 101877" },
              { "id": "035", "value": "441481", "toolText": "Chhattisgarh: 441481" },
              { "id": "016", "value": "92724", "toolText": "Jharkhand: 92724" },
              { "id": "026", "value": "135255", "toolText": "Maharashtra: 135255" },
              { "id": "007", "value": "67474", "toolText": "Delhi: 67474" },
              { "id": "020", "value": "209546", "toolText": "Kerala: 209546" },
              { "id": "012", "value": "377633", "toolText": "Tamil Nadu: 377633" },
              { "id": "009", "value": "1691", "toolText": "Sikkim: 1691" },
              { "id": "008", "value": "2046", "toolText": "Meghalaya: 2046" },
              { "id": "021", "value": "1382174", "toolText": "Rajasthan: 1382174" },
              { "id": "002", "value": "546638", "toolText": "Gujarat: 546638" },
              { "id": "017", "value": "632636", "toolText": "Madhya Pradesh: 632636" },
              { "id": "011", "value": "40997", "toolText": "Assam: 40997" },
              { "id": "019", "value": "332", "toolText": "Mizoram: 332" },
              { "id": "018", "value": "486131", "toolText": "Andhra Pradesh: 486131" },
              { "id": "031", "value": "776706", "toolText": "Odisha: 776706" },
              { "id": "027", "value": "18077", "toolText": "Puducherry: 18077" },
              { "id": "001", "value": "3268", "toolText": "Andaman and Nicobar Islands: 3268" },
              { "id": "036", "value": "546638", "toolText": "Gujarat: 546638" }
          ]
      },

      events: {
          'entityRollover': function (evt, data) {
              stateNameBox.innerHTML = data.shortLabel; // Update the state name
              stateValueBox.innerHTML = data.value; // Update the population value
              mapContainer.style.cursor = 'pointer'; // Change cursor to pointer on hover
          },
          'entityRollout': function (evt, data) {
              mapContainer.style.cursor = 'default'; // Reset cursor when not hovering
          }
      }
  }).render();
});

// map End 