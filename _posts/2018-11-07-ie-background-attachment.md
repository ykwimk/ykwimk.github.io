---
layout: post
title: "IE Background-attachment 버벅임 수정"
author: "Sung Jun"
---

CSS background 속성 중 'background-attachment:fixed'라는 속성을 사용하면 크롬에서는 문제가 없지만, 익스에서는 버벅이는 현상이 나타났다. 그 현상을 수정하기 위한 스크립트.

```javascript
if(navigator.userAgent.match(/Trident\/7\./)) {
   $("body").on("mousewheel", function () {
      event.preventDefault();

      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;

      window.scrollTo(0, currentScrollPosition - wheelDelta);
   });
   $("body").keydown(function (e) {
      e.preventDefault();
      
      var currentScrollPosition = window.pageYOffset;
      switch (e.which) {
         case 38:
            window.scrollTo(0, currentScrollPosition - 120);
         break;

         case 40:
            window.scrollTo(0, currentScrollPosition + 120);
         break;

         default: return;
      } 
   });
}
```