'use strict'
const config = process.env.NODE_ENV === 'development'? require('./dev_config') : require('./prod_config')
module.exports = config