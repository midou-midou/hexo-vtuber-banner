# hexo-vTuber-Banner

Add a Vtuber banner or bilibili vup banner to your blog

![](https://midou-static-1257227807.cos.ap-chengdu.myqcloud.com/img/20210909151949.png)

Demo：[demo](https://mimonarchrd.gitee.io/passages/vTuber-demo/)

Doc：[中文](https://github.com/MIMONATCH/hexo-vtuber-banner/blob/main/README.md) [English](https://github.com/MIMONATCH/hexo-vtuber-banner/blob/main/doc/README.md)

## Install

need this dependencies

- hexo-fs

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
```

#### enable

Turn on or Turn off automatic rendering to `localtion`

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

There is two ways to use vBanner in your blog

- nunjucks tag
- helper

### Nunjuck tag

Using nunjucks tags in your markdown file

```markdown
{%vBanner [vup's name or vTuber name] %}
```

**Attention**

vup's name or vTuber name must be in `vtuber.json`

### Hexo Helper

In ejs

```ejs
<%- vBanner('vtuber's name') %>
```

In njk (next theme v8.0)

```
{{ vBanner('vtuber's name') }}
```

Add this code to your themes. For example, If I want to add vBanner to `header`, I could write this code in my theme of ejs file

## Final

If you have some problem, you'll can tell me in issue

Ladies and gentlemen，Enjoy :beer:

## License

MIT License