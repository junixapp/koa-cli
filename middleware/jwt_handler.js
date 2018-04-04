'use strict'
/**
 * token验证和权限检查
 */
const jwt = require('jsonwebtoken')
const util = require('util')
const config = require('../config')
const {TokenMissError, TokenInvalidError, TokenWrongError} = require("../model/api_msg")

//需要验证的方法
const authMethods = ['POST', 'PUT', 'DELETE']

//排除的路由
const excludePaths = [
    '/api/auth/login',
    '/api/auth/register',
]

//检查是否需要排除
function isExclude(method, path) {
    //1. 先判断方法
    if (!authMethods.includes(method.toUpperCase())) {
        return true
    }

    //2. 再判断路径
    if (excludePaths.includes(path)) {
        return true
    }
    excludePaths.forEach((p) => {
        if (path.startsWith(p)) {
            return true
        }
    })
    return false
}


module.exports = () => async (ctx, next) => {
    if (isExclude(ctx.method, ctx.path)) {
        await next()
    } else {
        // 验证jwt
        if (!ctx.header.token) {
            throw TokenMissError
        }
        try {
            const data = await util.promisify(jwt.verify)(ctx.header.token, config.JWT_SECRET)
            // 从token解码出来的数据一般是用户标识
            // 在此处可以将当前user的信息查询出来，放到ctx.state
            // ctx.state.user = null

            await next()
        } catch (e) {
            if (e.name === 'TokenExpiredError') {
                // token过期
                throw TokenInvalidError
            } else if (e.name === 'JsonWebTokenError') {
                // secret 错误
                throw TokenWrongError
            }
        }

    }
}