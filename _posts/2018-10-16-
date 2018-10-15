---
layout: post
title: "Parameter 가져오기"
author: "Sung Jun"
---


URL의 매개변수를 가져옴.

~~~javascript
//매개변수 가져오기
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results === undefined){
    results = null;
  }else{
    return decodeURI(results[1]) || 0;
  }
}

//parameter에 따라 select박스 selected
if($.urlParam("cate")){
  var cate = $.urlParam("cate");
  $("#a_cate > option[value="+cate+"]").prop("selected", true);
  $(".division #a_division"+cate).show();
}
~~~
