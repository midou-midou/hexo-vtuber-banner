const fs = require('hexo-fs');
const path = require('path');
const nunjucks = require('nunjucks');

const initVobj = [{
    Vname: "Kizuna AI",
    VLogo: "https://static.xiaoblogs.cn/img/Logo_kizunaai_tp.png",
    VBirthday: "6-30",
    VColor: "#EE4F87",
    VBanner: "//static.xiaoblogs.cn/img/kizuna_ai__4k_uhd__by_assassinwarrior_dchk1rb.png",
    Vlink: "//www.deviantart.com/h4nip/art/Kizuna-Ai-GFX-Candy-Style-880025687",
    VSlogan: "嗨多摩"
}]

exports.readVJson = (Vname) => {
    const rootPath = path.resolve(__dirname, '../../../' ,'VJson/vtuber.json');
    // 读文件前判断文件是否存在
    let isDirExist = fs.existsSync(path.resolve(rootPath, "../"));
    if(!isDirExist){
        fs.mkdirSync(path.resolve(rootPath, "../"));
        fs.mkdirSync(path.resolve(rootPath, "../bannerImg"));
    }
    let isExist = fs.existsSync(rootPath);
    if(!isExist){
        console.info("[vTuber-Bannner-plugin] file is not exist, making a json file now...");
        fs.writeFileSync(rootPath, JSON.stringify(initVobj));
    } 
    let vObj = JSON.parse(fs.readFileSync(rootPath));
    var index = 0;
    vObj.map((item, key) => {
        if(item.Vname === Vname){
            index = key;
            return;
        }
    })
    return Vname != null ? vObj[index] : vObj[0];
}

exports.createVBannerByTag = (arg) => {
    if(typeof(arg[0]) == 'string'){
        return nunjucks.render(path.resolve(__dirname, '../layout/vBanner.njk'), this.readVJson(arg[0]))
    }
}