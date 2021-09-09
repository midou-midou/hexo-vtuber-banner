const fs = require('hexo-fs');
const path = require('path');
const UglifyJS = require('uglify-js');
const { readVJson, createVBannerByTag } = require('./lib/vtuber');

const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);
const vData = readVJson(hexo.config.vBanner.vTuber_name);
// render ejs
hexo.render.render({path: path.resolve(__dirname, './layout/vBanner.ejs')}, {vData: vData, hexo: hexo}).then(function(res){
    let local = ['default','home','post','page','archive','category','tag'];
    let cfg = hexo.config.vBanner;
    if(local.indexOf(cfg.localtion) != -1 && cfg.localtion != null){
        hexo.extend.injector.register('body_begin', res, cfg.localtion);
    }else{
        hexo.extend.injector.register('body_begin', res, 'default');
    }
})

hexo.render.render({path: path.resolve(__dirname, './layout/getVNode.ejs')}, {hexo: hexo}).then(function(res){
    fs.writeFileSync(path.resolve(__dirname, './lib/getVNode.js'), res);
})

hexo.render.render({path: path.resolve(__dirname, './source/vBannerCss.ejs')}, {vData: vData}).then(function(res){
    fs.writeFileSync(path.resolve(__dirname, './source/vBanner.css'), res);
})

// 插入css标签
hexo.extend.injector.register('head_end', () => css('css/vBanner.css'));
// 插入js标签
hexo.extend.injector.register('body_end', () => js('lib/vBanner/getVNode.min.js'));

// 添加过滤器 - 复制文件 copy asset files
hexo.extend.filter.register('before_generate', function(){
    hexo.extend.generator.register('vBanner_asset', ()=>[
        {
          path: 'lib/vBanner/getVNode.min.js',
          data: function(){
            return fs.createReadStream(
              path.resolve(path.resolve(__dirname, "./lib"),"getVNode.min.js"))
          }
        },
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
// minifier
hexo.extend.filter.register('after_render:js', function(){
    let res = UglifyJS.minify(path.resolve(path.resolve(__dirname, "./lib"),"getVNode.js"), {
            mangle: true,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            }
        } 
    );
    fs.writeFileSync(path.resolve(__dirname, './lib/getVNode.min.js'), res.code);
});
