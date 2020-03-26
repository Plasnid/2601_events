function initPage(){
    // * setting up the click events for the page
    setupButtonClicks();
}

// *using query selector to grab the body and change the background colour to the col value
function changeBackground(col){
    let body = document.querySelector("body");
    body.style.backgroundColor = col;
}
// *using query selector to grab the h1, and set the font family to the data-tag in the html button
function fontClick(e){
    console.log(e.target.dataset.font);
    let myTitle = document.querySelector("h1");
    myTitle.style.fontFamily = e.target.dataset.font;
}
// *using query selector to grab the h1, and set the font size to the value in the html button
function sizeClick(e){
    console.log(e.target.dataset.size);
    let myTitle = document.querySelector("h1");
    myTitle.style.fontSize = e.target.dataset.size;
}

// *the button click accepts an event, which is an object that contans target(what was clicked)
function btnClick(e){
    console.log("the button was clicked");
    console.log(e.target);
    console.log(e);
    // *here we send the colour value(called data-colour in the html) to the function changeBackground
    changeBackground(e.target.dataset.colour);
}

// *when we enter a square with our mouse, we will put a black background on it! 
function enterAction(e){
    console.log(e.target);
    console.log("entering the click area");
    e.target.style.border="2px solid black";
}

// * when we leave a square, we can take the back background away!
function leaveAction(e){
    console.log(e.target);
    console.log("leaving the click area");
    e.target.style.border="none";
}

// *this function identifies buttons, and gives them listeners
function setupButtonClicks(){
    console.log("button clicks setup");
    // *first we get all the direct children of colour controls numbered 2 to 7... we ignore the title
    let btn1 = document.querySelector("#colour_controls>:nth-child(2)");
    let btn2 = document.querySelector("#colour_controls>:nth-child(3)");
    let btn3 = document.querySelector("#colour_controls>:nth-child(4)");
    let btn4 = document.querySelector("#colour_controls>:nth-child(5)");
    let btn5 = document.querySelector("#colour_controls>:nth-child(6)");
    let btn6 = document.querySelector("#colour_controls>:nth-child(7)");

    // *next we do the same with the font controls
    let font1 = document.querySelector("#font_controls>:nth-child(2)");
    let font2 = document.querySelector("#font_controls>:nth-child(3)");

    // *finally we do the same with the font size controls
    let size1 = document.querySelector("#size_controls>:nth-child(2)");
    let size2 = document.querySelector("#size_controls>:nth-child(3)");
    console.log(size1);
    console.log(size2);

    // *we put the values into arrays!
    let coloursBtns = [btn1, btn2, btn3,btn4,btn5,btn6];
    let fontsBtns = [font1, font2];
    let sizeBtns = [size1, size2];

    /*
        * these 3 loops add click, mouseenter, and mouseleave functions
        * btnClick, fontClick, and sizeClick happen as the click actions for certain buttons
        * enterAction and leaveAction functions get used for all buttons
        * how could we make this simpler and more reusable?
    */
    for(let i=0;i<coloursBtns.length;i++){
        // * notice the structure here htmlElement.addEventListener(whatToListenTo, functionToCall)
        coloursBtns[i].addEventListener("click", btnClick);
        coloursBtns[i].addEventListener("mouseenter",enterAction);
        coloursBtns[i].addEventListener("mouseleave", leaveAction);
    }
    for(let i=0;i<fontsBtns.length;i++){
        fontsBtns[i].addEventListener("click", fontClick);
        fontsBtns[i].addEventListener("mouseenter",enterAction);
        fontsBtns[i].addEventListener("mouseleave", leaveAction);
    }
    for(let i=0;i<sizeBtns.length;i++){
        sizeBtns[i].addEventListener("click", sizeClick);
        sizeBtns[i].addEventListener("mouseenter",enterAction);
        sizeBtns[i].addEventListener("mouseleave", leaveAction);
    }
}

// *function that runs when the page has loaded
function loadingTime(e){
    console.log("the page has loaded!");
    initPage();
}

// *listen for the page load
document.addEventListener("DOMContentLoaded", loadingTime);