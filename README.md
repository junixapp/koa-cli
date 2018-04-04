## koa-cli
基于koa@2的快速开发架构。
架构理念：
- 不处理任何的静态文件，图片上传和下载。首页交给nginx或者pm2去serve，静态文件交由阿里云OSS。
- koa默认只集成最少的中间件
- 使用pm2启动程序

## 架构说明
- app.js 程序启动文件
- db.js 数据库连接文件
- model 模型目录
    - 默认有api_msg的模型
- loader 加载器，目前内置了路由加载器和中间件加载器
    - md_loader 负责加载所有的middleware
    - router_loader 负责加载所有的路由
- router 路由层，不处理业务逻辑，主要是从req取出参数，调用controller处理，获取处理的结果，给予response响应。
- middleware 中间件层
    - rest_handler rest中间件，主要给ctx安装success和error方法
    - err_handler 全局错误处理中间件，处理API级别，controller级别，数据库级别和未知错误
    - jwt_handler 处理基于jwt的token验证，检测method和path
- controller 逻辑层，主要处理业务逻辑，被router层调用。controller不操作response，如果遇到错误就抛出，由err_handler统一处理


## 启动，重启，监视
请先安装pm2。
启动：
```bash
pm2 start app.js
```
重启：
```bash
pm2 reload app.js
```
监视：
```bash
pm2 list
```


