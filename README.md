# stellar-setup
this project records my practice on setting up my blog on a new hexo theme of stellar .

# todo

笔记功能，记录平时的工作笔记。

代码复制的样式，而且要有缩放的功能按钮。

https://skyreeves.cn/post/9b8cc433.html 侧边栏美化
  

# last plan 
自定义小组件的使用，其他没读完的文档部分

看看其他hexo和stellar 博客， hexo里面好用的插件

表情包收集

https://xaoxuu.com/wiki/stellar/articles/ 探索新的特性

先把大的框架搭好，细节以后再弄。把博客的事情早点结束，之后忙工作。

购买域名，注册七牛云图床

第二章的友链部分还没看，所有的友链部分

关于我的md

# what i learned
cover 和banner 都适用本地的图片，暂时用喜欢的画。不要用poster 海报模式，显得太大了，试了调过尺寸还是不太美观。

blockquote引用字体样式设置，所有的页面设置都在css里面，比如blockquote.styl

更改hexo的config.yml 文件来更改设置，比如站点的信息

文章添加<!-- more -->之前的内容为摘要，有加密的内容不能设置摘要，要把password置空

使用Spotify的插件来嵌入音乐

图片右下角有下载的按钮，插入图片的时候要加入download 相关的参数，附带上下载的url

简历一个通用的md文档，包括中文中使用的语法等

在header.ejs 中改变对页面css的设置

在stellar的widgets.yml 对组件就行设置，需要在md文件的开头声明使用哪些文件。

source/css/_custom.styl 改变发文页面的布局

对页面的blockquote做定制，单独对p进行处理，并使用import来修饰，强调第一重要不被其他文件改写。

blockquote
  display block
  margin-left 0
  margin-right 0
  padding 0.25rem 0.75rem
  background-color rebeccapurple
  $bd-left = 4px
  border-left $bd-left solid cyan
  border-radius $bd-left $border-bar $border-bar $bd-left
  p
    font-size: 55px !important;
    color: springgreen




喜欢的颜色

springgreen
#8A2BE2
fuchsia
cyan
rebeccapurple
