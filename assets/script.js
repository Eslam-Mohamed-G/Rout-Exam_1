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
//  show-conetainr of section work
var img = document.querySelectorAll(".img-fluid");
var search = document.querySelectorAll(".fa-magnifying-glass-plus")
var show = document.querySelector(".show-container");
var imgShow = document.querySelector(".img-show")
var nextIcon = document.querySelector(".fa-angle-right");
var prevIcon = document.querySelector(".fa-angle-left")

var btnClose = document.querySelector(".btn-close")
var imgArry = [];
for(let i=0; i<img.length; i++){
    let src = img[i].getAttribute('src');
    imgArry.push(src)
}

// console.log(imgArry)
for(let i=0; i<search.length; i++){
    search[i].addEventListener('click', function(e){
        imgIndex = i;
        let imgSrc = imgArry[i]
        imgShow.setAttribute("src", imgSrc)
        show.classList.replace("d-none", "d-block")
        nextIcon.classList.remove("d-none");
        prevIcon.classList.remove("d-none");
        // console.log(imgArry[i])
        // console.log(i)
    });
}
function close(){
  show.classList.replace("d-block","d-none")
}
btnClose.addEventListener("click", close)

show.addEventListener("click", function(e){
  if(e.target ==show){
      close()
  }
})
imgIndex = 0;

function next(){
    imgIndex++;
    let imgSrc = imgArry[imgIndex]
    if(imgIndex <= imgArry.length-1){
      imgShow.setAttribute("src", imgSrc)
      prevIcon.classList.remove("d-none");
    }else {
      nextIcon.classList.add("d-none")
      imgIndex=imgArry.length-1;
    }
}

nextIcon.addEventListener("click", next)

function prev(){
    imgIndex--;
    let imgSrc = imgArry[imgIndex];
    if(imgIndex < 0){
      imgIndex = 0;
        prevIcon.classList.add("d-none");
    }else{
        imgShow.setAttribute("src", imgSrc);
        nextIcon.classList.remove("d-none");
    }
}
prevIcon.addEventListener("click", prev)
document.body.addEventListener("keydown", function(e){

  switch (e.code) {
      case "ArrowRight":
          next();
          break;
      case "ArrowLeft":
          prev();
          break;
      case "Escape":
          close();
          break;
  }
})





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







