function hangburger() {
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
    var section = document.querySelectorAll(".scrolling");
    // querySelectorAll returns all the element of .scrolling
    var sections = {};
    //{}=> object
    var i = 0;

    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    }); // it calls all the element and set it with top index as pixels

    window.onscroll = function() {
      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      // || executes when any one is true or both
      //The document.documentElement property gives you the html element,
      //while the document.body property gives you the body element.

      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector(".active").setAttribute("class", " ");
          //querrySelector gets the 1st element that matches .active
          //it affects class and changes value(name,value). " " => empty string (any value)
          document
            .querySelector("a[href*=" + i + "]")
            .setAttribute("class", "active");
          //a[href*=#] means the querySelector is looking for all elements containing a #,
          // and in your case 'a[href*=' + i + ']' is further specifying elements that has the current href of i.
        }
      }
    };
  }
}
