const fs = require('hexo-fs');
const path = require('path');
const { Vtuber } = require('./lib/vtuber');

const css = hexo.extend.helper.get('css').bind(hexo);
const vBanner = new Vtuber();
// 注册html中的模版函数
hexo.extend.helper.register('vBanner',(vtuberName) => {
    vBanner.store.push(vtuberName);
    return hexo.render.renderSync({
        path: path.resolve(__dirname, './layout/vBanner.ejs')
    }, {vData: vBanner.vtubers.getVtuber(vtuberName), hexo: hexo})
});

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
        }
    ]);
    fs.copyDir(path.resolve(__dirname, "../../" , "./vtuberBanner/bannerImg"), path.resolve(__dirname, "../../" , "./public/bannerImg"));
})

// 注册vBanner tag 写markdown文章可用
// register vBanner tag
hexo.extend.tag.register('vBanner', (arg) => vBanner.renderVtuberTag(arg, hexo));