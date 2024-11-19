
const shareBtn = document.querySelectorAll("#share-id");
const shareDiv = document.getElementById("share-icons");
const pointer = document.getElementById("pointer");


let pageWidth = document.documentElement.clientWidth;

const shareButtonClick = (event) => {
    if (shareDiv.style.display === "flex") {
        shareDiv.style.display = "none";
        
    } else {
        shareDiv.style.display = "flex";
        shareDiv.style.position = "relative";
        shareDiv.style.top = (-2) + "rem";
        shareDiv.style.left = (-1.8) + "rem";

        if (pageWidth >= 600 || window.innerWidth >= 600) {
            shareDiv.style.position = "absolute";
            shareDiv.style.top = (event.pageY - 90) + "px";
            shareDiv.style.left = (event.pageX - 150) + "px";
        }
        
        
        console.log(window.innerWidth , document.documentElement.clientHeight )
    }
}

shareBtn.forEach(e => e.addEventListener("click", shareButtonClick));

