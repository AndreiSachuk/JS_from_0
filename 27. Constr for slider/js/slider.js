function Slider() {
    this.imagesSrcs = [];
    this.prevBtn = null;
    this.nextBtn = null;
    this.slideImage = null;
    this.currentImageIndex = 0;

    this.start = function (elId) {
        var that = this;

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);
        
        this.prevBtn = el.querySelector(".prev-image");
        this.nextBtn = el.querySelector(".next-image");
        this.slideImage = el.querySelector(".image-slide");

        this.prevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);  
        }),
        this.nextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);  
        }),
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/mt-robson-glacier-with-flowers-in-the-foreground-1024x768.jpeg');
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/kinney-lake-in-mt-robson-provincial-park-1024x767.jpeg');
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/misty-morning-looking-down-on-whitehorn-1024x768.jpeg');
        this.imagesSrcs.push('https://wanderlustandrainydays.com/wp-content/uploads/2021/01/berg-lake-trail-1024x768.jpeg');
        this.slideImage.src = this.imagesSrcs[this.currentImageIndex];
    };

    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.imagesSrcs.length - 1;
        }
        this.slideImage.src = this.imagesSrcs[this.currentImageIndex];
    };

    this.onShowNextBtnClick = function (e) {
        var that = this;
        this.currentImageIndex++;
        if (this.currentImageIndex > that.imagesSrcs.length - 1) {
            this.currentImageIndex = 0;
        }
        this.slideImage.src = this.imagesSrcs[this.currentImageIndex];
    };


}

