$(document).on('scroll',function(){
  $('h2').css("left",Math.max(500 - 0.35* window.scrollY)+"px")
}

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
