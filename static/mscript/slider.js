const slideImagesContainer = document.querySelector('.slideImages__container');
const slideImages = document.querySelectorAll('.slideImage');
const arrowLeft = document.querySelector('.left__arrow');
const arrowRight = document.querySelector('.right__arrow');
const paginationDots = document.querySelectorAll('.pagination__dot');

let currentIndex = 0;

function control(n) {
  currentIndex += n;
  showSlide(currentIndex);
}

function showSlide(index) {
  if (index < 0) {
    currentIndex = slideImages.length - 1;
  } else if (index >= slideImages.length) {
    currentIndex = 0;
  }

  slideImagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update pagination dots
  paginationDots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('pagination__current');
    } else {
      dot.classList.remove('pagination__current');
    }
  });
}

// Set automatic slide change every 3 seconds
let autoSlideInterval = setInterval(() => {
  control(1);
}, 4500);

// Pause automatic slide change when hovering over the slider
const sliderContainer = document.querySelector('.slider__container');
sliderContainer.addEventListener('mouseover', () => {
  clearInterval(autoSlideInterval);
});

// Resume automatic slide change when mouse leaves the slider
sliderContainer.addEventListener('mouseout', () => {
  autoSlideInterval = setInterval(() => {
    control(1);
  }, 4500);
});

// Handle click on arrow buttons
arrowLeft.addEventListener('click', () => {
  control(-1);
});

arrowRight.addEventListener('click', () => {
  control(+1);
});

// Handle click on pagination dots
paginationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});




// //swipe event for slider change
// let touchStartX = 0;
// let touchEndX = 0;

// sliderContainer.addEventListener('touchstart', (event) => {
//   touchStartX = event.touches[0].clientX;
// });

// sliderContainer.addEventListener('touchmove', (event) => {
//   touchEndX = event.touches[0].clientX;
// });

// sliderContainer.addEventListener('touchend', () => {
//   const touchDiff = touchEndX - touchStartX;
//   if (touchDiff > 0) {
//     control(-1); // swipe right, move to previous slide
//   } else if (touchDiff < 0) {
//     control(1); // swipe left, move to next slide
//   }
// });
