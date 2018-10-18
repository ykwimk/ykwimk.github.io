---
layout: post
title: "bxslider 썸네일 슬라이드"
---

BXSlider 썸네일

```javascript
thumbSlider('.modern_slider01', '#gallery-thumbs');

    //썸네일 슬라이드
    function thumbSlider(slideName,thumbName){
      var newbachSlider = true;

      // thumb 변수
      var thumb = $(thumbName).find('.thumb');

      // thumb 갯수
      var visibleThumbs = 4;

      // 큰 사진 슬라이드 변수&옵션
      var gallerySlider = $(slideName).bxSlider({
          auto:true,
          controls: true,
          pager: false,
          pause:3000,
          easing: 'easeInOutQuint',
          infiniteLoop: true,
          onSlideAfter: function ($slideElement, oldIndex, newIndex) {
              thumb.removeClass('pager-active');
              thumb.eq(newIndex).addClass('pager-active');
              // Action next carousel slide on one before the end, so newIndex + 1
              slideThumbs(newIndex + 1 , visibleThumbs);
              newbachSlider = true;
          },
          onSlideBefore: function($slideElement, oldIndex, newIndex){
              newbachSlider = false;
          }
      });

      function shopThumbClickEvent(obj, e){
        if(newbachSlider){

        // 클릭한 썸네일 순서 와 동일한 사진으로 보여줌
        gallerySlider.goToSlide($(obj).closest('.thumb-item').index());

        // 클릭한 썸네일 액티브
        $(this).stop().addClass('pager-active');
        }
      }

      // 썸네일 클릭 
      thumb.click(function (e) {
        shopThumbClickEvent(this, e);
      });

      // 썸네일 움직이게 계산
      function slideThumbs(currentSlideNumber, visibleThumbs) {

        // 첫 슬라이드를 구하고 나머지를 무시 
        var m = Math.floor(currentSlideNumber / visibleThumbs);
        // Multiply by the number of visible slides to calculate the exact slide we need to move to
        var slideTo = m;

        // 슬라이드 move
        thumbsSlider.goToSlide(slideTo);
      }

      // 썸네일 옵션
      var thumbsSlider = $(thumbName).bxSlider({
          controls: false,
          pager: false,
          infiniteLoop: false,
          slideWidth: 146,
          minSlides: visibleThumbs,
          maxSlides: visibleThumbs,
          slideMargin: 2,
          hideControlOnEnd:true
      });
}
```


```html
<div class="thumb_slider">
	<ul class="modern_slider01">
		<li><img src="slide_img" alt=""></li>
		<li><img src="slide_img" alt=""></li>
		<li><img src="slide_img" alt=""></li>
		<li><img src="slide_img" alt=""></li>
	</ul>
	
	<div class="gallery-thumbs-container">
		<ul id="gallery-thumbs" class="gallery-thumbs-list">
			<li class="thumb-item">
				<div class="thumb pager-active">
					<a href="javascript:;"><img src="thumbnail_img" alt=""></a>
				</div>
			</li>
			<li class="thumb-item">
				<div class="thumb">
					<a href="javascript:;"><img src="thumbnail_img" alt=""></a>
				</div>
			</li>
			<li class="thumb-item">
				<div class="thumb">
					<a href="javascript:;"><img src="thumbnail_img" alt=""></a>
				</div>
			</li>
			<li class="thumb-item">
				<div class="thumb">
					<a href="javascript:;"><img src="thumbnail_img" alt=""></a>
				</div>
			</li>
		</ul>
	</div>
</div>
```