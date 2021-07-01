AOS.init({
  offset: 100,
  duration: 600,
});


window.addEventListener('load' , fadeUp)

function fadeUp(){
  AOS.init()
}

// Sticky The Header


setTimeout(() => {
  const loader = document.querySelector('.loader').remove()
  document.body.classList.remove('active')
}, 2000);

const header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Navigation Toggle Btn
const toggle = document.querySelector(".toggle");

const toggleFunction = () => {
  toggle.classList.toggle("active");
};
toggle.addEventListener("click", toggleFunction);

// filteration menues item

const buttons = document.querySelectorAll(".menu .content .menu-nav button");
const items = document.querySelectorAll(".items .item");

function itemClassesShow() {
  items.forEach((item) => {
    item.classList.remove("none");
  });
}

function filteration(button) {
  if (button.classList.contains("lunch")) {
    itemClassesShow();
    // nothing
  } else if (button.classList.contains("dinner")) {
    itemClassesShow();
    items.forEach((item, idx) => {
      if (idx % 2 == 0) {
        item.classList.add("none");
      }
    });
  } else if (button.classList.contains("drink")) {
    itemClassesShow();
    items.forEach((item, idx) => {
      if (idx % 2 != 0) {
        item.classList.add("none");
      }
    });
  } else {
    itemClassesShow();
    items.forEach((item, idx) => {
      if (idx % 3 == 0) {
        item.classList.add("none");
      }
    });
  }
}

function buttonClassesRemove() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttonClassesRemove();
    button.classList.add("active");
    filteration(e.target);
  });
});




