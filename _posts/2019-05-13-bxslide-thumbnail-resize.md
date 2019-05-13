---
layout: post
title: "BX Slider Thumbnail resize"
author: "Sung Jun"
---

BX Slider Thumbnail resize시 Thumbnail 갯수 변경

```javascript
//썸네일 슬라이드
var chkSlider = true;
var thumb = $("#gallery-thumbs").find(".thumb"); // thumb 변수
var numberOfVisibleSlides;
var $slider;

function buildSliderConfiguration() {
    var windowWidth = $(window).width();
    numberOfVisibleSlides;

    if (windowWidth > 1279) {
        numberOfVisibleSlides = 5;
    }else{
        numberOfVisibleSlides = 3;
    }
    
    //thumbnail 슬라이드 옵션 return
    return {
        controls: false,
        pager: false,
        infiniteLoop: false,
        slideWidth: 150,
        minSlides: numberOfVisibleSlides,
        maxSlides: numberOfVisibleSlides,
        slideMargin: 10,
        hideControlOnEnd:true
    };
}

function configureSlider() {
    var config = buildSliderConfiguration();

    if ($slider && $slider.reloadSlider) {
        $slider.reloadSlider(config);
    }else{
        $slider = $("#gallery-thumbs").bxSlider(config);
    }
}

// 큰 사진 슬라이드 변수&옵션
gallerySlider = $("#gallery").bxSlider({
    auto:false,
    controls: true,
    pager: false,
    autoControls: true,
    pause:5000,
    easing: "easeInOutQuint",
    infiniteLoop: true,
    nextSelector: "#arr_next",
    prevSelector: "#arr_prev",
    nextText: '<img src="/ko/images/page/m44_arr_next.png" />',
    prevText: '<img src="/ko/images/page/m44_arr_prev.png" />',
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
        thumb.removeClass("pager-active");
        thumb.eq(newIndex).addClass("pager-active");
        //slideThumbs(newIndex + 1 , visibleThumbs);
        slideThumbs(newIndex, numberOfVisibleSlides);
        chkSlider = true;
    },
    onSlideBefore: function($slideElement, oldIndex, newIndex){
        chkSlider = false;
    }
});

function shopThumbClickEvent(obj, e){
    if(chkSlider){
        // 클릭한 썸네일 순서 와 동일한 사진으로 보여줌
        gallerySlider.goToSlide($(obj).closest(".thumb-item").index());

        // 클릭한 썸네일 액티브
        $(this).stop().addClass("pager-active");
    }
}

// 썸네일 클릭
thumb.click(function(e){
    shopThumbClickEvent(this, e);
});

function slideThumbs(currentSlideNumber, numberOfVisibleSlides){
    var m = Math.floor(currentSlideNumber / numberOfVisibleSlides);
    var slideTo = m;

    $slider.goToSlide(slideTo);
}

$(window).on("orientationchange resize", configureSlider);
configureSlider();
```