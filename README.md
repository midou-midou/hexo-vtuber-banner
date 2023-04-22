# hexo-vTuber-Banner

添加你喜欢的vTuber/vup的卡片到你的博客

![](https://midou-static-1257227807.cos.ap-chengdu.myqcloud.com/img/20210909151949.png)

在线演示：[demo](https://mimonarchrd.gitee.io/passages/vTuber-demo/)

文档：[中文](https://github.com/MIMONATCH/hexo-vtuber-banner/blob/main/README.md)



## 安装

所需依赖

- hexo-fs

所需Hexo版本

- 3.0以上版本



安装vBanner

```sh
npm install -s hexo-vtuber-banner
```

或

```sh
yarn add hexo-vtuber-banner
```

## 配置

### _config.yml下的配置

在`Hexo`的`_config.yml`中需要添加如下配置

```yaml
vBanner:
  enable: true	# true or false
```

配置项说明：

#### enable

是否开启

#### 

------



### VJson的配置

执行`hexo g`命令后会在`hexo`的`_config.yml`同级目录生成VJson文件夹，里面有`vtuber.json`配置文件

```json
[{
    Vname: "",
    VLogo: "",
    VBirthday: "",
    VColor: "",
    VBanner: "",
    Vlink: "",
    VSlogan: ""
}]
```

配置项

|   属性名    |      属性值       |
| :---------: | :---------------: |
|   Vname *   | vtuber或vup的名字 |
|   [VLogo]   |   logo图片的url   |
| [VBirthday] |   生日 [xx-xx]    |
|  VColor *   |  映像色 [16进制]  |
|  VBanner *  |    人物图片url    |
|   Vlink *   |    图片来源url    |
|  [VSlogan]  |       标语        |

*为必填，[]可选

**说明**

- 为了有更好的显示效果。VLogo图片、VBanner图片比例最好为16：9的比例，即 宽:高
- 图片的格式：png、jpg、jpeg、webp  url()支持的都可以
- 建议图片放入图床

## 使用

vBanner一共提供了两种使用的方法

- markdown中使用tag
- 通过辅助函数引入vBanner

### Markdown中书写

```markdown
{%vBanner [填入vTuber/vup的名字] %}
```

**说明**

必须使用`json`中配置的vTuber/vup的名字

### 在theme中手动引入

- ejs模板中

```ejs
<%- vBanner('vtuber/vup 的名字') %>
```

- njk模板中 (next主题v8.0及以上)

```njk
{{ vBanner('vtuber/vup 的名字') }}
```

将上面的代码放到你要添加vBanner的地方，比如要在`header`中添加，就到`header`的模板中添加上面的代码

之后执行下面的命令
```shell
  hexo clean && hexo g && hexo s
  ```

之后在浏览器中就可以看到效果了

## 最后

需要反馈请到issue区

各位帅老DD们，觉得不错给个:100:吧

## 许可证

MIT License