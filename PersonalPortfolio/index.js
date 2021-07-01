// aos init

AOS.init({
  offset: 125,
  duration: 600,
});

// VanillaTilt

VanillaTilt.init(document.querySelectorAll("section .content .titlit"), {
  max: 20,
  speed: 300,
  glare: true,
  "max-glare": 0.2,
});

// logomaker

const logomaker = document.getElementById("logomaker");

let text = "Designer";
let idx = 0;
let words = 0;
function letterMaker() {
  idx++;
  logomaker.innerText = text.slice(0, idx);
  if (idx > text.length) {
    idx = 0;
    text = changeText();
  }
}

function changeText() {
  const textes = [
    "Designer",
    "Developer",
    "Responsable",
    "Kindable",
    "Porfitable",
  ];
  words++;
  if (words >= textes.length) {
    words = 0;
  }
  return textes[words];
}

setInterval(() => {
  letterMaker();
}, 150);

// header sticky & toggle functionality

const header = document.querySelector("header");
const navigation = document.querySelector(".navigation");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

function togglerFunction() {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
  togglerFunction();
});

const anchors = document.querySelectorAll("header .navigation li a");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    togglerFunction();
  });
});

// view the project to the user 

function showUp(parent) {
  parent.children[1].children[0].classList.toggle('active')
}

const projects = document.querySelectorAll("#project");
const reader = document.querySelectorAll("#read");



projects.forEach(project => {
  project.addEventListener("click", (e) => {
    showUp(e.target.parentElement.parentElement);
  });

})


reader.forEach(read =>{
  read.addEventListener("click", (e) => {
    showUp(e.target.parentElement.parentElement);
  });
  
})
