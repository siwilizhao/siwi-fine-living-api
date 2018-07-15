const Router = require('koa-router')
const Gateway = require('../app/services/gateway')
const router = new Router()
router.post('/services/gateway', Gateway.gateway)
module.exports = router