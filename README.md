## 综合档案管理系统

### 依赖类库

  * node > 7.0.0
  * npm latest

### 部署方式

#### Windows系统
   1. 在PostgreSQL中新建数据库: ams
   2. npm install
   3. 设置环境变量:NODE_ENV=production
   4. npm run build
   5. npm run start_win
   
#### Linux或Mac系统
   1. 在PostgreSQL中新建数据库: ams
   2. npm install
   3. npm run build
   4. npm run start
   
### 目录结构
   
```
    ams/
     ├──dist/                      * 由前端源文件生成的页面(不需要手动修改)
     │   
     ├──front/                     * 前端相关的所有文件
     │   ├──src/                   * 前端源文件
     │   │   ├──components/        * 页面组件
     │   │   ├──entries/           * 所有页面,对应html文件
     │   │   ├──models/            * 模型文件
     │   │   ├──public/            * 公共css,图片,字体文件
     │   │   ├──service/           * 发送请求的服务文件
     │   │   ├──utils/             * 工具类和公共js依赖
     │   │   └──app.html           * html模板文件
     │   │
     │   ├──test/                  * 前端测试文件
     │   │
     │   ├──webpack.common.js      * 通用的webpack配置
     │   ├──webpack.config.js      * webpack配置
     │   ├──webpack.dev.js         * development webpack config
     │   └──webpack.prod.js        * production webpack config
     │
     ├──node_modules/              * 依赖类库,自动生成(不需要手动修改)
     │
     ├──server/                    * 服务端相关文件
     │   ├──docs/                  * 服务端接口文档
     │   │
     │   ├──logs/                  * 服务端日志,自动生成(不需要手动修改)
     │   │
     │   ├──src/                   * 服务端源文件
     │   │   ├──api/               * 服务端接口文件
     │   │   ├──core/              * 服务端架构核心
     │   │   ├──data/              * 服务端初始化数据
     │   │   ├──models/            * 服务端模型文件
     │   │   ├──service/           * 服务端业务逻辑
     │   │   ├──app.js             * 服务端启动入口文件
     │   │   └──config.js          * 服务端配置文件
     │   │
     │   └──test/                  * 服务端测试文件
     │       └──data/              * 测试数据
     │
     ├──typings/                   * typescript的库接口文件,自动生成(不需要手动修改)
     │
     ├──uploads/                   * 用户上传的所有文件,自动生成(不需要手动修改)  
     │
     ├──设计                        * 项目的设计图
     │ 
     ├──.gitignore                 * git忽略的文件
     ├──ams数据库设计.docx     * 项目数据库设计文档
     ├──gulpfile.js                * glup工作流配置
     ├──typings.json               * 项目依赖的typescript的库接口文件,用于生成typings文件夹
     ├──tsconfig.json              * typescript编译配置文件
     ├──package.json               * what npm uses to manage it's dependencies
     └──README.md                  * 项目说明文档

```