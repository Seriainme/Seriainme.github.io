# stellar-setup
this project records my practice on setting up my blog on a new hexo theme of stellar .





***博客相关：***

`已经完成：`

轨迹的泡泡特效

 用Axialis CursorWorkshop将ani文件转化为了cur文件，鼠标定制。

从gitee仓库引入鼠标指针，使国内可以访问。国外测试也ok

初音未来gif博客头像 

必须使用webp格式，  静态头像在gitee 的仓库为39.webp

动态的webp，由原本的gif裁剪后转成webp格式，名称为miku_1_.webp

需要注意的是，上传到gitee仓库后，要打开原始数据查看url是否能正常打开图片。不然博客就会报错。

发现原因了，gitee 有时候抽风，图片打不开。caonima 

 

使用fonts ninja 来查看页面的字体



在stellar/_config.yml  可以对页面进行设置，比如更改字体font-size属性

在D:\stellar-setup\blog\themes\stellar\source\css\_custom.styl 进行更改，也可以对页面产生效果。



处理自动同步gitee 仓库到GitHub的问题，在管理里面的      仓库镜像管理       限时开放 ，点击更新。

如果要从GitHub 同步数据，点击项目名称边上的更新按钮就可以了。



选好了中英文的字体

表情包相关在_config.yml被定义，其中这部分代码将gif解析成标签。

```
replace_original:  #把markdown格式的图片解析成图片标签
```

可以使用自己定义的表情包了，并且将这些表情包当作标签使用。

hexo的config.yml 修改了也不管用，必须修改stellar主题的yml文件。

其中设置line_number 来消除代码块的序号

代码块复制的快捷键



学习了hexo injector 的方法，注入js和style 到页面中



`doing:`

~~对照定制的styl文件更改，挑选各个区域的颜色~~

对应stellar 官方文档来对内容进行配置





点击特效选好了snow_like.js  要怎么通过injector注入到页面中

注入的地方总是不对，应该在canvas下面。



更改_custom.styl的相关来改变页面的布局，包括md文件的展示

自定义各个区块的字体的大小和整体布局，在base.styl 和 md.styl 里设置

`todo：`

从网络收集有意思的表情包同步到自己的GitHub和gitee仓库，比如，https://blobs.gg/，使用mine来同步。

博客背景色

购买域名

图床，表情包，头像换成国内稳定的cdn源，保证外网也能访问。尝试七牛云，需要先购买域名，免费域名只有三十天有效期。暂时先用GitHub和gitee

改掉底部的声明。加上站点运行时间和访客

hexo插件  和部署 。

观察其他hexo和stellar 博客，看有没有有意思的地方

 https://cat.dorcandy.cn/a262193e.html 博客优化

链接的插件，简化贴文链接形式

https://xaoxuu.com/wiki/stellar/articles/ 探索新的特性