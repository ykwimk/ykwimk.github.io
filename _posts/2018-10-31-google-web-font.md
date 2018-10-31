---
layout: post
title: "웹 폰트 더 올바르고 빠르게 로딩하기"
author: "Sung Jun"
---


원문: [7 Tips to Load Google Web Fonts Faster](https://www.quickonlinetips.com/archives/2013/10/load-google-web-fonts-faster/)

작업을 하다보면 기본 폰트가 로드된 다음 웹 폰트로 변하는 경우가 있는데, 이럴 때마다 레이아웃이 망가지거나 번쩍거리는 현상(Flash Of Unstyled Text: FOUT)이 일어나곤 한다. 이러한 경우를 막기 위한 7가지 팁을 소개하고자 한다.

## 1. Load Google Fonts First
Google Import 코드를 <code>HEAD</code> 태그의 가장 첫번째 -CSS파일 보다 더 앞- 에 위치시킴으로써 CSS보다 먼저 폰트를 로드시킨다.
<br />
<br />
## 2. Use Link Format
참조 링크를 이용하면 HTML 최상위에 코드를 넣을 수 있으며, CSS파일보다 가장 빠르게 로드할 수 있다.
~~~
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
~~~
<br />
## 3. Load Fewer Fonts
Bold 타입과 Regular 타입 - 최대 2개의 폰트를 선정하는 것이 로딩 시간을 짧게 하기 위한 좋은 방법이다.
<br />
<br />
## 4. Combine Font Codes
코드 한 줄에 여러 구글 폰트를 로드할 수 있다.
```
<link href='http://fonts.googleapis.com/css?family=Open+Sans|Oswald' rel='stylesheet' type='text/css'>
```
<br />
<br />
## 5. Load Default Variants
폰트 옵션으로 폰트의 기본 스타일만 선택하면 하나의 옵션으로만 로드된다.
<br />
<br />
## 6. Load Faster Fonts
폰트가 무거운지 확인해야한다. 빠르게 로딩되는 폰트로 현명하게 선택해야 한다.
<br />
<br />
## 7. Use Web Font Loader
웹 폰트 로더는 사이트의 나머지가 로드되기 전에 로드하고, 스타일되지 않은 텍스트가 번쩍되는 현상(FOUT)을 막아준다.
~~~javascript
<script src="//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
<script>
  WebFont.load({
    google: {
      families: ['Open Sans', 'Oswald']
    }
  });
</script>
~~~
<br />
<br />
<br />
출처: [https://nolboo.kim/blog/2013/10/22/google-web-font-faster-tip/](https://nolboo.kim/blog/2013/10/22/google-web-font-faster-tip/)