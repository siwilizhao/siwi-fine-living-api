const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const  logger = require('koa-logger')

const app = new Koa()

app.use(bodyParser())
app.use(logger())

/**
 * router
 */
const service = require('./routes/service')
app.use(service.routes())

app.listen(3000, () => {
    console.log('the app is listening at port 3000')
})

module.exports = app