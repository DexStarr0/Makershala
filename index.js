window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("scroll-ani", window.scrollY > 0);
});

var navlink = document.querySelector(".nav-link");
// menu
var count = 1;
var screenwid = window.innerWidth;
console.log(screenwid);

function Menu() {
  if (screenwid <= 700) {
    if (count == 1) {
      navlink.style.top = "0";
      count = 0;
    } else {
      navlink.style.top = "-500px";
      count = 1;
    }
  }
}

for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".cont-show")[i].addEventListener("click", () => {
    alert(
      "Sorry Sir,Due to lack of time i could not add this feature.sorry for that sir.thank you"
    );
  });
}
