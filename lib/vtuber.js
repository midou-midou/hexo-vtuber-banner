const fs = require('hexo-fs');
const path = require('path');
const nunjucks = require('nunjucks');

exports.Vtuber = class Vtuber{
    // init 初始化步骤，json文件初始化
    constructor() {
        console.info("[vTuber-Bannner-plugin] init...")
        this.rootPath = path.resolve(__dirname, '../../../' ,'vtuberBanner/vtuber.json');
        const oldRootPath = path.resolve(__dirname, '../../../' ,'VJson/vtuber.json');
        this.vtubers = new Map();
        this.store = [];

        this.vtubers.getVtuber = (key) => {
            if(this.vtubers.get(key)) {
                return this.vtubers.get(key)
            }
            console.error(`[vTuber-Bannner-plugin] ${key} json is not exist`);
        }

        const isExist = fs.existsSync(this.rootPath);

        const isOldExist = fs.existsSync(oldRootPath);
        // 新老版本数据合并
        if(isOldExist) {
            const mapKey = {
                Vname: 'name',
                VLogo: 'logo',
                VColor: 'color',
                VBanner: 'banner',
                Vlink: 'link',
                VSlogan: 'slogan'
            }
            const vups = JSON.parse(fs.readFileSync(oldRootPath)).map((item) => {
                let vtuber = {};
                for (const key in item) {
                    if (key === 'VBirthday') {
                        continue;
                    }
                    vtuber[mapKey[key]] = item[key]
                }
                this.vtubers.set(vtuber.name, vtuber);
                return vtuber;
            })
            if(!isExist){
                console.info("[vTuber-Bannner-plugin] file is not exist, making a json file now...");
                fs.writeFileSync(this.rootPath, JSON.stringify(vups));
                fs.mkdirSync(path.resolve(this.rootPath, "../bannerImg"));
                // 老版本的数据不会删除，要求手动删除
                console.warn("[vTuber-Bannner-plugin] Need Delete Old Data By Youself");
            }
        }

        

        JSON.parse(fs.readFileSync(this.rootPath)).map((item) => {
            this.vtubers.set(item.name, item);
        });
    }

    readVtuberJson(name) {
        if (!fs.existsSync(this.rootPath)) {
            console.error("[vTuber-Bannner-plugin] vtuber json not exist")
            return;
        }
        return this.vtubers.getVtuber(name)
    }

    renderVtuberTag = (arg) => nunjucks.render(path.resolve(__dirname, '../layout/vBanner.njk'), {vData: this.readVtuberJson(arg[0])})
}
