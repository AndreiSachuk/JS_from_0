var slider1 = {
    imagesSrcs: [],
    prevBtn: document.getElementById("prev-image"),
    nextBtn: document.getElementById("next-image"),
    slideImage: document.getElementById("slide-image"),
    currentImageIndex: 0,
    onShowPrevBtnClick: function (event) {
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.imagesSrcs.length - 1;
        }
        this.slideImage.src = this.imagesSrcs[this.currentImageIndex];
    },
    onShowNextBtnClick: function (event) {
        this.currentImageIndex++;
        if (this.currentImageIndex > this.imagesSrcs.length - 1) {
            this.currentImageIndex = 0;
        }
        this.slideImage.src = this.imagesSrcs[this.currentImageIndex];
    },
    start: function (params) {
        this.prevBtn.addEventListener('click', this.onShowPrevBtnClick);
        this.nextBtn.addEventListener('click', this.onShowNextBtnClick);
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/mt-robson-glacier-with-flowers-in-the-foreground-1024x768.jpeg');
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/kinney-lake-in-mt-robson-provincial-park-1024x767.jpeg');
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/misty-morning-looking-down-on-whitehorn-1024x768.jpeg');
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/berg-lake-trail-1024x768.jpeg');
        this.slideImage.src = this.imagesSrcs[this.currentImageIndex];
    }

}




