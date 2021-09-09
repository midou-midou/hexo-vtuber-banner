# hexo-vTuber-Banner

添加你喜欢的vTuber/vup的卡片到你的博客

![](https://static.xiaoblogs.cn/img/20210909151949.png)

在线演示：[demo](https://mimonarchrd.gitee.io/passages/vTuber-demo/)

文档：[中文](https://github.com/MIMONATCH/hexo-vtuber-banner/blob/main/README.md) [English](https://github.com/MIMONATCH/hexo-vtuber-banner/blob/main/doc/README.md)

## 目录

[TOC]

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
  vTuber_name: Kizuna AI  # vTuber's name or vup's name
  localtion: home  # vBanner will render in ['default','home','post','page','archive','category','tag'] pages
```

配置项说明：

#### enable

开启让插件是否自动渲染到`localtion`配置的页面

#### vTuber_name

填入vBanner上要显示的vtuber/vup的名字

#### localtion

控制插件渲染Banner的位置，一共有7个选项

| 配置项options |        说明         |
| :-----------: | :-----------------: |
|    default    |  **全部页面**渲染   |
|     home      | 仅**主页index**渲染 |
|     post      | 仅**post页面**渲染  |
|     page      | 仅**page页面**渲染  |
|    archive    | 仅**归档页面**渲染  |
|   category    | 仅**分类页面**渲染  |
|      tag      | 仅**标签页面**渲染  |

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

- 为了有更好的显示效果。VLogo图片、VBanner图片比例最好为4:1的比例，即 宽:高
- 图片可以放到VJson文件夹下的bannerImg文件夹下，本地图片url为`http://your_site_url/bannerImg/your_image_file`
- 图片的格式：png、jpg、jpeg
- 图片的链接必须可以直接访问到
- 建议图片放入OSS

## 使用

除了在各种页面上的自动渲染，vBanner还可以在markdown里面使用

```markdown
{%vBanner [填入vTuber/vup的名字] %}
```

**说明**

必须使用`json`中配置的vTuber/vup的名字

## 最后

需要反馈请到issue区

各位帅老DD们，觉得不错给个:100:吧

![](https://static.xiaoblogs.cn/emoji/%E5%B0%8F%E5%B8%8C%E5%B0%8F%E6%A1%83_%E8%BF%99%E6%A0%B7%E9%82%A3%E6%A0%B7.png)

## 许可证

MIT License