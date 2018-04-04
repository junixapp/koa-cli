//connect db
require('./db')
const Koa = require('koa')
const load_md = require('./loader/md_loader')
const load_router = require('./loader/router_loader')

const app = new Koa()
//init
load_md(app)
load_router(app)

app.listen(80)

