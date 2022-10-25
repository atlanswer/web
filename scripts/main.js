"use strict";

const filled_favorite = "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/favorite/fill1/48px.svg";
const outlined_favorite = "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg";

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const imgSrc = myImage.getAttribute("src");
    if (imgSrc === filled_favorite) {
        myImage.setAttribute("src", outlined_favorite);
    } else {
        myImage.setAttribute("src", filled_favorite);
    }
}
