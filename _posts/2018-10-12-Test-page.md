---
layout: post
title: "특정 Parameter 가져오기"
author: "Sung Jun"
---


URL의 특정 매개변수를 가져옴.


~~~javascript
function findParam(url, param){
  var check = "" + param;
  if(url.search(check)>=0){
      return url.substring(url.search(check )).split('&')[0].split('=')[1];
  }
}  

var url = "http://www.yourdomain.com/example?id=1&order_no=114&invoice_no=254";  
alert(findParam(url,"order_no"));
~~~
