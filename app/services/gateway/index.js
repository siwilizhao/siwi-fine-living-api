const Services = require('../controllers/services')
class Gateway {
    constructor() {

    }
    async gateway(ctx, next) {
        const data = ctx.request.body
        console.log(data)
        try {
            ctx.body= await Services.distrubute(data)
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
module.exports = new Gateway()