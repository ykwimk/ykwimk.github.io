---
layout: post
title: "자동 슬라이드 (마우스 오버시 멈춤)"
---

자동 슬라이드 (마우스 오버시 멈춤)

```javascript
<script type="text/javascript">
    $(document).ready(function(){
        var txtNum = 0;
        var slideChk = true;

        function autoSlide() {
            if(slideChk == true){
                if(txtNum == 2){
                    txtNum = 0;
                }else{
                    txtNum++;
                };
                $(".m11_txtarea").hide();
                $(".m11_txtarea:eq("+ txtNum +")").show();
                $(".m11_txtarea p").hide();
                $(".m11_txtarea:eq("+ txtNum +") p").fadeIn(1000);
            };
        };

        setInterval(autoSlide, 500);


        $(".tab_con0").hover(function(){
            slideChk = false;
        }, function(){
            slideChk= true;
        });
    });
</script>
```