# hexo-vTuber-Banner

Add a Vtuber banner or bilibili vup banner to your blog

![](https://static.xiaoblogs.cn/img/20210909151949.png)

Demo：[demo](https://mimonarchrd.gitee.io/passages/vTuber-demo/)

Doc：[中文](https://github.com/MIMONATCH/hexo-vtuber-banner/blob/main/README.md) [English](https://github.com/MIMONATCH/hexo-vtuber-banner/blob/main/doc/README.md)

## Install

need this dependencies

- hexo-fs
- uglify-js

Compatibility 

- Hexo 3 or later



install vBanner

```sh
npm install -s hexo-vtuber-banner
```

os

```sh
yarn add hexo-vtuber-banner
```

## Configuration

### _config.yml

The following configuration needs to be added in the `_config.yml` of `Hexo`

```yaml
vBanner:
  enable: true	# true or false
  vTuber_name: Kizuna AI  # vTuber's name or vup's name
  localtion: home  # vBanner will render in ['default','home','post','page','archive','category','tag'] pages
```

#### enable

Turn on or Turn off automatic rendering to `localtion`

#### vTuber_name

vup's name or vTuber name

#### localtion

Tell vBanner where to render

| options  |               info               |
| :------: | :------------------------------: |
| default  |     render to **every page**     |
|   home   |   only render to **home page**   |
|   post   |   only render to **post page**   |
|   page   |     only render to **pages**     |
| archive  | only render to **archive page**  |
| category | only render to **category page** |
|   tag    |   only render to **tag page**    |

------



### VJson

run `hexo g` will generate a folder named "**VJson**", and a file named "**vtuber.json**". Open this file, you'll see the following content.

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

|     key     |               value                |
| :---------: | :--------------------------------: |
|   Vname *   |     vup's name or vTuber name      |
|   [VLogo]   |              logo url              |
| [VBirthday] |          birthday [mm-dd]          |
|  VColor *   | vtuber's color [Hexadecimal color] |
|  VBanner *  |     vtuber image or vup image      |
|   Vlink *   |            image source            |
|  [VSlogan]  |               slogan               |

"*" is required，"[]" is optional

**Attention**

- Image ratio is 4:1 for better page effect
- You could put your images into `bannerImg` folder. These Images' url is `http://your_site_url/bannerImg/your_image_file`
- Image format：png、jpg、jpeg
- The images must be directly accessible
- It is recommended that the picture be put into OSS or CDN

## Usage

Using nunjucks tags in your markdown file

```markdown
{%vBanner [vup's name or vTuber name] %}
```

**Attention**

vup's name or vTuber name must be in `vtuber.json`

## Final

If you have some problem, you'll can tell me in issue

Ladies and gentlemen，Enjoy :beer:

![](https://static.xiaoblogs.cn/emoji/%E5%B0%8F%E5%B8%8C%E5%B0%8F%E6%A1%83_%E8%BF%99%E6%A0%B7%E9%82%A3%E6%A0%B7.png)

## License

MIT License