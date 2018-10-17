---
layout: post
title: "Mobile tab slide"
---

Mobile 탭 슬라이드.

```javascript
var x, y, top, left, down;

$(".sub_tab ul").mousedown(function(e) {
    e.preventDefault();
    down = true;
    x = e.pageX;
    y = e.pageY;
    left = $(this).scrollLeft();
    $(this).addClass("grabbing");
});

$(".sub_tab ul li a").mouseup(function(e) {
    e.preventDefault();
    console.log("test");
});

$(".sub_tab ul").mousemove(function(e) {
    if(down){
        var newX = e.pageX;
        var newY = e.pageY;

        $(".sub_tab ul").scrollLeft(left - newX + x);
    }
});

$(".sub_tab ul li a").click(function(e) {
    e.preventDefault();
});

$(".sub_tab ul li a").mouseup(function(e) {
    down = false;
    $(this).removeClass("grabbing");
    var newerX = e.pageX;

    if(newerX !== x) { // Instead of x you can use newX

    // Do nothing with the click if there is scrolled

    } else {

    // Go to link anyway
    window.location = this.href;

    }
});
```