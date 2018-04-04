const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const errHandler = require('../middleware/err_handler')
const jwtHandler = require('../middleware/jwt_handler')
const restHandler = require('../middleware/rest_handler')

function load_middlerware(app) {
    //logger放在restHandler的外层，因为内部会更改ctx的status，
    app.use(logger())

    //rest_handler，给ctx安装success和error方法
    app.use(restHandler())

    // global error handler
    app.use(errHandler())

    // 解析请求的body参数
    app.use(bodyParser())

    // ################################### 以下为业务中间件 ##########################################
    // jwt中间件
    app.use(jwtHandler())

}

module.exports = load_middlerware
