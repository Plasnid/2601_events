function initPage(){
    //setting up the click events for the page
    setupButtonClicks();
}

function changeBackground(col){
    let body = document.querySelector("body");
    body.style.backgroundColor = col;
}
function fontClick(e){
    console.log(e.target.dataset.font);
    let myTitle = document.querySelector("h1");
    myTitle.style.fontFamily = e.target.dataset.font;
}
function sizeClick(e){
    console.log(e.target.dataset.size);
    let myTitle = document.querySelector("h1");
    myTitle.style.fontSize = e.target.dataset.size;
}

function btnClick(e){
    console.log("the button was clicked");
    console.log(e.target);
    console.log(e);
    changeBackground(e.target.dataset.colour);
}

function enterAction(e){
    console.log(e.target);
    console.log("entering the click area");
    e.target.style.border="2px solid black";
}

function leaveAction(e){
    console.log(e.target);
    console.log("leaving the click area");
    e.target.style.border="none";
}

function setupButtonClicks(){
    console.log("button clicks setup");
    let btn1 = document.querySelector("#colour_controls>:nth-child(2)");
    let btn2 = document.querySelector("#colour_controls>:nth-child(3)");
    let btn3 = document.querySelector("#colour_controls>:nth-child(4)");
    let btn4 = document.querySelector("#colour_controls>:nth-child(5)");
    let btn5 = document.querySelector("#colour_controls>:nth-child(6)");
    let btn6 = document.querySelector("#colour_controls>:nth-child(7)");

    let font1 = document.querySelector("#font_controls>:nth-child(2)");
    let font2 = document.querySelector("#font_controls>:nth-child(3)");

    let size1 = document.querySelector("#size_controls>:nth-child(2)");
    let size2 = document.querySelector("#size_controls>:nth-child(3)");
    console.log(size1);
    console.log(size2);
    let buttons = [btn1, btn2, btn3,btn4,btn5,btn6];
    let fonties = [font1, font2];
    let sizeBtns = [size1, size2];
    for(let i=0;i<fonties.length;i++){
        fonties[i].addEventListener("click", fontClick);
    }
    for(let i=0;i<sizeBtns.length;i++){
        sizeBtns[i].addEventListener("click", sizeClick);
    }
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click", btnClick);
        buttons[i].addEventListener("mouseenter",enterAction);
        buttons[i].addEventListener("mouseleave", leaveAction);
    }
    
}

//function that runs when the page has loaded
function loadingTime(e){
    console.log("the page has loaded!");
    initPage();
}

// *listen for the page load
document.addEventListener("DOMContentLoaded", loadingTime);