# stellar-setup
this project records my practice on setting up my blog on a new hexo theme of stellar .


# 暂时放着了，下一步准备把封面都换成随机的url，用自己的key

################

问题集中在：

插入自定义的css 和 js 样式


blockquote引用字体样式设置，所有的页面设置都在css里面，比如blockquote.styl 


```
 inject:
  head:
    - <link rel="stylesheet" href="https://gcore.jsdelivr.net/gh/highlightjs/cdn-release@11.5.0/build/styles/atom-one-dark.min.css">

 script:
    - https://code.jquery.com/jquery-3.5.1.min.js
    - https://gitee.com/morel/blobemoji/raw/main/snowlike.js
    - https://raw.githubusercontent.com/Seriainme/blobemoji/main/snowlike.js
```

 
# todo

改变页面的css布局，改字体和颜色

笔记功能 i can not figure it out 

侧边栏的美化

自定义小组件

 


# 大后期的需求

购买域名，注册七牛云图床

第二章的友链部分还没看，所有的友链部分

关于我的md

# what i learned
更改hexo的config.yml 文件来更改设置，比如站点的信息

文章添加<!-- more -->之前的内容为摘要，有加密的内容不能设置摘要，要把password置空

使用Spotify的插件来嵌入音乐

图片右下角有下载的按钮，插入图片的时候要加入download 相关的参数，附带上下载的url

简历一个通用的md文档，包括中文中使用的语法等

在header.ejs 中改变对页面css的设置