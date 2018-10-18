---
layout: post
title: "게시판 슬라이드"
---

게시판 슬라이드

```javascript
$("ul.num_wrap > li").click(function(){
  var tabNum = $(this).index();

  $("ul.num_wrap > li").removeClass("on");
  $(this).addClass("on");
  $(".img > img").removeClass("show");
  $(".img").find("img").eq(tabNum).addClass("show");
});

$("a.prev").click(function(){
  var showImg = $(".img").children(".show").index();

  $("ul.num_wrap > li").removeClass("on");
  $("ul.num_wrap > li").eq(showImg - 1).addClass("on");
  $(".img").find("img").removeClass("show");
  $(".img").find("img").eq(showImg - 1).addClass("show");
});

$("a.next").click(function(){
  var showImg = $(".img").children(".show").index();

  $("ul.num_wrap > li").removeClass("on");
  $("ul.num_wrap > li").eq(showImg + 1).addClass("on");
  $(".img").find("img").removeClass("show");
  $(".img").find("img").eq(showImg + 1).addClass("show");

  if(showImg == 3){
    $("ul.num_wrap > li").removeClass("on");
    $("ul.num_wrap > li").eq(0).addClass("on");
    $(".img").find("img").removeClass("show");
    $(".img").find("img:first-child").addClass("show");
  }
});
```