const fs = require('hexo-fs');
const path = require('path');
const { readVJson, createVBannerByTag } = require('./lib/vtuber');

const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);
const vData = readVJson(hexo.config.vBanner.vTuber_name);
// render ejs
hexo.render.render({path: path.resolve(__dirname, './layout/vBanner.ejs')}, {vData: vData, hexo: hexo}).then(function(res){
    hexo.extend.helper.register('vBanner', () => res);
})

hexo.render.render({path: path.resolve(__dirname, './source/vBannerCss.ejs')}, {vData: vData}).then(function(res){
    fs.writeFileSync(path.resolve(__dirname, './source/vBanner.css'), res);
})

// 插入css标签
hexo.extend.injector.register('head_end', () => css('css/vBanner.css'));

// 添加过滤器 - 复制文件 copy asset files
hexo.extend.filter.register('before_generate', function(){
    hexo.extend.generator.register('vBanner_asset', ()=>[
        {
            path: 'css/vBanner.css',
            data: function(){
              return fs.createReadStream(
                path.resolve(path.resolve(__dirname, "./source"),"vBanner.css"))
            }
        },
        {
            path: 'lib/vBanner/vtuber.json',
            data: function(){
                return fs.createReadStream(
                    path.resolve(path.resolve(__dirname, "../../" , "./VJson"),"vtuber.json")
                )
            }
        }
    ]);
    fs.copyDir(path.resolve(__dirname, "../../" , "./VJson/bannerImg"), path.resolve(__dirname, "../../" , "./public/bannerImg"));
})

// 注册vBanner tag 
// register vBanner tag
hexo.extend.tag.register('vBanner', (arg) => createVBannerByTag(arg, hexo));

