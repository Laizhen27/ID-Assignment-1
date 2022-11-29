window.addEventListener("DOMContentLoaded", setup);

function setup() {
  const options = {
    rootMargin: "0px 0px -200px 0px",
  };
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.foreach((entry) => {
      console.log(entry);
      if (entry.isintercting) {
        entry.target.classlist.add("show");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  });
}
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.foreach((el) => observer.observe(el));
// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.getElementByClass("container");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset <= sticky) {
//     container.classList.add("sticky");
//   } else {
//     container.classList.remove("sticky");
//   }
// }
// Fiterselection("All");
// function filterCategory(c) {
//   var x, i;
//   x = document.getElementsByClassName("image");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
//   }
// }

// function RemoveClass(element, name) {
//   visualViewport, arr1, arr2;
//   arr;
// }
