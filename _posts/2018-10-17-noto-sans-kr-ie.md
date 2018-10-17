---
layout: post
title: "Noto Sans KR 폰트 IE 적용"
---

Noto Sans KR 적용 시, IE에서 적용되지 않는 이슈.


```css
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

@font-face{
   font-family:"Noto Sans KR";
   font-style:normal;
   font-weight:300;
   src:url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');
}
@font-face{
   font-family:"Noto Sans KR";
   font-style:normal;
   font-weight:400;
   src:url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
}
@font-face{
   font-family:"Noto Sans KR";
   font-style:normal;
   font-weight:500;
   src:url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');
}
@font-face{
   font-family:"Noto Sans KR";
   font-style:normal;
   font-weight:600;
   src:url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),
		url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');
}

```