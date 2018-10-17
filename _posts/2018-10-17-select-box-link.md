---
layout: post
title: "Selectbox link 이동"
---

Selectbox 링크 이동.



```html
<div class="family_site">
			<select name="family_site" onchange="javascript:go_url(this.options[this.selectedIndex].value);">
				<option value="">FAMILY SITE</option>
				<option value="http://ecoeye.com/">Ecoeye Korea</option>
				<option value="http://carboni2.sendpage.co.kr/">Carbon-i</option>
			</select>
		</div>
```


```javascript
<script type="text/javascript">
	function go_url(url){
		if(url != ""){
			window.open(url,'_blank');
		}else if(url = ""){
			location.reload();
		}
	};
</script>
```