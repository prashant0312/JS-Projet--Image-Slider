
const nextEle = document.querySelector(".next");
const prevEle = document.querySelector(".prev");
const imageContainerEle = document.querySelector(".image-container");
const imgsEle = document.querySelectorAll("img");


let currentImage = 1;

let timeOut;

nextEle.addEventListener("click",() => {
    currentImage++;
    clearTimeout(timeOut);
    updateImg();     
});

prevEle.addEventListener("click",() => {
    currentImage--;
    clearTimeout(timeOut);
    updateImg();     
});

function updateImg(){
    if(currentImage > imgsEle.length){
        currentImage = 1;
    }else if(currentImage < 1){
        currentImage = imgsEle.length;
    }
    imageContainerEle.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;

    timeOut = setTimeout(() => {
        currentImage++;
        updateImg(); 
    },3000);
}
updateImg();