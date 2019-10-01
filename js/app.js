function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches(".menubar_menu-button")) {
    var dropdowns = document.getElementsByClassName("menubar__dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Add active class to the current button (highlight it)
function activeFunc() {
  var header = document.getElementById("myDropdown");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

//on scroll active
function myFn() {
  {
    console.log(1);
    var section = document.querySelectorAll(".scrolling");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector(".active").setAttribute("class", " ");
          document
            .querySelector("a[href*=" + i + "]")
            .setAttribute("class", "active");
        }
      }
    };
  }
}

//on scroll active change it

/*function myFn() {
  var header = document.getElementById("scrollme");
  var btns = header.getElementsByClassName("scrolling");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseover", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}*/

/*var a = document.getElementById("myDropdown");
var b = a.getElementsByClassName("btn");

for (var i = 0; i < b.length; i++) {
  b[i] = document.getElementsByClassName("btn");
  this.className += " active";
}
var a = document.getElementById("myDropdown");
var b = a.getElementsByClassName("btn");
for (var i = 0; i < b.length; i++) {
  b.className += " active";*/
