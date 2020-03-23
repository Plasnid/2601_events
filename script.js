function initPage(){
    //setting up the click events for the page
    setupButtonClicks();
}

function changeBackground(col){
    let body = document.querySelector("body");
    body.style.backgroundColor = col;
}

function btnClick(e){
    console.log("the button was clicked");
    console.log(e.target);
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
    let btn1 = document.querySelector("#controls>div:nth-child(1)");
    let btn2 = document.querySelector("#controls>div:nth-child(2)");
    let btn3 = document.querySelector("#controls>div:nth-child(3)");
    let buttons = [btn1, btn2, btn3]
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

//listen for the page load
document.addEventListener("DOMContentLoaded", loadingTime);