---
layout: post
title: "Windows에서 Jekyll 블로그 생성하고 로컬에서 열기."
author: "Sung Jun"
---

## Windows에서 Jekyll 블로그 생성하고 로컬에서 열기.
(windows 10 x64 기준)



1. [Ruby 사이트](http://rubyinstaller.org/downloads/)에서 루비 설치.

2. 설치완료 후 윈도우 메뉴에서 **Start Command Prompt with Ruby** 실행.

3. Rubygem을 이용해서 Jekyll을 설치한다.

    ```
    gem install jekyll
	```

4. 설치 이후에 jekyll new . 를 실행해보면 정상적으로 동작하지 않는데 이것은 패키지들의 설치가 필요하기 때문이다. 아래의 명령대로 의존성을 갖는 패키지를 설치. ~~에러가 뜨지 않는 패키지들은 설치 불필요~~

    ```
    gem install bundler
    gem install minima
    gem install jekyll-feed
    gem install tzinfo-data
    ```

5. 모든 패키지 설치가 끝나고 jekyll new . 를 다시 실행하면 정상적으로 생성. <code>jekyll new .</code> 라는 명령어는 cmd에 설정 되어있는 폴더에 jekyll 파일을 생성한다.

6. 이대로 <code>jekyll serve</code>를 실행하고, 로컬에서 확인하기 위해 http://localhost:4000 으로 접속해보자.

_ _ _

*** Git clone으로 repository를 받았다면, 해당 repository 경로에서 cmd 명령어 입력**
```
$ bundle install
```


출처: http://hurderella.tistory.com/131