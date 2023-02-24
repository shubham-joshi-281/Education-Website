function one() {
  document.getElementById("one").style.display = "flex";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
}
function two() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "flex";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
}
function three() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "flex";
  document.getElementById("four").style.display = "none";
}
function four() {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "flex";
}
//Hemburger Menu 
function show() {
  document.getElementById('menu').classList.toggle('change')
  document.getElementById('nav').classList.toggle('change')
}

function Top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}