// Successful alert pop up.
let btn = document.querySelector(".btn4");
console.log(btn);

btn.addEventListener("click", function () {
  window.alert("Coming Soon!🎉");
});

// Making the contact button responsive

let contactBtn = document.querySelector(".contact-us-btn");
console.log(contactBtn);

contactBtn.addEventListener("click", function () {
  const userName = prompt(`Hi! What should we call you?`);
  const userEmail = prompt(`Hey, ${userName}!👋 what's your email address?`);
  alert(`Amazing, ${userName}! We will contact you via ${userEmail} 💕`);
});

// Making the Carousel work

const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100%

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
