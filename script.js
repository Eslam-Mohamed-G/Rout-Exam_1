window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
    document.getElementById("navbar-example2").style.cssText = 
    "position: fixed; top:0; background-color:#fff;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);";
    for(i=1; i<=9; i++){
      document.getElementById(i).style.cssText =  "color: #000"
    }
  } else {
      document.getElementById("navbar-example2").style.cssText = "background-color:transparent;";
      if(document.body.offsetWidth < 870){
        document.getElementById("1").style.cssText =  "color: #fff"
        document.getElementById("2").style.cssText =  "color: #fff"
        for(i=3; i<=9; i++){
          document.getElementById(i).style.cssText =  "color: #000"
        }
      }else {
        for(i=1; i<=9; i++){
          document.getElementById(i).style.cssText =  "color: #fff"
        }
      } 
  }
}

// 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar-links") {
    x.className += " responsive";
  } else {
    x.className = "navbar-links";
  }
}







// animating number counters by bootstrap
// animating number counters by bootstrap
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");

}






