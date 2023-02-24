//Hemburger Menu
const changeMenu = document.getElementById("menu");
const changeNav = document.getElementById("nav");
function show() {
    changeMenu.classList.toggle("change");
    changeNav.classList.toggle("change");
}

// Trend box js for Next slide
const trendBox1nxt = document.getElementById("box1");
const trendBox2nxt = document.getElementById("box2");
function nxt() {
    trendBox1nxt.style.display = "none";
    trendBox2nxt.style.display = "flex";
}
// Trend box js for Previous slide
const trendBox1prev = document.getElementById("box2");
const trendBox2prev = document.getElementById("box1");
function prev() {
    trendBox1prev.style.display = "none";
    trendBox2prev.style.display = "flex";
}

//  Student Testinomial Home page Js
// Student Testinomial for Next slide
const studentTestinomialBox1nxt = document.getElementById("box3");
const studentTestinomialBox2nxt = document.getElementById("box4");
function stnxt() {
    studentTestinomialBox1nxt.style.display = "none";
    studentTestinomialBox2nxt.style.display = "flex";
}
// Student Testinomial for Previous slide
const studentTestinomialBox1prev = document.getElementById("box3");
const studentTestinomialBox2prev = document.getElementById("box4");
function stprev() {
    studentTestinomialBox1prev.style.display = "flex";
    studentTestinomialBox2prev.style.display = "none";
}

//  FQA In Home Page Js
function hidepara() {
    const para = document.querySelectorAll(".answer");
    for (i = 0; i < para.length; i++) {
        para[i].style.display = "none";
    }
}
function showpara(curele) {
    const ans = curele.nextElementSibling.style.display;
    if (ans == "none") {
        curele.nextElementSibling.style.display = "block";
    } else {
        curele.nextElementSibling.style.display = "none";
    }
}

// Sucess Ratio Home Page
const countNumber1 = 0;
const countNumber2 = 0;
const countNumber3 = 0;
const countNumber4 = 0;
const count1 = document.getElementById("counter1").innerHTML;
const count2 = document.getElementById("counter2").innerHTML;
const count3 = document.getElementById("counter3").innerHTML;
const count4 = document.getElementById("counter4").innerHTML;
document.querySelectorAll(".count").forEach((ele) => {
    if (ele.id == "counter1") {
        const set1 = setInterval(test1);
        function test1() {
            ele.innerHTML = ++countNumber1 + "+";
            if (countNumber1 == count1) clearInterval(set1);
        }
    }
    if (ele.id == "counter2") {
        const set2 = setInterval(test2);
        function test2() {
            ele.innerHTML = ++countNumber2 + "+";
            if (countNumber2 == count2) clearInterval(set2);
        }
    }

    if (ele.id == "counter3") {
        const set3 = setInterval(test3);
        function test3() {
            ele.innerHTML = ++countNumber3 + "+";
            if (countNumber3 == count3) clearInterval(set3);
        }
    }
    if (ele.id == "counter4") {
        const set4 = setInterval(test4);
        function test4() {
            ele.innerHTML = ++countNumber4 + "+";
            if (countNumber4 == count4) clearInterval(set4);
        }
    }
});