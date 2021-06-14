//find elements
var prevBtn = document.getElementById("prev-image");
var nextBtn = document.getElementById("next-image");
var slideImage = document.getElementById("slide-image");

//subscribe to ivents
prevBtn.addEventListener('click', onShowPrevBtnClick);
nextBtn.addEventListener('click', onShowNextBtnClick);


//create array with images
var imagesSrcs = [];
imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/mt-robson-glacier-with-flowers-in-the-foreground-1024x768.jpeg');
imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/kinney-lake-in-mt-robson-provincial-park-1024x767.jpeg');
imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/misty-morning-looking-down-on-whitehorn-1024x768.jpeg');
imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/berg-lake-trail-1024x768.jpeg');

var currentImageIndex = Math.floor(Math.random()*imagesSrcs.length);
slideImage.src = imagesSrcs[currentImageIndex];

//functions defenitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    if (currentImageIndex<0){
        currentImageIndex = imagesSrcs.length - 1;
    }
    slideImage.src = imagesSrcs[currentImageIndex]; 
}


function onShowNextBtnClick() {
    currentImageIndex++;
    if (currentImageIndex>imagesSrcs.length-1){
        currentImageIndex = 0;
    }
    slideImage.src = imagesSrcs[currentImageIndex];
}