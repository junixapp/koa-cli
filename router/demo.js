'use strict'

const Router = require('koa-router')

const router = new Router({
    prefix: '/demo'
})

router.get('demo','/', async (ctx) => {
    ctx.success({method: ctx.method})
})
router.post('demo','/', async (ctx) => {

    ctx.success({method: ctx.method})
})


module.exports = router